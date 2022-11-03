import datetime
import json
import math
import numpy as np
import os
import pandas as pd
import random
import re
import requests
import time
import urllib
#import urllib2
from urllib.request import urlopen

from admin import reset_df
from admin import retrieve_df
from admin import retrieve_path
from admin import retrieve_json
from admin import save_json
from admin import save_value


def analyze_dataset():
    """
    analyze dataset
    """

    tasks = []

    # json fids fmr and il
    if 0 not in tasks: json_fids()
    if 2 not in tasks: list_slopes()
    if 3 not in tasks: compile_values()
    if 4 not in tasks: summarize_values()


def compile_values():
    """
    save all values in a df = summary.csv
    """

    df = pd.DataFrame()

    for fid in retrieve_json(retrieve_path('fids_json'))['fids']:

        df_temp = pd.DataFrame()
        df_temp['fid_code'] = [str(fid['desc']['fid_code']).zfill(10)]

        years = fid['data']['year']

        for key in fid['data']:

            if key == 'slope':

                col_name = str(key)
                value = fid['data'][key]
                df_temp[col_name] = [value]

            else:

                for i in range(len(years)):

                    year = years[i]
                    col_name = str(key + '_' + str(year))
                    value = fid['data'][key][i]
                    df_temp[col_name] = [value]

        df = df.append(df_temp)
        df.to_csv(retrieve_path('all_data_df'))


def summarize_values():
    """
    save a summary
    """

    df = retrieve_df('all_data_df')
    df_sum = pd.DataFrame()

    for col_name in df.columns:

        if 'fid_code' in str(col_name): continue
        if 'year' in str(col_name): continue

        print('list(df[col_name]) = ')
        print(list(df[col_name]))

        df_temp = pd.DataFrame()
        df_temp['name'] = [col_name]
        df_temp['min'] =  [min(list(df[col_name]))]
        df_temp['max'] =  [max(list(df[col_name]))]
        df_temp['avg'] =  [sum(list(df[col_name]))/len(list(df[col_name]))]
        df_temp['len'] =  [len(list(df[col_name]))]

        df_sum = df_sum.append(df_temp)
        df_sum.to_csv(retrieve_path('summary_df'))


def write_geojson():
    """
    coregister geojson defining us counties with cdc data
    use CountyFIDs to match cdc data to counties
    assign a value and color to each county
    save as a .js file defining a variable
    """

    # read in geojson for each county
    f = open(retrieve_path('geojson_counties_src'), encoding='latin-1')
    us_counties_ref = json.load(f)
    f.close()

    #print('us_counties = ')
    #print(len(us_counties['features']))

    # establish json variable
    #geojson_hud = us_counties_ref
    features = []
    geojson_hud = {'item_count': 0, 'type': 'FeatureCollection',}
    geojson_hud['features'] = []

    for county in us_counties_ref['features']:

        #print('county = ')
        #print(county)

        county_code = str(county['properties']['STATE']).zfill(2) + str(county['properties']['COUNTY']).zfill(3)

        print('county_code = ' + str(county_code))

        for fid in retrieve_json(retrieve_path('fids_json'))['fids']:

            # find unique identifier
            fid_code = fid['desc']['fid_code']
            fid_code = str(fid_code[0:5]).zfill(5)
            #print('fid_code = ' + str(fid_code))

            if str(fid_code) != str(county_code): continue

            print('fid_code = ' + str(fid_code))

            feature = county
            feature['properties']['Income Level'] = fid['data']['il'][-1]
            feature['properties']['FMR'] = fid['data']['fmr'][-1]
            feature['properties']['ratio'] = fid['data']['ratio'][-1]
            feature['properties']['slope'] = fid['data']['slope']
            feature['properties']['color'] = calculate_rgb_color(fid['data']['slope'], 'slope')

            if feature in features: continue
            features.append(feature)
            geojson_hud['item_count'] = len(features)
            geojson_hud['features'] = features

            with open(retrieve_path('geojson_hud_county'), "w") as f:
                f.write('var ' + 'geojson_hud_county' + ' = ' )
                json.dump(geojson_hud, f, indent = 4)
                f.write('\n')
                f.write(';')
            f.close()

            #save_json(geojson_hud, 'geojson_hud_county')
            continue


def list_slopes():
    """
    create slops.csv
    """

    df = pd.DataFrame()
    for fid in retrieve_json(retrieve_path('fids_json'))['fids']:

        df_temp = pd.DataFrame()
        df_temp['fid_code'] = [fid['desc']['fid_code']]
        df_temp['desc'] = [fid['desc']['county_name']]
        df_temp['slope'] = [fid['data']['slope']]
        df = df.append(df_temp)
        df = df.sort_values(by='slope', ascending=True)
        df = reset_df(df)
        df.to_csv(retrieve_path('slopes'))

    print('df = ')
    print(df)


def json_fids():
    """
    create a json file with all fids
    """

    fids = []
    fids_json = {}
    fids_json['fid_count'] = 0
    fids_json['fids'] = fids

    fol_src = retrieve_path('fmr_il_fips_code')
    for fil in os.listdir(fol_src):

        fil_src = os.path.join(fol_src, fil)

        """
        if str(fil[0]) != '0':
            #os.remove(fil_src)
            continue
        """

        print('fil_src = ')
        print(fil_src)


        ref_json = retrieve_json(fil_src)
        #print('ref_json = ')
        #print(ref_json)

        fid_code = str(fil.split('.')[0]).zfill(10)

        fid = {}
        fid['desc'] = build_desc(ref_json, fid_code)
        fid['data'] = {}

        fid['data']['year'] = list_years(ref_json)
        fid['data']['il'] = list_income_level(ref_json)
        fid['data']['fmr'] = list_fmr(ref_json)
        fid['data']['ratio'] = list_ratio(ref_json)
        fid['data']['slope'] = find_slope(ref_json)

        fids.append(fid)
        fids_json['fid_count'] = len(fids)
        fids_json['fids'] = fids
        save_json(fids_json, retrieve_path('fids_json'))


def find_slope(ref_json):
    """
    return a list of ratio
    """

    ratios = []
    fmrs = list_fmr(ref_json)
    ils = list_income_level(ref_json)
    years = list_years(ref_json)

    for i in range(len(fmrs)):
        fmr = fmrs[i]
        il = ils[i]
        ratio = fmr/il
        ratios.append(ratio)

    #print('years = ')
    #print(years)
    #print('ratios = ')
    #print(ratios)

    slope, intercept = np.polyfit(years,ratios,1)

    return(slope)


def list_ratio(ref_json):
    """
    return a list of ratio
    """

    ratios = []
    fmrs = list_fmr(ref_json)
    ils = list_income_level(ref_json)

    for i in range(len(fmrs)):
        fmr = fmrs[i]*12
        il = ils[i]
        ratio = fmr/il
        ratios.append(ratio)
    return(ratios)


def build_desc(ref_json, fid_code):
    """
    return a description
    """

    desc = {}
    desc['fid_code'] = fid_code

    for key in ref_json['responses']['fmr'][0].keys():

        if 'basicdata' in key: continue
        desc[key] = ref_json['responses']['fmr'][0][key]

    return(desc)


def list_fmr(ref_json):
    """
    return a list of years
    """
    fmrs= []

    for item in ref_json['responses']['fmr']:

        #print('item = ')
        #print(item)
        rents = []
        temps = item['basicdata']

        #print('temps = ')
        #print(temps)

        if type(temps) == list: temps = item['basicdata']
        else: temps = [item['basicdata']]

        for temp in temps:
            #print('temp =')
            #print(temp)
            #print('temp.keys() =')
            #print(temp.keys())
            #print('temp[\'Efficiency\'] =')
            rent = temp['Efficiency']
            rents.append(rent)

        fmr = sum(rents)/len(rents)
        fmrs.append(fmr)

    return(fmrs)


def list_income_level(ref_json):
    """
    return a list of years
    """
    ils= []

    for item in ref_json['responses']['il']:

        #print('item = ')
        #print(item)
        il = item['median_income']
        ils.append(il)

    return(ils)


def list_years(ref_json):
    """
    return a list of years
    """
    years = []

    for item in ref_json['responses']['fmr']:

        #print('item = ')
        #print(item)

        try:
            year = item['basicdata']['year']
        except:
            year = int(item['year'])

        year = int(float(year))
        years.append(year)

    return(years)
