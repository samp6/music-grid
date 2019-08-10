import React from 'react';
import { Button } from 'primereact/button';

export type RandomizeButtonProps = {
    setNoteArray: (noteArray: number[]) => void
}
export const RandomizeButton: React.FC<RandomizeButtonProps> = ({setNoteArray}) => {
    
    const randomizeClick = () => {
        // make a random array of numbers 1-12 and set
        let randomArray = [];
        for(let i = 0; i < 16; i++) {
            randomArray.push(Math.floor(Math.random() * Math.floor(12)));
        }
        setNoteArray(randomArray);
    }
    
    return (
        <Button label={'Randomize!'} onClick={randomizeClick}/>
    )
}