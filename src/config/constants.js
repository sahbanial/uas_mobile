const isLocal = true;
const PROTOCOL = isLocal ? 'http://' : 'http://';
const WS_PROTOCOL = 'ws://';
const HOST = isLocal ? '192.168.0.141:8001' : 'apilynkbooster.toolynk.fr:1993';
const WS_ENDPOINT = '/subscriptions';
const GOOGLE_API_KEY = 'AIzaSyDJqKQDJ5WtannWAwYWUbSPmNi5MDbaX48';
const STRIPE_ENDPOINT = 'https://api.stripe.com/v1/tokens';
const STRIPE_SECRET_KEY = 'sk_test_X5KuJ3uuq3Ktjg3aQOjoLRdC00cPWoI5ts';
const STRIPE_PUPLIC_KEY = 'pk_test_aZ6WqOrDWOMN8H5d3gjy0nyn00FAFiuUSj';
const BASE_URL = `${PROTOCOL}${HOST}`;
const WS_URL = `${WS_PROTOCOL}${HOST}${WS_ENDPOINT}`;
export {
  BASE_URL,
  WS_URL,
  GOOGLE_API_KEY,
  STRIPE_ENDPOINT,
  STRIPE_SECRET_KEY,
  STRIPE_PUPLIC_KEY,
};