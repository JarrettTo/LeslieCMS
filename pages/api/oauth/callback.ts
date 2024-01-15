
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const code = req.query.code as string;

    const redirectURI = process.env.BASE_URL + '/api/oauth/callback';

    try {
        const params = new URLSearchParams();
        params.append('code', code);
        params.append('grant_type', 'authorization_code');
        params.append('client_id', process.env.CLIENT_ID);
        params.append('client_secret', process.env.CLIENT_SECRET);
        params.append('redirect_uri', redirectURI);

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
