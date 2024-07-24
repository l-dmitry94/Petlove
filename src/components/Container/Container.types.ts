import { ReactNode } from 'react';

export enum ContainerStyle {
    Primary,
    Fluid,
}

export interface IContainer {
    children: ReactNode;
    style?: ContainerStyle;
}
