const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

export const getNoteNameFromNumber = (val: number) => {
    if((0 <= val) && (val < 12)) {
        return notes[val];
    } else { 
        return notes[((val % 12) + 12) % 12];
    }
}

export const getUrlFromValue = (val: number) => {
    const name: string = getNoteNameFromNumber(val);
    const url = "notes\\" + name + "4.mp3";
    return url;
}