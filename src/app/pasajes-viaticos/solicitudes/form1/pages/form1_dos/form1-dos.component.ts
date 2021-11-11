import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form1-dos',
  templateUrl: './form1-dos.component.html',
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


export class Form1DosComponent implements OnInit {
  date1!: Date;
  date2!: Date;
  value1: string="";

  
  constructor( private router:Router) { 
    
  }

  ngOnInit(): void {
  }
  verForm1_tres(){
    this.router.navigate(['inicio/pasajes-viaticos/solicitudes/form1/form1_tres'])
  }

}
