# -*- coding: utf-8 -*-
import requests
import json

 
#请求地址
url = "http://127.0.0.1:7001/api/users/runjob"
response = requests.get(url)
#获取请求状态码 200为正常
if(response.status_code == 200):
    #获取相应内容
    content = response.text
    #json转字典（数组）
    json_log = json.loads(content)
    print(json_log)
else:
    print("请求失败!")

