import React from "react";
import './Button.module.css';

function Button({children, className}) {

    return (
        <button className={`defaultstyling ${className}`}>
            <span>
            {children}
            </span>
        </button>
    )
}

export default Button;