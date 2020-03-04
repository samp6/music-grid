import React from 'react';
import { Button } from 'primereact/button';
import { getNoteNameFromNumber } from './NoteUtil';

export const Note = ({index, value, setNote, holdDisabled}) => {

    const clickHandlerPlus = () => {
        value++;
        setNote(index, value);
    }

    const clickHandlerMinus = () => {
        value--;
        setNote(index, value);
    }

    const clickHandlerRest = () => {
        if(value === 100) {
            value = 0;            
        } else {
            value = 100;
        }
        setNote(index, value);
    }

    const clickHandlerHold = () => {
        if(value === 101) {
            value = 0;
        } else {
            value = 101;
        }
        setNote(index, value);
    }

    let holdButton = <Button label='h' onClick={clickHandlerHold} disabled={holdDisabled} />;


    return (        
        <div>
            <Button label='+' onClick={clickHandlerPlus}/>
            {getNoteNameFromNumber(value)}
            <Button label='-' onClick={clickHandlerMinus}/>
            {holdButton}
            <Button label='r' onClick={clickHandlerRest}/>           
        </div>
    );
}