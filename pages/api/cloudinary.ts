
import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Promise<any>[] | { error: string; }>
) {
  if (req.method === 'GET') {
      try {
          // Retrieve files from Cloudinary
          let result = await cloudinary.v2.api.resources({
            max_results: 500,
            type: 'upload' ,
            context: true
          });
          let result_videos = await cloudinary.v2.api.resources({
            max_results: 500,
            type: 'upload' ,
            resource_type: 'video',
            context: true
          });
          
          const combinedResults = [...result.resources, ...result_videos.resources];
          
          // Send back the combined list of files
          res.status(200).json(combinedResults);
      } catch (error) {
          console.log(error);
          res.status(500).json({ error: 'Error retrieving files from Cloudinary' });
      }
  } else {
      // Handle any other HTTP methods
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
