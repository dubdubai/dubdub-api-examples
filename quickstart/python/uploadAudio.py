import requests

file_path = '/Users/unmeshkumar/Downloads/vocab.mp3'

upload_uri = '<upload_uri>'
with open(file_path, 'rb') as f:
    res = requests.put(url=upload_uri, data=f.read())

if res.status_code!=200:
    print(res.status_code, res.text)
else:
    print(res.status_code)