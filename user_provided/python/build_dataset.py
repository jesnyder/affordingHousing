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

from analyze_dataset import analyze_dataset

def build_dataset():
    """
    list clinical trials using an MSC intervention
    """

    tasks = [0]



    # FMR & IL API
    # https://www.huduser.gov/portal/dataset/fmr-api.html
    if 0 in tasks:
        hud_fids()
        summarize_metro_codes()
        summarize_state_codes()
        summarize_fips_codes()
        lookup_codes()

    # FMR & IL API
    # https://www.huduser.gov/portal/dataset/fmr-api.html
    if 1 in tasks: hud_fmr()

    # Crosswalk
    # https://www.huduser.gov/portal/dataset/uspszip-api.html
    if 2 in tasks: hud_crosswalk()


def lookup_codes():
    """
    lookup codes
    """

    # https://www.huduser.gov/portal/dataset/fmr-api.html
    url_base = 'https://www.huduser.gov/hudapi/public/'

    fol_dsts = ['fmr_il_state_code', 'fmr_il_metro_code', 'fmr_il_fips_code']
    ref_types = ['state_code_df', 'metro_code_df', 'fips_code_df']

    endpoints = ['fmr/listStates', 'fmr/listMetroAreas']
    endpoints_defined = ['fmr/listCounties/{stateid}', 'fmr/data/{entityid}', 'fmr/statedata/{statecode}', 'il/data/{entityid}', 'il/statedata/{statecode}']

    for ref_type in ref_types:

        for fip_code in list(retrieve_df(ref_type)['code']):

            i = ref_types.index(ref_type)
            fol_dst = retrieve_path(fol_dsts[i])

            if 'fips_code' in str(ref_type):
                #print('ref_type = ' + str(ref_type))
                fip_code = str(fip_code).zfill(10)

            filename = str(fip_code)
            fil_dst = os.path.join(fol_dst, filename + '.json')
            if os.path.exists(fil_dst) == True: continue

            datasets = ['fmr', 'il']
            json_responses = {}
            json_responses['responses'] = { datasets[0]: [], datasets[1]: []}
            for dataset in ['fmr', 'il']:

                responses = []
                for year in np.arange(2017, 2023, 1):

                    url = url_base + str(dataset) + '/data/'
                    if 'fip_code' in str(ref_type):
                        url = url + str(fip_code).zfill(10)
                    else:
                        url = url + str(fip_code)

                    if 'state_code' in ref_type:
                        url = url_base + str(dataset) + '/statedata/'
                        url = url + str(fip_code)

                    url = url + '?year=' + str(year)

                    response = get_response_json_object(url)
                    if response == {}: continue

                    responses.append(response['data'])
                    json_responses['responses'][dataset] = responses
            # print('json_reponse = ')
            # print(json_response)
            save_json(json_responses, fil_dst)


def summarize_fips_codes():
    """
    list fips code
    """

    url_base = 'https://www.huduser.gov/hudapi/public/fmr/listCounties/'

    state_codes = list(retrieve_df('state_code_df')['code'])
    for state_code in state_codes:

        fol_dst = retrieve_path('listCounties')
        fil_dst = os.path.join(fol_dst, state_code + '.json')
        if os.path.exists(fil_dst) == True: continue

        url = url_base + str(state_code)
        json_response = get_response_json_object(url)
        # print('json_reponse = ')
        # print(json_response)
        save_json(json_response, fil_dst)

    fips_codes = []
    for file in os.listdir(retrieve_path('listCounties')):

        fil_src = os.path.join(retrieve_path('listCounties'), file)
        counties = retrieve_json(fil_src)
        for county in counties:
            fips_code = county['fips_code']
            fips_codes.append(fips_code)

        df = pd.DataFrame()
        df['code'] = fips_codes
        df.to_csv(retrieve_path('fips_code_df'))


def summarize_state_codes():
    """
    save state codes as a list
    """

    fol_src = os.path.join(retrieve_path('hud_ref'))

    for fil in os.listdir(fol_src):

        if 'States' not in fil: continue

        fil_src = os.path.join(fol_src, fil)
        states_list = retrieve_json(fil_src)
        print('states_list = ')
        print(states_list)

        state_codes = []
        for item in states_list:

            print('item = ')
            print(item)

            state_code = item['state_code']
            print('state_code = ')
            print(state_code)

            if state_code in state_codes: continue
            state_codes.append(state_code)

        df = pd.DataFrame()
        df['code'] = state_codes
        df.to_csv(retrieve_path('state_code_df'))
        return(state_codes)


def summarize_metro_codes():
    """
    save list of metro codes
    """

    fol_src = os.path.join(retrieve_path('hud_ref'))

    for fil in os.listdir(fol_src):

        if 'Metro' not in fil: continue

        fil_src = os.path.join(fol_src, fil)

        metro_codes = []
        for item in retrieve_json(fil_src):

            print('item = ')
            print(item)

            metro_code = item['cbsa_code']
            if metro_code in metro_codes: continue
            metro_codes.append(metro_code)

        df = pd.DataFrame()
        df['code'] = metro_codes
        df.to_csv(retrieve_path('metro_code_df'))
        return(metro_code)


def hud_fids():
    """
    Retrieve state info
    FMR IL Dataset API Documentation
    https://www.huduser.gov/portal/dataset/fmr-api.html
    """

    auth_token = list(retrieve_df('auth_token')['auth_token'])[0]

    url_base = 'https://www.huduser.gov/hudapi/public/fmr'
    url_base = 'https://www.huduser.gov/hudapi/public/'
    endpoints = ['fmr/listStates', 'fmr/listMetroAreas']
    endpoints_defined = ['fmr/listCounties/{stateid}', 'fmr/data/{entityid}', 'fmr/statedata/{statecode}', 'il/data/{entityid}', 'il/statedata/{statecode}']

    for endpoint in endpoints:

        filename = endpoint.replace('/', '-')
        fil_dst = os.path.join(retrieve_path('hud_ref'), filename + '.json')
        if os.path.exists(fil_dst) == True: continue

        url = url_base + endpoint
        print('url = ')
        print(url)

        json_obj = get_response_json_object(url)
        save_json(json_obj, fil_dst)


def hud_fmr():
    """
    FMR IL Dataset API Documentation
    https://www.huduser.gov/portal/dataset/fmr-api.html
    """

    auth_token = list(retrieve_df('auth_token')['auth_token'])[0]

    base_url = 'https://www.huduser.gov/hudapi/public/fmr'

    entityid = '5002175925'
    entityid = 'METRO38900M38900'

    cbsa_codes = []
    for item in retrieve_json(os.path.join(retrieve_path('hud_ref'), 'fmr-listMetroAreas.json')):

        cbsa_code = item['cbsa_code']
        if cbsa_code in cbsa_codes: continue
        cbsa_codes.append(cbsa_code)

    for cbsa_code in cbsa_codes:

        print('cbsa_code = ')
        print(cbsa_code)

        entityid = cbsa_code

        json_years = {}
        json_years['count_results'] = 0
        json_years['results'] = []
        list_years = []
        for year in np.arange(2015, 2023, 1):

            url = base_url + '/data/' + entityid + '?year=' + str(year)
            #url = 'https://www.huduser.gov/hudapi/public/fmr/data/5002175925?year=2017'
            #url = 'https://www.huduser.gov/hudapi/public/fmr/statedata/MA'
            print('url = ')
            print(url)

            returned = get_response_json_object(url, auth_token)
            if returned == {}: continue
            json_returned = {}
            #json_returned['url'] = url
            #json_returned['year'] = year
            json_returned['returned'] = returned
            print('json_returned = ')
            print(json_returned)

            list_years.append(json_returned)
            json_years['count_results'] = len(list_years)
            json_years['results'] = list_years

            #filename = str(type).zfill(2) + '_type_' + str(zip) + '_zip_' +str(year) + '_year_' + str(quarter).zfill(2) + '_type_' + '.json'
            filename = entityid + '_' + str(year)
            filename = entityid
            fil_dst = os.path.join(retrieve_path('hud_fmr') , filename + '.json')
            print('fil_dst = ' + str(fil_dst))
            save_json(json_years, fil_dst)


def hud_crosswalk():
    """

    """

    auth_token = list(retrieve_df('auth_token')['auth_token'])[0]
    print('auth_token = ')
    print(auth_token)

    # information from
    # https://www.huduser.gov/portal/dataset/uspszip-api.html
    base_url = 'https://www.huduser.gov/hudapi/public/usps'

    types = [1]
    years = np.arange(2000, 2023, 1)
    states = ['VA', 'CA']

    zips = list(retrieve_df('porland_oregon_zips')['zips'])

    for zip in zips:
        print('zip = ' + str(zip))
        for type in types:
            for year in years:
                for quarter in [1, 2, 3, 4]:

                    url = base_url + '?' + 'type=' + str(type) + '&' + 'query=' + str(zip)
                    url = url + '&' + 'year=' + str(year)
                    url = url + '&' + 'quarter=' + str(quarter)

                    print('url = ')
                    print(url)

                    returned = get_response_json_object(url, auth_token)
                    if returned == {}: continue
                    json_returned = {}
                    json_returned['item_count'] = len(returned)
                    json_returned['url'] = url
                    json_returned['returned'] = returned

                    filename = str(type).zfill(2) + '_type_' + str(zip) + '_zip_' +str(year) + '_year_' + str(quarter).zfill(2) + '_type_' + '.json'
                    fil_dst = os.path.join(retrieve_path('hud_download') , filename)
                    save_json(json_returned, fil_dst)


def get_response_json_object(url):
    """
    returns json object with info
    """

    auth_token = list(retrieve_df('auth_token')['auth_token'])[0]

    print('url = ')
    print(url)

    #req=urllib2.Request(url, None, {"Authorization": "Bearer %s" %auth_token})
    #response=urllib2.urlopen(req)
    time.sleep(1.1)

    #req = urllib.request.Request(url, None, {"Authorization": "Bearer %s" % auth_token})

    headers = {"Authorization": "Bearer {0}".format(auth_token)}
    response = requests.get(url, headers = headers)

    if response.status_code != 200:
        print ("Failure, see status code: {0}".format(response.status_code))
        return({})

    else:
        # time.sleep(3)
        # req = urllib.request.Request(url, None, {"Authorization": "Bearer %s" % auth_token})

        json_obj = response.json()
        print('json_obj = ')
        print(json_obj)
        return json_obj
