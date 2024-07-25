import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<any>;
    name: string;
    error: string;
    dirtyFields?: boolean;
    type: HTMLInputTypeAttribute;
}
