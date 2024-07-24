import { FC } from 'react';
import { ContainerStyle, IContainer } from './Container.types';
import scss from './Container.module.scss';
import clsx from 'clsx';

const Container: FC<IContainer> = ({
    style = ContainerStyle.Primary,
    children,
}) => {
    return (
        <div
            className={clsx(
                scss.container,
                style === ContainerStyle.Primary && scss.containerPrimary,
                style === ContainerStyle.Fluid && scss.containerFluid
            )}
        >
            {children}
        </div>
    );
};

export default Container;
