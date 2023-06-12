import {
    UPDATE_PLAYER
} from './actions';

import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        // case UPDATE_PLAYER:
        //     return {
        //         ...state,
        //         updatedPlayer: updatedPlayer
        //     }
    }
};

export function useGameReducer(intialState) {
    return useReducer(reducer, intialState);
}