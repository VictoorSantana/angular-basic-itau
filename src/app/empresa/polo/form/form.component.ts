import { Component, OnInit } from '@angular/core';
import { PoloService } from '../../../shared/services/polos/polos.service';
import { IPolo } from '../../../shared/models/polo.model';
import { ToastrService } from 'ngx-toastr';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: []
})
export class FormComponent implements OnInit {

  public polo: IPolo;

  public formAddress: FormGroup;

  public formCompany: FormGroup;

  public id: string;

  constructor(
    private poloService: PoloService,
    private toastr: ToastrService,
    private readonly fb: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("action") || '';
    this.setupForms();
    this.loadPolo();
  }

  private loadPolo(): void {
    this.poloService.get(this.id).toPromise()
      .then((res) => {
        this.polo = res;

        this.poloService.findCEP(res.cep)
        .then((cepres) => cepres ? this.formAddress.patchValue(cepres) : null)      

        this.formCompany.patchValue({
          name: res.name,
          business: res.business,
          valuation: Number(res.valuation).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
          cnpj: this.toCnpj(res.cnpj.toString()),
          status: res.active,
        })
      })
      .catch((ex) => this.toastr.error(ex.message));
  }

  private toCnpj(value: string): string {
    return (value + '').replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d{3})/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  private setupForms(): void {
    this.formAddress = this.fb.group({
      zip: [{ value: '', disabled: true }],
      street: [{ value: '', disabled: true }],
      neighborhood: [{ value: '', disabled: true }],
      state: [{ value: '', disabled: true }],
      city: [{ value: '', disabled: true }],
    });

    this.formCompany = this.fb.group({
      name: [{ value: '', disabled: true }],
      business: [{ value: '', disabled: true }],
      valuation: [{ value: '', disabled: true }],
      cnpj: [{ value: '', disabled: true }],
      status: [{ value: '', disabled: true }],
    })
  }

}
