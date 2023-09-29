const axios = require('axios');
const fs = require('fs');

const url = 'https://api.dubdub.ai/v1/dubbing/download_content/<content_id>?target_language=hi-IN&output_file=video'; // Replace with the URL you want to download
const outputPath = '/Users/unmeshkumar/Downloads/downloaded_conv_dot__mp4_hindi_through_js.mp4'; // Path where you want to save the file

const headers = {
    'api_key': '<api_key>', // Replace with your authorization header
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