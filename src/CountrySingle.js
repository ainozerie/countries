import React from "react";

const CountrySingle = (props) => {
    return(
        <main>
            <h1>{props.params.name}</h1>
        </main>
    )
};

export default CountrySingle;