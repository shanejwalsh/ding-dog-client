import React from 'react';
import Formfield from './Formfield';
import styled from 'styled-components';

export default () => {
    interface User {
        name: string;
        phone: string;
    }

    const handleSubmit = (event: React.FormEvent): User => {
        return {
            name: 'Shane',
            phone: '0830983521',
        };
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };

    return (
        <div>
            <form noValidate name="sign-up" id="sign-up" action="" onSubmit={handleSubmit}>
                <p>To sign up for text alerts, enter your full name and phone number below </p>
                <div className="fields-container">
                    <Formfield
                        label="Full Name"
                        placeholder="e.g. John Smith"
                        name="first-name"
                        type="text"
                        onChange={handleInputChange}
                    />
                    <Formfield
                        label="Phone No."
                        placeholder="e.g. 555-2396"
                        name="phone"
                        type="phone"
                        onChange={handleInputChange}
                    />
                </div>
            </form>
            <button form="sign-up" type="submit">
                Sign Up
            </button>
        </div>
    );
};
