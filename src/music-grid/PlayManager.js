import React from 'react';
import { Button } from 'primereact/button';
import { getNoteArrayFromValueArray } from './NoteUtil';

export const PlayManager = ({notes}) => {
    
    let synth;
    require(["tone"], function(Tone) {
        synth = new Tone.Synth().toMaster();
    });

    const noteArray = getNoteArrayFromValueArray(notes);

    const play = () => {
        for(let i = 0; i < 8; i++) {
            synth.triggerAttackRelease(noteArray[i], '8n', i + 3);  
        }        
    }

    return (
        <Button label='Play' onClick={play} />
    );
}