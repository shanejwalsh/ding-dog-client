const URL = 'https://ding-dog-api.netlify.app/.netlify/functions/index';

// const URL = 'http://localhost:9000/.netlify/functions/app'


export const getDefaultConfiguration = {
    method: 'GET',
};

export const get = async (path, options = {}) => {
    const resp = await fetch(`${options.endpoint || URL}${path}`, {
        ...getDefaultConfiguration,
        ...options,
    });

    return resp.json();
};
