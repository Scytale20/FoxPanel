import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.css']
})
export class CalculadorComponent implements OnInit {

  calculadorForm:FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.calculadorForm = this.formBuilder.group(
      {
        muro: ['', Validators.required],
        tipoPanel: ['', Validators.required],
        metrosLineales: ['', Validators.required],
        pxPanel: ['', Validators.required],
        pxMO: ['', Validators.required]
      }
    )
   }

  

  ngOnInit(): void {
    // this.calculadorForm = new FormGroup({
    //   muro: new FormControl(null, Validators.required),
    //   tipoPanel: new FormControl(null, Validators.required),
    //   metrosLineales: new FormControl(null, Validators.required),
    //   pxPanel: new FormControl(null, Validators.required),
    //   pxMO: new FormControl(null, Validators.required)
    // })
  }

  onSubmit(){
    console.log(this.calculadorForm.value);
  }

  get muro(){
    return this.calculadorForm.get('muro');
  }
  get tipoPanel(){
    return this.calculadorForm.get('tipoPanel');
  }
  get metrosLineales(){
    return this.calculadorForm.get('metrosLineales');
  }
  get pxPanel(){
    return this.calculadorForm.get('pxPanel');
  }
  get pxMO(){
    return this.calculadorForm.get('pxMO');
  }



}
