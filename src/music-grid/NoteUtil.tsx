const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

export const getNoteNameFromNumber = (val: number) => {
    if(val === 100) {
        return null;
    } else if(val === 101) {
        return '-'
    } else if((0 <= val) && (val < 12)) {
        return notes[val];
    } else { 
        return notes[((val % 12) + 12) % 12];
    }
}

export const getUrlFromValue = (val: number) => {
    const name: string | null = getNoteNameFromNumber(val);
    const url = "notes\\" + name + "4.mp3";
    return url;
}

export const getNoteFromValue = (val: number) => {
    if((val === 100) || (val === 101)) {
        const note: string | null = getNoteNameFromNumber(val);
        return note;
    }
    const note: string = getNoteNameFromNumber(val) + "4";
    return note;
}

export const getNoteArrayFromValueArray = (vals: number[]) => {
    let notes: (string | null)[] = [];
    vals.forEach((val: number) => {
        notes.push(getNoteFromValue(val));
    })
    return notes;
}

export const getNoteLengthArray = (notes: (string | null)[]) => {
    let noteLengthArray: string[] = [];
    notes.forEach((note: (string | null)) => {
        if(note == '101') {
            noteLengthArray[noteLengthArray.length - 1] = '4n';
        } else if (note != '100') {
            noteLengthArray.push('8n');
        }
    });
    return noteLengthArray;
}