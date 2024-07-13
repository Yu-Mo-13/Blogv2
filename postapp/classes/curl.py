import requests as req
import json
from common.config import *

class Curl:
    def __init__(self, url):
        self.headers = {
            'X-MICROCMS-API-KEY': getConfig('APIINFO', 'APIKEY'),
            'Content-Type': 'application/json'
        }
        self.url = url

    def get(self):
        res = req.get(self.url, headers=self.headers)
        return res.json()
    
    def post(self, data):
        res = req.post(self.url, data=json.dumps(data), headers=self.headers)
        return res.json()
