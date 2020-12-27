import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    /**
     * Expressão regular para celulares e telefones fixos.
     ** Parenteses, espaço e hífen opcionais. DDD não possui 0
     ** (xx) 9xxxx-xxxx  - Celular, Todos iniciam com 9.
     ** (xx) xxxx-xxxx   - Telefone, Nunca inicia com 1.
     */
    const phoneValidatorRegExp = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;

    this.formulario = this.formBuilder.group({
      nome: [ null, [ Validators.required, Validators.maxLength(255) ] ],
      email: [ null, [ Validators.required, Validators.email ] ],
      phone: [ null, [ Validators.pattern(phoneValidatorRegExp) ] ],
      assunto: [ null, [ Validators.required, Validators.maxLength(255) ] ],
      mensagem: [ null, [ Validators.required, Validators.maxLength(5000) ] ]
    })
  }

  get nome() { return this.formulario.get('nome'); }
  get email() { return this.formulario.get('email'); }
  get phone() { return this.formulario.get('phone'); }
  get assunto() { return this.formulario.get('assunto'); }
  get mensagem() { return this.formulario.get('mensagem'); }


  onSubmit(): void {
    console.log('formulario submetido!');
  }

  controlHasErrors(control: AbstractControl): boolean {
    return control.touched && control.invalid;
  }

}
