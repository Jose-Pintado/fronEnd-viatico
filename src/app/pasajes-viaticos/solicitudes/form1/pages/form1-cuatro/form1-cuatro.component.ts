import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form1-cuatro',
  templateUrl: './form1-cuatro.component.html',
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
    textarea {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    width: 100%;
}
    `
  ]
})
export class Form1CuatroComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  

}
