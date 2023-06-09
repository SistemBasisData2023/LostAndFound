import React from "react";

interface Props {
    children: string
}


const Button = ({children}:Props) => {
    return (
        <div>
        <button className="btn btn-primary">
            {children}
        </button>
        </div>
    );
    }

    export default Button;