import React from 'react';

interface LoadingProps {
    text: string,
};

const Loading: React.FunctionComponent<LoadingProps> = props =>  {
    return (
        <div>
            Loading...
        </div>
    )
}

export default Loading;

