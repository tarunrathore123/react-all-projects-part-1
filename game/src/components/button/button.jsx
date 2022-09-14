import React from 'react';

import './button.scss';

const STYLES = [
    'btn-primary',
    'btn-outline'
]
const SIZES = [
    'btn-medium',
    'btn-largs'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize)? buttonSize : SIZES[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>

    );

}