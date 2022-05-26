import crypto from 'crypto';

const APP_TOKEN_KEY = crypto.randomBytes(32).toString('hex');
const REFRESH_TOKEN_KEY = crypto.randomBytes(32).toString('hex');

console.table({APP_TOKEN_KEY, REFRESH_TOKEN_KEY})