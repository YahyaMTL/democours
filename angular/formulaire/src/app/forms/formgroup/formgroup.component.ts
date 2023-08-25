import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgModel, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ERace, Ipersonage } from 'src/app/model/personage';

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.css']
})
export class FormgroupComponent implements OnInit {

  // Pour rendre disponible dans le template
  eRace= ERace;
  typeDeRaces: number[];

  form_a_valider!: FormGroup;

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
    this.creeValidation();
  }

  ajouteInventaire(): void {
    console.log(this.form_a_valider);
  }

  ajoutePersonage(): void {
    console.log(this.personage);
  }

  creeValidation(): void {
    const formgroup: { [key: string]: AbstractControl } = {
      'name': new FormControl(
        this.personage.name,
        [
          Validators.required,
        ]
      )
    }

    this.form_a_valider = new FormGroup(formgroup);
  }


}

