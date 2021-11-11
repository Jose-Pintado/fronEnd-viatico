import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2-uno',
  templateUrl: './form2-uno.component.html',
  styles: [
    ` .space{
      margin:25px;
    }
  
    .notificacion{
      color:red;
      font-size:14px;
      padding-left:30px;
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
export class Form2UnoComponent implements OnInit {
  selectedValue: string = 'val1';
  constructor() { }

  ngOnInit(): void {
  }

}
