import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

/**
 * Servicio que se encarga de mostrar y ocultar el componente loader.
 */
export class LoaderService {
    isLoading = new Subject<boolean>();
    
    show():void {
        this.isLoading.next(true);
    }
    
    hide():void {        
        this.isLoading.next(false);
    }
}//