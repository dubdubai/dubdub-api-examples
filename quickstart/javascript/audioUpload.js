const axios = require('axios');
const fs = require('fs');

const uploadUri = "<upload_uri>"
let filePath = '/Users/unmeshkumar/Downloads/vocab.mp3';


fs.readFile(filePath, (err, data) => {
   if (err) {
       console.error('Error reading the file:', err);
       return;
   }

   axios.put(uploadUri, data, {
      headers: {
          'Content-Type': 'audio/mpeg'
            }
      })
      .then(response => {
         console.log(response.status);
      })
      .catch(error => {
         console.error(error);
      });
});