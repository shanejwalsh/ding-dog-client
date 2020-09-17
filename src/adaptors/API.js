// const URL = 'https://ding-dog-api.netlify.app';
const URL = 'http://localhost:9000'


const PATH = '/.netlify/functions/index/dogs';

export const getDogs = () => {
    return fetch(URL + PATH)
    .then(resp => resp.json());
};

