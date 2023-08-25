import { Component, OnInit } from '@angular/core';
import { ERace, Ipersonage } from 'src/app/model/personage';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  // Pour rendre disponible dans le template
  eRace = ERace;
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
  }

  ngOnInit(): void {
  }

  ajoutePersonage(): void {
    console.log(this.personage);
  }

  validate(): void {
    console.log(this.personage);
    this.is_valid = false;

    if (this.personage.name === '') {
      return;
    }

    this.is_valid = true;
  }

}
