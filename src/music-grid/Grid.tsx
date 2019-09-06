import React, { useState } from 'react';
import './Grid.css';
import { RandomizeButton } from './RandomizeButton';

import { Note } from './Note'
import { PlayManager } from './PlayManager';

interface GridProps { 

}
export const Grid: React.FC<GridProps> = () => {    
    
    let initialNoteArray: number[] = [];
    for(let x = 0; x < 16; x++) {
        initialNoteArray.push(0);
    }
    const [noteArray, setNoteArray] = useState(initialNoteArray);

    const setNote = (index: number, value: number) => {
        let newNoteArray = [...noteArray];
        newNoteArray[index] = value;
        setNoteArray(newNoteArray);
    }

    let boxes: JSX.Element[] = [];
    for(let index = 0; index < 16; index++) {
        const noteProps = {index, value: noteArray[index], setNote};
        const note = Note(noteProps);
        boxes.push(
            <div className='box'>
                {note}
            </div>
        )
    }

    let cols: JSX.Element[] = [];
    for(let j = 0; j < 8; j++) {
        cols.push(
            <div className='p-col-2'>
                {boxes[j]}
                {boxes[j+8]}
            </div>
        )
    }
    
    return (
        <div>
            <div className="p-grid">
                {cols}
            </div>
            <PlayManager notes={noteArray}/>
            <RandomizeButton setNoteArray={setNoteArray}/>
        </div>    
    );
}

