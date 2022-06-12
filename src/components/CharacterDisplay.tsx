import React from "react";

interface CharacterSheet {
    // CHARACTER INFO
    name: string;
    image: string;

    race: string;
    class: string;

    level: number;

    alignment: string;
    
    // CHARACTER STATS
    initiative: number;
    speed: number;
    inspiration: number;

    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charism: number;

    maxHealth: number;
    health: number;
    ac: number;

    acrobatics: number;
    animalHandling: number;
    arcana: number;
    athletics: number;
    deception: number;
    history: number;
    insight: number;
    intimidation: number;
    investigation: number;
    medicine: number;
    nature: number;
    perception: number;
    performance: number;
    persuasion: number;
    religion: number;
    sleightOfHand: number;
    stealth: number;
    survival: number;

    passivePerception: number;

    // CHARACTER ACTIONS
    attacks: any[];
    abilities: any[];
    spells: any[];

    // EQUIPMENT
    equipment: any[];
    items: any[];

    // NOT CHARACTER DATA -- but would be present on a character sheet
    notes: string;
}

export default class CharacterDisplay extends React.Component {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div>THIS WILL BE A THING SURELY</div>
        )
    }
}