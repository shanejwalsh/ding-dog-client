import React from 'react';
import { Tracing } from 'trace_events';

interface FormfieldProps {
    className?: string;
    name: string;
    type: string;
    label: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Formfield = ({ className, name, type, label, placeholder }: FormfieldProps) => {
    return (
        <div>
            <label htmlFor="name">{label}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} />
        </div>
    );
};

export default Formfield;
