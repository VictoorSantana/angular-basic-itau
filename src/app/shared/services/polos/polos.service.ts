import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../base.service';
import { IPolo } from '../../models/polo.model';
import { IAddress, IViacep } from '../../models/address.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoloService extends BaseService<IPolo, string> {
  constructor(http: HttpClient) {
    super(http, 'itau_teste');
  }

  public async findCEP(value: string): Promise<IAddress | undefined> {
    try {
      const res = await this.httpClient.get<IViacep>(`https://viacep.com.br/ws/${value}/json/`).toPromise()
      if(res) {
        return {
          zip: res.cep,
          street: res.bairro,
          neighborhood: res.complemento,
          state: res.uf,
          city: res.localidade,
        }
      }
    } catch(ex) {}
    return undefined;
  }


  

}