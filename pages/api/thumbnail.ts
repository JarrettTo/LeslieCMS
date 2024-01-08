
import { Dropbox } from 'dropbox';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Buffer | { error: string; }>
  ) {
  const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });
    try{
        const path = req.query.path as string;
        const response = await dbx.filesGetThumbnail({ path, format: {".tag" : "jpeg"}, size: {".tag" : 'w640h480'} }) as any;
        console.log(response.result);
        res.status(200).json(response.result.fileBinary);
    }
  
    catch (error){
        throw error;
    }
};


