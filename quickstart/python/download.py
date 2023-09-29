import requests

file_path = '<file_path>'

headers = {'api_key': '<api_key>'} # Replace <api_key> with your api_key
url = 'https://api.dubdub.ai'

download_content_url = f'/v1/dubbing/download_content/<content_id>' # Replace with the content_id with required content_id

target_url = f'{url}{download_content_url}' # Path where you want to save the file. 
# Use extension .mp4 for video and .wav for audio types and .srt for srt

query_params={
   'target_language': '<target_language>', # replace <target_language> with the required target_language code
   'output_file': '<output_file>' # replace <output_file> with required output_file type
}

res = requests.get(url=target_url, params=query_params, headers=headers)
print(res.status_code)

if res.status_code==200:
   open(file_path, 'wb').write(res.content)
else:
   print(res.json())