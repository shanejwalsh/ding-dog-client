// const URL = 'http://localhost:9000'

import HttpClient from './httpClient';

const URL = 'https://ding-dog-api.netlify.app/.netlify/functions/app';

const httpClient = new HttpClient(URL);

export const getDogs = async () => {
    const dogs = await httpClient.get('/dogs');

    return dogs;
};
