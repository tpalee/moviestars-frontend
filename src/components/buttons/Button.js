import React from "react";
import './Button.css';

function Button({children, className, image}) {

    return (
        <button className={`defaultstyling ${className}`}>
            <span>
            {children}
            </span>
        </button>
    )
}

export default Button;