import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.css']
})
export class CalculadorComponent implements OnInit {

  constructor() { }

  calculadorForm:FormGroup;

  ngOnInit(): void {
    this.calculadorForm = new FormGroup({
      muro: new FormControl(null),
      tipoPanel: new FormControl(null),
      metrosLineales: new FormControl(null),
      pxPanel: new FormControl(null),
      pxMO: new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.calculadorForm);
  }



}
