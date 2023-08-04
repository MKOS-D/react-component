import React, { ButtonHTMLAttributes, FC } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<Props> = (props) => {
    const { children, ...prop } = props;
    return <button {...prop}>{children}</button>;
};
