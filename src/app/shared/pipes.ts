
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: 'exponentialStrength' })
export class ExponentialStrengthPipe implements PipeTransform {
    transform(value: number, exponent = 1): number {
        return Math.pow(value, exponent);
    }
}

@Pipe({ name: 'localDateTime' })
export class LocalDateTimePipe implements PipeTransform {
    transform(value: Date | string | undefined): string {
        if (value) {
            if (typeof value === "string") return new Date(value).toLocaleString()
        }
        return '';
    }
}
const Meses: string[] = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
@Pipe({ name: 'dateShort' })
export class LocalDateTimeShortPipe implements PipeTransform {
    transform(value: Date | string | undefined): string {
        if (value) {
            if (typeof value === "string") {
                const date = new Date(value);
                const month = Meses[date.getUTCMonth()].toLowerCase();
                const day = date.getDate();
                const hours = date.toLocaleTimeString().slice(0, -3);
                return `${day} ${month} às ${hours}`
            }
        }
        return '';
    }
}


@Pipe({ name: 'localDate' })
export class LocalDatePipe implements PipeTransform {
    transform(value: Date | string | undefined): string {
        if (value) {
            if (typeof value === "string") {
                //return new Date(new Date(value).setHours(4)).toLocaleDateString()
                const date = value.split('T')[0];
                const [year, month, day] = date.split('-');
                return `${day}/${month}/${year}`;
            }
        }
        return '';
    }
}

@Pipe({ name: 'moneyBr' })
export class MoneyBrPipe implements PipeTransform {
    transform(value: number | string | undefined): string {
        if (value) {
            return Number(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        }
        return 'R$ 0,00';
    }
}

@Pipe({ name: 'localTime' })
export class LocalTime implements PipeTransform {
    transform(value: Date | string | undefined): string {
        if (value) {
            if (typeof value === "string") {
                return new Date(value).toLocaleTimeString()
            }
        }
        return '';
    }
}

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
    transform(value: string = ''): string {
        if (value) {
            const arr = value.toLowerCase().split(" ");
            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

            }
            return arr.join(" ");
        }
        return '';
    }
}

@Pipe({ name: 'json' })
export class JsonPipe implements PipeTransform {
    transform(value: any = ''): string {
        try {
            return JSON.stringify(value)
        } catch (ex) {
            return 'error to stringify json'
        }
    }
}

@Pipe({ name: 'cnpj' })
export class CnpjPipe implements PipeTransform {
    transform(value: string = ''): string {
        if (value) {
            let v = value + '';

            return v
                .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
                .replace(/(\d{2})(\d{3})/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})/, '$1/$2')
                .replace(/(\d{4})(\d{1,2})/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
        }
        return '';
    }
}


@Pipe({ name: 'cpf' })
export class CpfPipe implements PipeTransform {
    transform(value: string = ''): string {
        if (value) {
            let v = value + '';
            return v
                .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
                .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
        } else {
            return '';
        }
    }
}

@Pipe({ name: 'floatFixed' })
export class FloatFixedPipe implements PipeTransform {
    transform(value: string = ''): string {
        if (value) {
            return Number(value).toFixed(2)
        } else {
            return '';
        }
    }
}

@Pipe({ name: 'round' })
export class RoundPipe implements PipeTransform {
    transform(value: string = ''): string {
        if (value) {
            return Math.round(Number(value)).toString()
        } else {
            return '0';
        }
    }
}

@Pipe({ name: 'cpfCnpj' })
export class CpfCnpjPipe implements PipeTransform {
    transform(value: string = ''): string {
        if (value) {
            let v = value + '';


            if (v.length <= 11) {
                return v
                    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
                    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
            } else {
                return v
                    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
                    .replace(/(\d{2})(\d{3})/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{1,2})/, '$1/$2')
                    .replace(/(\d{4})(\d{1,2})/, '$1-$2')
                    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
            }

        } else {
            return '';
        }
    }
}
