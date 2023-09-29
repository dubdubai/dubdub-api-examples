import requests

file_path = '<file_path>' # replace <file_path> with the path of the file to be uploaded

upload_uri = '<upload_uri>' # replace <upload_uri> with the uri that was received while creating content
with open(file_path, 'rb') as f:
    res = requests.put(url=upload_uri, data=f.read())

if res.status_code!=200:
    print(res.status_code, res.text)
else:
    print(res.status_code)