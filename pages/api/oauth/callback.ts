
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const code = req.query.code as string;
    const clientID = 'zxopq57digvsdau';
    const clientSecret = 'zek98gyqk99i51d';
    const redirectURI = 'http://localhost:3000/api/oauth/callback';

    try {
        const params = new URLSearchParams();
        params.append('code', code);
        params.append('grant_type', 'authorization_code');
        params.append('client_id', process.env.CLIENT_ID);
        params.append('client_secret', process.env.CLIENT_SECRET);
        params.append('redirect_uri', process.env.REDIRECT_URI);

        const response = await axios.post('https://api.dropbox.com/oauth2/token', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const accessToken = response.data.access_token;
        console.log(accessToken)
        res.setHeader('Set-Cookie', `token=${accessToken}; HttpOnly; Path=/; Secure; SameSite=Strict`);

        res.redirect('/admin?login=success');
    } catch (error) {
        console.error('Error obtaining access token:', error);
        res.status(500).json({ error: 'Failed to obtain access token' });
    }   
}
