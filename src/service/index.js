/****************
 * From project *
 ****************/
import Requester from './requester';
import { URL_PLUS_VERSION } from '../config';
/********************
 * From third party *
 ********************/
const axios = require('axios');

const requester = new Requester(axios.create({
  baseURL: URL_PLUS_VERSION,
  timeout: 1000,
}));

export {
  requester,
};
