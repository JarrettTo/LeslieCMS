import { Dropbox, DropboxResponse, sharing } from 'dropbox';
import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from 'cloudinary';

interface DropboxFilesList {
  entries: any[];
  cursor: string;
  has_more: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DropboxResponse<any> | { error: string; }>
) {
  const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });

  try {
    // Specify the types of the response you expect from Dropbox SDK
    let path = req.query.path
    if (!Array.isArray(path)) {
      // If 'path' is an array, take the first element or handle as an error
      path = [path];
    }
    const response = await dbx.filesTagsGet({paths: path})
    const metadata = response.result; 
    console.log(metadata);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred when connecting to Dropbox.' });
  }
}
