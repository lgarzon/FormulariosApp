import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
})
export class SwitchesComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [false, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  ngOnInit(): void {
    this.miFormulario.reset(this.persona);

    this.miFormulario.valueChanges.subscribe((form) => {
      delete form.condiciones;
      this.persona = form;
    });
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue;
  }
}
