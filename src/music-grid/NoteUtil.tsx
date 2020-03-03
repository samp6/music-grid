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
    for(let i: number = 0; i < notes.length; i++) {
        if(!((notes[i] == '101') || (notes[i] == null))) {
            noteLengthArray[i] = '8n';
            let holds = 0;
            let j = 1;
            while(i+j < notes.length) {             
                if(notes[i+j] == '101') {
                    holds++;
                    j++;
                } else {
                    break;
                }
            }
    
            if(holds > 0) {
                if(holds === 1) {
                    noteLengthArray[i] = '4n';
                } else if(holds > 3) {
                    noteLengthArray[i] = '1n';
                } else {
                    noteLengthArray[i] = '2n';
                }
            }     
        }  
    }
    noteLengthArray[-1] = '8n';
    for(let i: number = 0; i < 10; i++) {
        noteLengthArray.push('8n');
    }
    return noteLengthArray;
}