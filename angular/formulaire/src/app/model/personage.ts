export enum ERace {
    elfe,
    humain,
    gnome,
    orc
}

/*
export enum ERace {
    elfe='Elfe',
    humain='Humain',
    gnome='Gnome',
    orc='Orc'
}
*/

export interface Ipersonage {
    name: string;
    statistics: {
        str: number;
        dex: number;
        con: number;
        int: number;
        wis: number;
        cha: number;
    },
    money: number;
    level: number;
    health: number;
    currentHealth: number;
    image: string;
    synopsis: string;
    class: string;
    subclass: string;
    race: string;
    alignment: string;
}

