import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { getNoteArrayFromValueArray } from './NoteUtil';

export const PlayManager = ({notes}) => {
    const [playing, setPlaying] = useState(false);

    const noteArray = getNoteArrayFromValueArray(notes);

    const Tone = require('tone');
    const synth = new Tone.Synth().toMaster();

    const playNote = (time, note) => {
        synth.triggerAttackRelease(note, '8n', time);
    }

    let seq = new Tone.Sequence(playNote, noteArray, "8n");

    const playSequence = () => {
        seq.start(0);
        seq.stop(4);
    }

    const togglePlay = () => {
        setPlaying(!playing);
        Tone.Transport.start();
        playSequence();
    }

    const getPlayLabel = (playing) => {
        var label = playing? "Stop" : "Play";
        return label;
    }

    return (
        <Button label={getPlayLabel(playing)} onClick={togglePlay} />
    );
}