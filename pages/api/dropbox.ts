import { Dropbox } from 'dropbox';
import type { NextApiRequest, NextApiResponse } from 'next';


interface DropboxFilesList {
  entries: any[];
  cursor: string;
  has_more: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DropboxFilesList | { error: string }>
) {
  const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });

  try {
    // Specify the types of the response you expect from Dropbox SDK
    const response = await dbx.filesListFolder({ path: '' }) as unknown as DropboxFilesList;
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred when connecting to Dropbox.' });
  }
}
