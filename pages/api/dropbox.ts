import { Dropbox, DropboxResponse, sharing } from 'dropbox';
import type { NextApiRequest, NextApiResponse } from 'next';


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
    const files = await dbx.filesListFolder({ path: '' }) as unknown as DropboxFilesList;

    const linksPromises= files.entries?.map(async (file) => {
      if(file['.tag'] === 'file' ){
          dbx.sharingCreateSharedLinkWithSettings({
          path: file.path_lower,
        });

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
