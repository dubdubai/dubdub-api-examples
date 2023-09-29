import requests

file_path = '/Users/unmeshkumar/Downloads/dubbed_conv_hindi_through_py.mp4'

headers = {'api_key': '<api_key>'}
url = 'https://api.dubdub.ai'

download_content_url = f'/v1/dubbing/download_content/<content_id>'
target_url = f'{url}{download_content_url}'

query_params={
   'target_language': 'hi-IN',
   'output_file': 'video'
}

res = requests.get(url=target_url, params=query_params, headers=headers)
print(res.status_code)

if res.status_code==200:
   open(file_path, 'wb').write(res.content)
else:
   print(res.json())