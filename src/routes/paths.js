export const paths = {
    home: '/',
    dogsIndex: '/dogs'
};

export const getPath = (pathKey, args) => {
    let path = paths[pathKey];

    for (const arg in args) {
        path = path.replace(
            `:${arg}`, args[arg]
        );
    }

    return path;
};

export const navigate = (history, pathKey, args = {}) => {
    history.push(
        getPath(pathKey, args)
    );
};

export default paths;
