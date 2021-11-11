import { Component, ViewChild, OnInit, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DocumentoGenService } from '@general/services/documento-gen.service';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-documento-gen',
  templateUrl: './documento-gen.component.html',
  styleUrls: ['./documento-gen.component.scss']
})
export class DocumentoGenComponent implements OnInit {
  //<ngx-extended-pdf-viewer 
  //  [base64Src]="data"
  ver: boolean = true;
  data: any = '';
  mime: string = '';

  display: Subject<boolean> = this.documentoService.display;
  pdfData: Subject<any> = this.documentoService.pdfData;

  constructor(private documentoService: DocumentoGenService) {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }

  ngOnInit(): void {
    
    this.pdfData.subscribe(val => {
      console.log('val',val);
      this.data = val;
    });
  }
  sidenavClosed() {
    this.documentoService.hide();
    this.display.subscribe(val => {
      this.ver = val;
    });
  }
}
