// pages/api/login.js

import { loginUser } from '../../path-to-your-backend-controller';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await loginUser(req, res);
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
