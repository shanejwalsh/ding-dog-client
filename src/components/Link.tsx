import React from 'react';
import styled from 'styled-components';

interface LinkProps {
    path: string;
    alt: string;
    children: string;
}

const HyperLink = styled.a`
    text-decoration: none;
    color: #333333;
    border-bottom: 1.5px #25dca3 solid;
    cursor: pointer;
`;

const Link = ({ path, children }: LinkProps) => {
    return <HyperLink href={path}>{children}</HyperLink>;
};

export default Link;
