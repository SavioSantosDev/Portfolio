import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { IFormCanDeativate } from 'src/models/IFormCanDeactivate';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy, IFormCanDeativate {

  formulario: FormGroup;

  // Campos do formulário que serão criados com o formBuilder
  get nome(): AbstractControl { return this.formulario.get('nome'); }
  get email(): AbstractControl { return this.formulario.get('email'); }
  get phone(): AbstractControl { return this.formulario.get('phone'); }
  get assunto(): AbstractControl { return this.formulario.get('assunto'); }
  get mensagem(): AbstractControl { return this.formulario.get('mensagem'); }

  private formValueChanges = false;

  sub: Subscription;

  constructor(
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.createForm();
    this.formOnChanges();
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  canExit(): boolean {
    if (this.formValueChanges) {
      return confirm('Quaisquer alterações não serão salvas! Deseja sair?');
    }
    return true;
  }


  /**
   * Criar todos os campos do formulário, assim como todas as suas validações.
   */
  createForm(): void {
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
    });
  }


  /**
   * Detectar se houve alterações em algum campo do formulário para que seja utilizada a guarda de desativação.
   */
  formOnChanges(): void {
    this.sub = this.formulario.valueChanges.subscribe(  value => {
      this.formValueChanges = true;
    });
  }


  onSubmit(): void {
    console.log('formulario submetido!');
  }


  /**
   * Se o campo passado possui erros.
   */
  controlHasErrors(control: AbstractControl): boolean {
    return control.touched && control.invalid;
  }


}
