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
  res: NextApiResponse<DropboxResponse<any>[] | { error: string; }>
) {
  const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });

  try {
    // Specify the types of the response you expect from Dropbox SDK
    const response = await dbx.filesListFolder({ path: '' });
    const files: DropboxFilesList = response.result; // Use the actual property that has the data
    console.log(files);

    // Ensure files.entries is not undefined before mapping
    if (!files.entries) {
      throw new Error('files.entries is undefined');
    }
    const linksPromises= files.entries.map(async (file) => {
      if(file['.tag'] === 'file' ){
        try{
          const existingLinksResponse= await dbx.sharingListSharedLinks({
            path: file.path_lower,
            direct_only: true, // Set to true to filter for direct links only
          });
          // If there are existing links, return the first one
          if (existingLinksResponse.result.links.length > 0) {
            return existingLinksResponse.result.links[0];
          }
          else{
            return await dbx.sharingCreateSharedLinkWithSettings({
              path: file.path_lower,
           })
          }
        }
        catch (error){
          throw error;
        }
          
        

      }
    })
    const responses = await Promise.all(linksPromises) as unknown as DropboxResponse<any>[];
    

    console.log(responses);
    res.status(200).json(responses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred when connecting to Dropbox.' });
  }
}
