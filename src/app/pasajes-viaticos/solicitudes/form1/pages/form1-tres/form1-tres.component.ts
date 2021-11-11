import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form1-tres',
  templateUrl: './form1-tres.component.html',
  styles: [
    ` .space{
      margin:25px;
    }
  
    .notificacion{
      color:red;
      font-size:14px;
          }
    .contenido {
      display:flex;
    justify-content: center;
    align-items: center;
    background-color:rgb(255, 255, 255);
    }
    .caja {
      width: 100%;
      margin: 10px;
      padding:20px;
     
      
      border: 1px solid #2196f3;
      border-radius: 10px;
    }
    `
  ]
})
export class Form1TresComponent implements OnInit {
  selectedValue: string = 'val1';
  selectedCities: string[] = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verForm1_cuatro(){
    this.router.navigate(['inicio/pasajes-viaticos/solicitudes/form1/form1_cuatro'])
  }
}
