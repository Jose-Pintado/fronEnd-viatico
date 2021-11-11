import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-gen',
  templateUrl: './titulo-gen.component.html',
  styleUrls: ['./titulo-gen.component.scss']
})
export class TituloGenComponent implements OnInit {

  @Input() datos: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
