import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form1-uno',
  templateUrl: './form1-uno.component.html',
  styles: [
    ` .space{
      margin:25px;
    }

    
    .notificacion{
      color:red;
      font-size:14px;
      padding:30px;
    
     
    }
    .contenido {
      display:flex;
    justify-content: center;
    align-items: center;
    background-color:rgb(255, 255, 255);
    }
    .caja {
      width: 100%;
      
      padding:20px;
      padding-left:50px;
      
      border: 1px solid #2196f3;
      border-radius: 10px;
    }
    `
  ]
})
export class Form1UnoComponent implements OnInit {
   
  form1_uno : FormGroup = this.fb.group({
    objeto : ['',[Validators.required, Validators.minLength(3)]],
    fuente : [ ,Validators.required],
    form110: ['',Validators.required],
    destino:[,Validators.required]
  })
  constructor(private router:Router,
              private fb: FormBuilder) {
   console.log (this.form1_uno.controls['fuente'].value )
   }

  ngOnInit(): void {
    /**establecer valores por defecto o enlazar backends */
    /*this.form1_uno.reset({
      objeto: 'objeto de viaje',
      fuente: 25
    })*/
  }

  validarCampo(campo:string){
    return this.form1_uno.controls[campo].errors
                && this.form1_uno.controls[campo].touched;
  }
  guardar(){
    if(this.form1_uno.invalid){
      this.form1_uno.markAllAsTouched();
      return;
    }
    console.log(this.form1_uno.value)
    this.form1_uno.reset(); //para limpiar el formulario
    this.router.navigate(['inicio/pasajes-viaticos/solicitudes/form1/form1_dos'])
  }
}
