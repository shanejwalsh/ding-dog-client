// const URL = 'http://localhost:9000'

import { get } from './request';

export const getDogs = () => get('/dogs');
