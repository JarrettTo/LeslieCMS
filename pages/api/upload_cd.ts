import type { NextApiRequest, NextApiResponse } from 'next';
const formidable = require('formidable');
import fs, { read } from 'fs';

import cloudinary from 'cloudinary';

const path = require('path');
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

interface CookieObject {
  [key: string]: string;
}


function parseCookies(req: NextApiRequest): CookieObject {
  const list: CookieObject = {};
  const cookieHeader = req.headers.cookie;

  if (cookieHeader) {
    cookieHeader.split(';').forEach((cookie) => {
      const parts = cookie.split('=');
      const key = parts.shift().trim();
      if (key) {
        list[key] = decodeURI(parts.join('='));
      }
    });
  }

  return list;
}
export default async (req: NextApiRequest, res: NextApiResponse) => {

  try{

    const cookies = parseCookies(req);
    const accessToken = cookies.token;
    var error_msg="";
    const Dropbox = require('dropbox').Dropbox;
    const dbx = new Dropbox({ accessToken });
    const form = new formidable.IncomingForm();
    
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing the form data:', err);
        return res.status(500).json({ error: 'Error parsing form data' });
      }
 
     // Handle your logic here. 'fields' contains non-file fields; 'files' contains file data
     
     const jsonData = JSON.parse(fields.json[0]);


     const uploadPromises = jsonData.map((record) => {

      
    
      const index = files.files.findIndex(file => file.originalFilename === record.FILE_NAME);

      if (index !== -1) {
          // Found the file, index is the index of the file in files.files
          console.log(`File found at index: ${index}`);
      } else {
          // File not found
          console.log("File not found");
      }
      // Adjust the logic to find the correct file in the 'files' object
      const file = files.files[index]; // Adjust this according to how files are named
      
      if (!file) {
        error_msg= error_msg+`${record.FILE_NAME}, `

      }
      else{
        const fileDate = new Date(file.lastModifiedDate).toISOString();
        const context = {
          AWARD: record.AWARD,
          IDEA: record.IDEA,
          AGENCY: record.AGENCY,
          CLIENTS: record.CLIENTS,
          DIRECTOR: record.DIRECTOR,
          SOUND: record.SOUND,
          WITH: record.WITH,
          MY_ROLE: record.MY_ROLE,
          PRODUCTION_CO: record.PRODUCTION_CO,
          DATE: fileDate
        };

        return new Promise((resolve, reject) => {
          const readStream = fs.createReadStream(file.filepath);
          const cloudinaryStream= cloudinary.v2.uploader.upload_stream({ 
            resource_type: 'auto', 
            public_id: record["FILE_NAME"], // Optional: use a public ID from the record
            context: context // Optional: add additional metadata from the record
          }, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
          const cloudinaryResult = readStream.pipe(cloudinaryStream);
          const dropboxPath = '/' + file.originalFilename; // Set your Dropbox path

          fs.readFile(file.filepath, (err, contents) => {
              if (err) {
                reject(err);
              }

              dbx.filesUpload({ path: dropboxPath, contents })
                .then(dropboxResult => {
                  resolve(dropboxResult);
                })
                .catch(error => {
                  reject(error);
                });
            });
          });
        }
      
    });

 
    const uploadResults = await Promise.allSettled(uploadPromises);
    uploadResults.forEach((result) => {
      if (result.status === 'rejected') {
        console.log('A file upload failed:', result.reason);
      }
    });
    if(error_msg==""){
      res.status(200).json({ message: 'Files uploaded successfully', data: uploadResults, status: 200});
    }
    else{
      res.status(400).json({ message: error_msg, data: uploadResults, status: 400});
    }
    
   });
   
  
    

  // Send back the response with Cloudinary results
    

  } catch (error) {
    console.log("Here")
    res.status(500).json({ error: 'Error uploading to Cloudinary', details: error });
  }
}


export const config = {
  api: {
    bodyParser: false, // Disables body parsing, leaving it to multer
  },
};
