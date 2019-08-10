import React from 'react';
import { Button } from 'primereact/button';
import { getNoteNameFromNumber } from './NoteUtil';

export type NoteProps = { 
    index: number,
    value: number,
    setNote: (note: number, value: number) => void
}

export const Note: React.FC<NoteProps> = ({index, value, setNote}) => {
    
    const clickHandlerPlus = () => {
        value++;
        setNote(index, value);
    }

    const clickHandlerMinus = () => {
        value--;
        setNote(index, value);
    }

    return (        
        <div>
            <Button label='+' onClick={clickHandlerPlus}/>
            {getNoteNameFromNumber(value)}
            <Button label='-' onClick={clickHandlerMinus}/>
        </div>
    );
}