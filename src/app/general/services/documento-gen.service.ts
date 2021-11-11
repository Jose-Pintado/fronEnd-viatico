import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

/**
 * Servicio que se encarga de mostrar y ocultar el componente loader.
 */
export class DocumentoGenService {
    
    pdfData= new Subject<any>();
    display = new Subject<boolean>();

    //pdf blob
    showPdf(pdfData:any) {
        this.display.next(true);
        this.pdfData.next(pdfData);
    }
    
    hide() {
        this.display.next(false);
        this.pdfData.next('');
    }

    //target blank
    blank(response:any,tipoMime:any){
        let blob: any = new Blob([response], { type: tipoMime });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
    }

}