import React from 'react';
import { Button } from 'primereact/button';
import { getNoteNameFromNumber } from './NoteUtil';

export const Note = ({index, value, setNote}) => {

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