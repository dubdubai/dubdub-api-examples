const axios = require('axios');
const fs = require('fs');

const uploadUri = "<upload_uri>"
const filePath = '/Users/unmeshkumar/Downloads/conv.mp4';


fs.readFile(filePath, (err, data) => {
   if (err) {
       console.error('Error reading the file:', err);
       return;
   }

   axios.put(uploadUri, data, {
      headers: {
          'Content-Type': 'video/mp4'
            }
      })
      .then(response => {
         console.log(response.status);
      })
      .catch(error => {
         console.error(error);
      });
});