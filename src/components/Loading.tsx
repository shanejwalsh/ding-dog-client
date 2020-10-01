import React from 'react';

interface LoadingProps {
    text: string;
    LoadingColor: 'red' | 'green';
};

const Loading = ({ text, LoadingColor }: LoadingProps) => {
    return <div style={{ color: LoadingColor }}>Loading...</div>;
};

export default Loading;

