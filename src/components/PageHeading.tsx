import React from 'react';
import styled from 'styled-components';

interface Props {
    title: string;
}

const Heading = styled.h1`
    font-size: 4.5rem;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0.5em;
`;

const PageHeading = ({ title }: Props) => {
    return <Heading className="page-title">{title}</Heading>;
};

export default PageHeading;
