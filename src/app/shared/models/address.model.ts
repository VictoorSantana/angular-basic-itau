export interface IAddress {
    zip: string;
    street: string;
    neighborhood: string;
    state: string;
    city: string;
}

export class IViacep {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}