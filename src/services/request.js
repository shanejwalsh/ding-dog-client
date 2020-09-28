const URL = 'https://ding-dog-api.netlify.app/.netlify/functions/index';

export const getDefaultConfiguration = {
    method: 'GET',
    // credentials: 'include',
};

export const get = async (path, options = {}) => {
    const resp = await fetch(`${options.endpoint || URL}${path}`, {
        ...getDefaultConfiguration,
        ...options,
    });

    return resp.json();
};
