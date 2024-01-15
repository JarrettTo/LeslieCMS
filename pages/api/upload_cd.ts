import type { NextApiRequest, NextApiResponse } from 'next';
const formidable = require('formidable');
import fs, { read } from 'fs';
import multer from 'multer';
import { Multer } from 'multer';
import cloudinary from 'cloudinary';
import * as nc from 'next-connect';
import { Express, Request } from 'express';
import { connect } from 'http2';
const path = require('path');
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});




export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("WTF")
  try{

  // Parse JSON from the form data
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing the form data:', err);
        return res.status(500).json({ error: 'Error parsing form data' });
      }
 
     // Handle your logic here. 'fields' contains non-file fields; 'files' contains file data
     
     const jsonData = JSON.parse(fields.json[0]);
     console.log("DATA"+fields.json[0])
     console.log("DATES" + fields['dates[chineserestaurantopenedtakeoutbox32oz3dsmodel001.jpg]'])
     const keys = Object.keys(jsonData);

     const uploadPromises = jsonData.map((record) => {
      console.log("WOW"+record)
      console.log(Object.keys(files.files[0]));
      
    
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
        throw new Error(`No file found matching the name: ${record.FILE_NAME}`);
      }
      console.log("CHECK: " + fields[`dates[${file.originalFilename}]`])
      const fileDate = new Date(file.lastModifiedDate).toISOString();
      const context = {
        award: record.AWARD,
        idea: record.IDEA,
        agency: record.AGENCY,
        clients: record.CLIENTS,
        director: record.DIRECTOR,
        sound: record.SOUND,
        with: record.WITH,
        my_role: record.MY_ROLE,
        production_co: record.PRODUCTION_CO,
        date: fileDate
      };
      console.log(context)
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
        readStream.pipe(cloudinaryStream);
      });
    });
    const uploadResults = await Promise.all(uploadPromises);
    res.status(200).json({ message: 'Files uploaded successfully', data: uploadResults });
   });
   
  
    

  // Send back the response with Cloudinary results
    

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error uploading to Cloudinary', details: error });
  }
}


export const config = {
  api: {
    bodyParser: false, // Disables body parsing, leaving it to multer
  },
};
