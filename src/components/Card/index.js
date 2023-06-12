import react, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardComp = ({ className, name, value }) => {

    // const dragStart = () => {
    //     console.log('started dragging');
    //     setTimeout(() => this.className = 'card-selected', 0);
    // }

    // const dragEnd = () => {
    //     console.log('ended dragging');
    //     setTimeout(() => this.className = 'card-played', 0);
    // }

    return (
        <>
        <div className={className}>
            <div className="card-container" draggable={true} onDragStart={dragStart} onDragEnd={dragEnd}>
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