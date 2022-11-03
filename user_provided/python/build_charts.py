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

    if 1 not in tasks: make_chartjs()
    if 2 not in tasks: template_html()
    if 3 not in tasks: write_geojson()
    if 4 not in tasks: make_scatter()
    #analyze_hud_fmr()
    #template_html()



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

            value = fid['data']['il'][-1]
            feature['properties']['Income Level'] = {'value': value, 'color': calculate_rgb_color(value, 'il')}

            value = fid['data']['fmr'][-1]
            feature['properties']['FMR'] = {'value': value, 'color': calculate_rgb_color(value, 'fid')}

            value = fid['data']['ratio'][-1]
            feature['properties']['ratio'] = {'value': value, 'color': calculate_rgb_color(value, 'ratio')}

            value = fid['data']['slope'][-1]
            feature['properties']['slope'] = {'value': value, 'color': calculate_rgb_color(value, 'slope')}

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


def calculate_rgb_color(value, type):
    """
    return a json readable rgb value as a string
    """

    df = retrieve_df('summary_df')
    name = type
    try:
        df = df[df['name'] == name]
    except:
        df = df[df['name'] == str(name + '_2022')]

    value_max = float(list(df['max'])[0])
    value_min = float(list(df['min'])[0])
    value_avg = float(list(df['avg'])[0])

    inc = (value_max - value)/(value_max - value_min)

    if inc > 1: inc = 1
    if inc < 0: inc = 0

    inc = 255*inc

    mods = [1, 0.1, 0]

    # determine the rgb values
    r = int(inc*mods[0])
    g = int(255 - inc*mods[1])
    b = int(255 - inc*mods[2])

    color_str = str('rgb( ' + str(r) + ' , ' +  str(g) + ' , ' + str(b) + ' )')
    #print('color_str = ' + str(color_str))
    return(color_str)


def find_scatter_color(year):
    """
    return a json readable rgb value as a string
    """

    years = np.arange(2017, 2023, 1)
    value_max = max(years)
    value_min = min(years)
    value = year

    inc = (value_max - value)/(value_max - value_min)

    if inc > 1: inc = 1
    if inc < 0: inc = 0

    inc = 255*inc

    mods = [1, 0.25, 0]

    # determine the rgb values
    r = int(inc*mods[0])
    g = int(255 - inc*mods[1])
    b = int(255 - inc*mods[2])

    color_str = str('rgb( ' + str(r) + ' , ' +  str(g) + ' , ' + str(b) + ' )')
    #print('color_str = ' + str(color_str))
    return(color_str)


def make_scatter():
    """
    make a chart for each fid code
    save a js in doc
    """

    # establish destination path
    fil_dst = os.path.join(retrieve_path('scatter_js'))


    datasets = []

    #each year is a dataset
    years = np.arange(2017, 2023, 1)
    for year in years:

        datas = []
        for fid in retrieve_json(retrieve_path('fids_json'))['fids']:

            years_fid = fid['data']['year']

            if year not in years_fid: continue
            j = years_fid.index(year)

            data = {}
            data['labels'] = fid['data']['year']
            data['datasets'] = []

            data = {}
            data['x'] = fid['data']['il'][j]
            data['y'] = fid['data']['fmr'][j]
            data['label'] = fid['desc']['county_name']
            #data['r'] = 10

            datas.append(data)

        dataset = {}
        dataset['data'] = datas
        dataset['label'] = str(year)
        dataset['backgroundColor'] =  find_scatter_color(year)
        dataset['order'] = j
        dataset['type'] = 'scatter',
        datasets.append(dataset)

    config_data = {'datasets': datasets}

    #dataset['borderColor'] = "#3e95cd"
    #dataset['fill'] = 'false'
    #dataset['yAxisID'] = 'y'
    #dataset['borderColor']: 'rgb(25, 25, 192)'
    #if 'il' in str(key):
    #dataset['yAxisID'] = 'y1'
    #dataset['borderColor']: 'rgb(75, 192, 192)'

    chart_json = {
        'type': 'scatter',
        'data': config_data,

        'options': {
            'responsive': True,
            'plugins': { 'legend': {'position': 'top',}},
            'title': {
                'display': True,
                'text': 'Income vs Rent',
            },
            'elements': {'line': { 'fill': False, 'stepped': False} },
            #'tooltips': "{callbacks: {label: function(tooltipItem, data) {var label = data.labels[tooltipItem.index]; return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';}",

        },
    }

    with open(fil_dst, "w") as f:
        #f.write('var ' + 'scatter_data' + ' = ')
        #json.dump(config_data, f, indent = 4)
        #f.write('\n')
        f.write('\n')
        f.write('new Chart(document.getElementById("' + 'first' + '_scatter' + '"),')
        json.dump(chart_json , f, indent = 4)
        f.write(');')
        f.write('\n')
        f.write('\n')

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
