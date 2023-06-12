import react, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGameContext } from '../../utils/GlobalState';
import { UPDATE_PLAYER } from '../../utils/actions';
import Entity from '../../lib/Entity';
import Card from '../Card';


const RoomComp = ({ className }) => {

    let Deck = [
        {
        name: 'test',
        value: 5,
        },
        {
        name: 'test',
        value: 3,
        },
        {
        name: 'test',
        value: 7,
        },
        {
        name: 'test',
        value: 1,
        },
        {
        name: 'test',
        value: 1,
        },
    ]

    const [state, dispatch] = useGameContext();
    const { updatedPlayer } = state;

    const player = new Entity(1000, 500, 30, 30, 'red');
    // const [refPlayer, setRefPlayer] = useState({});
    // setRefPlayer(new Entity(1000, 500, 30, 30, 'red'))

    return (
        <>
            <section className={className}>
                This is a room
                <div className="hand">
                {Deck.map(c => {
                    return <Card name={c.name} value={c.value} />
                }
                )}
                </div>
            </section>
        </>
    );
};

const Room = styled(RoomComp)`

.hand {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

`

export default Room;