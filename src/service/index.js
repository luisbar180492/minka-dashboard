/****************
 * From project *
 ****************/
import Requester from './requester';
import Authentication from './authentication';
import { URL, API_KEY } from 'common/config';
/********************
 * From third party *
 ********************/
const axios = require('axios');
const firebase = require('firebase/app');
require('firebase/auth');
/*************
 * Constants *
 *************/
const config = {
  apiKey: 'AIzaSyDLyhWzvV9EM5-bw4JMQv2EuXyvUy-oJt8',
  authDomain: 'minka-dashboard.firebaseapp.com',
  databaseURL: 'https://minka-dashboard.firebaseio.com',
  projectId: 'minka-dashboard',
  storageBucket: '',
  messagingSenderId: '413807761313'
};

firebase.initializeApp(config);

const authentication = new Authentication(firebase.auth());
const requester = new Requester(axios.create({
  baseURL: URL,
  timeout: 10000,
  API_KEY: API_KEY,
}));

export {
  requester,
  authentication,
};
