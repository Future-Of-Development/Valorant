import axios from 'axios';
import { ENV } from './env'

const instance = axios.create({
  baseURL: 'https://valorant-api.com/v1',
  headers: {
    'X-Riot-Token': 'RGAPI-cc9a1599-0429-44b0-b8b6-95d727789a79',
  },
});

export default instance;
