import React from 'react';
import { Button } from 'primereact/button';
import { getNoteArrayFromValueArray } from './NoteUtil';

export const PlayManager = ({notes}) => {
    const noteArray = getNoteArrayFromValueArray(notes);

    const Tone = require('tone');
    const synth = new Tone.Synth().toMaster();

    const playNote = (time, note) => {
        synth.triggerAttackRelease(note, '8n', time);
    }

    let seq = new Tone.Sequence(playNote, noteArray, "8n");

    const playSequence = () => {
        seq.start();
        seq.stop(4);
    }

    const play = () => {
        Tone.Transport.start();
        playSequence();     
    }

    return (
        <Button label='Play' onClick={play} />
    );
}