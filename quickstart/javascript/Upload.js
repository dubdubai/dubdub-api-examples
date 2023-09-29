const axios = require('axios');
const fs = require('fs');

const uploadUri = "<uploadUri>" // replace with the uri that was received while creating content
const filePath = '<filePath>'; // replace with the path of the file to be uploaded


fs.readFile(filePath, (err, data) => {
   if (err) {
       console.error('Error reading the file:', err);
       return;
   }

   axios.put(uploadUri, data)
      .then(response => {
         console.log(response.status);
      })
      .catch(error => {
         console.error(error);
      });
});