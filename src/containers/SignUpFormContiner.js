import React from 'react'
import SignUpForm from '../components/SignUpForm';
import styled from 'styled-components'

const FormContainer = styled.div`
    width: 30%;
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 15px;
    background-color: #fff;
    margin-top: 4%;

`

const SignUpFormContiner = () => {
    return (
        <FormContainer>
            <SignUpForm />
        </FormContainer>
    );
}

export default SignUpFormContiner;