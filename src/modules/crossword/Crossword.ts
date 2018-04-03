interface ITerm {
    word: string;
    image: string;
}

interface IDimenson {
    x: number;
    y: number;
}

class Crossword {
    constructor(private terms: ITerm[], private dimension: IDimenson) {
        
    }
}