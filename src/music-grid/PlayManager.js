import React from 'react';
import { Button } from 'primereact/button';
import { getNoteArrayFromValueArray } from './NoteUtil';

export const PlayManager = ({notes}) => {
    let playing = false;

    const noteArray = getNoteArrayFromValueArray(notes);

    const Tone = require('tone');
    const synth = new Tone.Synth().toMaster();

    const playNote = (time, note) => {
        synth.triggerAttackRelease(note, "8n", time);
    }

    const playSequence = () => {
        if(!playing) {
            playing = true;
            Tone.Transport.start();
            let seq = new Tone.Sequence(playNote, noteArray, "8n");
            Tone.Transport.scheduleOnce(seq.start(0), 0);
            
            setTimeout(() => {
                Tone.Transport.stop();    
                Tone.Transport.cancel();                  
                playing = false; 
            }, 4000);
        }        
    }

    return (
        <Button label={"Play"} onClick={playSequence} />
    );
}