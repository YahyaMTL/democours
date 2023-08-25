import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ERace, Ipersonage } from 'src/app/model/personage';

@Component({
  selector: 'app-formsmodule',
  templateUrl: './formsmodule.component.html',
  styleUrls: ['./formsmodule.component.css']
})
export class FormsmoduleComponent implements OnInit {

  // Pour rendre disponible dans le template
  eRace= ERace;
  typeDeRaces: number[];
  is_valid = false;

  personage: Ipersonage = {
    name: "",
    statistics: {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
    },
    money: 0,
    level: 0,
    health: 0,
    currentHealth: 0,
    image: "",
    synopsis: "",
    class: "",
    subclass: "",
    race: "",
    alignment: ""
  };

  constructor() { 
    this.typeDeRaces = Object.keys(ERace).
                              filter(f => !isNaN(Number(f))).
                              map(f => parseInt(f));
    console.log(this.typeDeRaces)
  }

  ngOnInit(): void {
  }

  ajoutePersonage(): void {
    console.log(this.personage);
  }

  validate(): void {
    this.is_valid = false;

    
    this.is_valid = true;
  }

  erreurMessages(state: NgModel): string[] {
    console.log(state);
    let thing: string = state.path.join(',');
    let messages: string[] = [];
    return messages
  }


}
