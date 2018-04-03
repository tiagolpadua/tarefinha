declare var _: {};

interface ITerm {
    word: string;
    image: string;
}

interface IDimenson {
    width: number;
    height: number;
}

class Crossword {
    // private map: string[][];

    // constructor(private terms: ITerm[], private dimensions: IDimenson) {
    //     this.map = getEmptyMap(this.dimensions);
    //     // Math.random() * terms.length;
    //     console.log(this.map);
    //     console.log(this.terms);
    //     console.log(this.dimensions);
    // }

}

export default function foo() {
    return 'foo';
}

export function getEmptyMap(dimensions: IDimenson): string[][] {
    const m: string[][] = [];
    for (let x = 0; x < dimensions.width; x ++) {
        m[x] = [];
        for (let y = 0; y < dimensions.height; y ++) {
            m[x].push('');
        }
    }
    return m;
}

// export default Crossword;