const axios = require('axios');
const fs = require('fs');

const url = 'https://api.dubdub.ai/v1/dubbing/download_content/<content_id>?target_language=<target_language>&output_file=<output_file>'; // Replace with the content_id with required content_id
// Also replace <target_language> with the required target_language code and <output_file> with required output_file type

const outputPath = '<outputPath>'; // Path where you want to save the file.
// Use extension .mp4 for video and .wav for audio types and .srt for srt

const headers = {
    'api_key': '<api_key>', // Replace <api_key> with your api_key
};

axios({
    method: 'get',
    url: url,
    responseType: 'stream', // Set the response type to stream
    headers: headers,
})
.then(function (response) {
    response.data.pipe(fs.createWriteStream(outputPath));
})
.catch(function (error) {
    console.error('Error:', error);
});