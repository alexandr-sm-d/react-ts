import React from "react";

export const Navbar: React.FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper blue lighten-4 px1">
                <a href="/" className="brand-logo">ToDo Typescript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">ToDo</a></li>
                    <li><a href="/">Information</a></li>
                </ul>
            </div>
        </nav>
    )
}