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

    tasks = [0, 1]

    # json fids fmr and il
    if 0 not in tasks: json_fids()
    if 1 not in tasks: list_slopes()
    if 2 not in tasks: make_chartjs()
    if 3 not in tasks: make_scatter()
    if 4 not in tasks: template_html()
    #analyze_hud_fmr()
    #template_html()



def make_scatter():
    """
    make a chart for each fid code
    save a js in doc
    """

    for fid in retrieve_json(retrieve_path('fids_json'))['fids']:

        fid_code = str(fid['desc']['fid_code']).zfill(10)
        filename = fid_code
        fil_dst = os.path.join(retrieve_path('chart_js'), fid_code + '.js')

        data = {}
        data['labels'] = fid['data']['year']
        data['datasets'] = []

        datasets = []
        for key in  fid['data'].keys():

            if 'year' in key: continue
            #if 'ratio' in key: continue
            if 'slope' in key: continue
            if 'il' in key: continue
            if 'fmr' in key: continue

            dataset = {}
            dataset['data'] = fid['data'][key]
            dataset['label'] = key
            #dataset['borderColor'] = "#3e95cd"
            dataset['fill'] = 'false'
            #dataset['yAxisID'] = 'y'
            dataset['borderColor']: 'rgb(25, 25, 192)'
            if 'il' in str(key):
                #dataset['yAxisID'] = 'y1'
                dataset['borderColor']: 'rgb(75, 192, 192)'

            datasets.append(dataset)

        data['datasets'] = datasets

        chart_json = {
            'type': 'scatter',
            'data': data,
        }


        with open(fil_dst, "w") as f:
            #f.write('var ' + filename + ' = ')
            #json.dump(data, f, indent = 4)
            #f.write('\n')
            #f.write('\n')
            f.write('new Chart(document.getElementById("' + filename + '_plot' + '"),')
            json.dump(chart_json , f, indent = 4)
            f.write(');')
        f.close()




def make_chartjs():
    """
    make a chart for each fid code
    save a js in doc
    """

    for fid in retrieve_json(retrieve_path('fids_json'))['fids']:

        fid_code = str(fid['desc']['fid_code']).zfill(10)
        filename = fid_code
        fil_dst = os.path.join(retrieve_path('chart_js'), fid_code + '.js')

        data = {}
        data['labels'] = fid['data']['year']
        data['datasets'] = []

        datasets = []
        for key in  fid['data'].keys():

            if 'year' in key: continue
            #if 'ratio' in key: continue
            if 'slope' in key: continue
            if 'il' in key: continue
            if 'fmr' in key: continue

            dataset = {}
            dataset['data'] = fid['data'][key]
            dataset['label'] = key
            #dataset['borderColor'] = "#3e95cd"
            dataset['fill'] = 'false'
            #dataset['yAxisID'] = 'y'
            dataset['borderColor']: 'rgb(25, 25, 192)'
            if 'il' in str(key):
                #dataset['yAxisID'] = 'y1'
                dataset['borderColor']: 'rgb(75, 192, 192)'

            datasets.append(dataset)

        data['datasets'] = datasets

        chart_json = {
            'type': 'line',
            'data': data,
            'options': {
                'stacked': False,
                'title': {
                    'display': 'true',
                    'text': filename + ': ' + fid['desc']['area_name'],
                },
                'scales': {
                        'y':{ 'type': 'linear', 'display': True, 'position': 'left'},
                        'y1':{ 'type': 'linear', 'display': True, 'position': 'right'},
                },

            },
        }


        with open(fil_dst, "w") as f:
            #f.write('var ' + filename + ' = ')
            #json.dump(data, f, indent = 4)
            #f.write('\n')
            #f.write('\n')
            f.write('new Chart(document.getElementById("' + filename + '_plot' + '"),')
            json.dump(chart_json , f, indent = 4)
            f.write(');')
        f.close()


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

        if str(fil[0]) != '0':
            #os.remove(fil_src)
            continue

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




def template_html():
    """

    """

    fil_dst = retrieve_path('template_html')


    with open(fil_dst, "w") as f:


        for fil in os.listdir(retrieve_path('chart_js')):

            filename = fil.split('.')[0]

            line = '<div id="container" style="text-align:center; width:80%; margin-left: 10%; max-width:800px;">'
            f.write(line)
            f.write('\n')

            line = '<canvas id="' + filename + '_plot" height="150"  style="border:0px solid"></canvas>'
            f.write(line)
            f.write('\n')

            line = '<script src="js/' + filename + '.js"></script>'
            f.write(line)
            f.write('\n')

            line = '</div>'
            f.write(line)
            f.write('\n')
            f.write('\n')

    f.close()


def analyze_hud_fmr():
    """

    """

    for fil in os.listdir(retrieve_path('chart_js')):


        df = pd.DataFrame()
        filename = fil.split('.')[0]
        fil_src = os.path.join(retrieve_path('chart_js'), fil)
        contents = retrieve_json(fil_src)

        #print('contents.keys() = ')
        #print(contents.keys())

        for result in contents['results']:

            #print('result.keys() = ')
            #print(result.keys())

            #print('result =')
            #print(result)

            areaname = result['returned']['data']['area_name']

            df_temp = pd.DataFrame()

            try:
                for key in result['returned']['data']['basicdata'].keys():

                    #print('key = ' + key)
                    #print( result['returned']['data']['basicdata'][key])
                    df_temp[key] = [result['returned']['data']['basicdata'][key]]

            except:
                print('except found')

            df = df.append(df_temp)
            print('df = ')
            print(df)

        fil_dst = os.path.join(retrieve_path('metro_fmr'), filename + '.csv')
        df.to_csv(fil_dst)
        print('df = ')
        print(df)
        js_var_data(filename, df, areaname)

        template_html()
