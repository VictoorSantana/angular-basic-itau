import { Component, OnInit } from '@angular/core';
import { PoloService } from '../../shared/services/polos/polos.service';
import { IPolo } from '../../shared/models/polo.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-polo',
  templateUrl: './polo.component.html',
  styleUrls: ['./polo.component.scss']
})
export class PoloComponent implements OnInit {

  public polos: IPolo[] = [];

  constructor(
    private poloService: PoloService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadPolos();
   
  }

  private loadPolos():void {
    this.poloService.list().toPromise()
    .then((res) => this.polos = res)
    .catch((ex) =>  this.toastr.error(ex.message));
  }

}
