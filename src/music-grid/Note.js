import React, { useState } from 'react';
import { Button } from 'primereact/button';
import Sound from 'react-sound';
import { getNoteNameFromNumber, getUrlFromValue } from './NoteUtil';

export const Note = ({index, value, setNote}) => {

    const url = getUrlFromValue(value);

    const [playStatus, setPlaying] = useState(Sound.status.STOPPED);
    const [playLabel, setPlayLabel] = useState('P');

    const clickHandlerPlus = () => {
        value++;
        setNote(index, value);
    }

    const clickHandlerMinus = () => {
        value--;
        setNote(index, value);
    }

    const doAction = () => {
        if(playLabel === 'P') {
            setPlaying(Sound.status.PLAYING);
            setPlayLabel('S');
        } else if (playLabel === 'S') {
            setPlaying(Sound.status.STOPPED);
            setPlayLabel('P');
        }
    }

    return (        
        <div>
            <Button label='+' onClick={clickHandlerPlus}/>
            {getNoteNameFromNumber(value)}
            <Button label='-' onClick={clickHandlerMinus}/>
            <Button onClick={doAction} label={playLabel} />
            <Sound
                url={url}
                playStatus={playStatus}/>
        </div>
    );
}