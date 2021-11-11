import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@general/services/loader.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent  {
  blockedDocument=true;

  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) { }


}