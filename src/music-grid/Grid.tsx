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
    let notes: JSX.Element[] = [];
    let playedNote = false;
    for(let index = 0; index < 16; index++) {
        let holdDisabled = false;
        if(noteArray[index] >= 0 && noteArray[index] <= 11) {
            playedNote = true;
        }
        if(!playedNote) {
            holdDisabled = true;
        }
        if(index === 0) {
            holdDisabled = true;
        } else {
            if(noteArray[index-1] === 101 || noteArray[index-1] === 100) {
                holdDisabled = true;
            }
        }
        const noteProps = {index, value: noteArray[index], setNote, holdDisabled};
        const note = Note(noteProps);
        notes.push(note);
        boxes.push(
            <div className='box'>
                {notes[index]}
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

