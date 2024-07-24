import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonStyles {
    Primary,
    Secondary,
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleType: ButtonStyles;
    href?: string;
    children: ReactNode;
}
