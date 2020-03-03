import React from 'react';
import { Button } from 'primereact/button';
import { getNoteArrayFromValueArray, getNoteLengthArray } from './NoteUtil';

export const PlayManager = ({notes}) => {
    let playing = false;

    const noteArray = getNoteArrayFromValueArray(notes);

    const Tone = require('tone');
    const synth = new Tone.Synth().toMaster();

    const noteLengths = getNoteLengthArray(notes);

    let playingIndex = 0; 
    const playNote = (time, note) => {
        console.log("playIndex: " + playingIndex);
        console.log("noteLength: " + noteLengths[playingIndex]);
        let noteLength = noteLengths[playingIndex];
        if(note !== null && note !== '101') {
            synth.triggerAttackRelease(note, noteLength, time);
        }
        playingIndex++;        

    }

    const playSequence = () => {
        playingIndex = 0;
        if(!playing) {
            playing = true;
            let notesNoHold = noteArray.slice();
            for(let i = 0; i < notesNoHold.length; i++) {
                if(notesNoHold[i] === '-') {
                    notesNoHold[i] = null;
                }
            }
            let seq = new Tone.Sequence(playNote, notesNoHold, "8n");
            Tone.Transport.scheduleOnce(seq.start(1), 0);
            Tone.Transport.start();
            
            setTimeout(() => {
                Tone.Transport.stop();    
                Tone.Transport.cancel();
                playing = false; 
            }, /**4000**/ 4800);
        }        
    }

    return (
        <Button label={"Play"} onClick={playSequence} />
    );
}