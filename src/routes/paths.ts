import { History } from 'history';

interface Paths {
    home: string;
    dogsIndex: string;
    adoptedDogsIndex: string;
    signup: string;
    [key: string]: string;
}

interface Args {
    [key: string]: string;
}

export const paths: Paths = {
    home: '/',
    dogsIndex: '/dogs',
    adoptedDogsIndex: '/adopted-dogs',
    signup: '/signup',
};

export const getPath = (pathKey: string, args: Args): string => {
    let path = paths[pathKey];

    //replaces anything prefixed with : in pathnname
    for (const arg in args) {
        path = path.replace(`:${arg}`, args[arg]);
    }

    return path;
};

export const navigate = (history: History, pathKey: string, args = {}) => {
    history.push(getPath(pathKey, args));
};

export default paths;
