const letters = 'ABCDEFGHIJKLMNOPQRSTUVWX';

export type DefinitionSet = {
    [key in typeof letters[number]]: string;
}

export default function getDefinitions(): Array<DefinitionSet>{
    return [
        //1st participant
        {},
        //2nd participant
        {}
    ];
}