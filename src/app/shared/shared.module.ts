import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CnpjPipe, LocalDatePipe, MoneyBrPipe, CpfCnpjPipe, CpfPipe, LocalDateTimeShortPipe, FloatFixedPipe, RoundPipe} from './pipes';

@NgModule({
  declarations: [
    LocalDatePipe,
    MoneyBrPipe,
    CnpjPipe,
    CpfCnpjPipe,
    CpfPipe,
    FloatFixedPipe,
    LocalDateTimeShortPipe,
    RoundPipe
  ],
  imports: [    
  ],
  providers: [ 
  ],
  exports: [    
    LocalDatePipe,
    MoneyBrPipe,
    CnpjPipe,
    CpfCnpjPipe,
    FloatFixedPipe,
    CpfPipe,
    LocalDateTimeShortPipe,
    RoundPipe
  ]
})
export class SharedModule { }
