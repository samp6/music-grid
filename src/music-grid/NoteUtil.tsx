const notes = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

export const getNoteNameFromNumber = (val: number) => {
    if((0 <= val) && (val < 12)) {
        return notes[val];
    } else { 
        return notes[((val % 12) + 12) % 12];
    }
}