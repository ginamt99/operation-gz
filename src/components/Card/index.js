import react, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardComp = ({ className, name, value }) => {
    return (
        <>
        <div className={className}>
            <div className="card-container">
                <h1>{name}</h1>
                <p>{value}</p>
            </div>
        </div>
        </>
    );
};

const Card = styled(CardComp)`

.card-container {
    border: 1px solid black;
    color: black;
    width: 10em;
    height: 15em;
    padding: 3em;
    margin-left: 3em;
    margin-right: 3em;
}

`

export default Card;