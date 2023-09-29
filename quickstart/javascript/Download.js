const axios = require('axios');
const fs = require('fs');

const url = 'https://api.dubdub.ai/v1/dubbing/download_content/<content_id>?target_language=hi-IN&output_file=video'; // Replace with the content_id with required content_id
const outputPath = '<outputPath>'; // Path where you want to save the file. Use extension .mp4 for video and .wav for audio

const headers = {
    'api_key': '<api_key>', // Replace with your api_key
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