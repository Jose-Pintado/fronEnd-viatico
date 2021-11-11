import { Component, OnInit } from '@angular/core';
import { CalendarOptions,DateSelectArg } from '@fullcalendar/angular';

@Component({
  selector: 'app-general-calendario',
  templateUrl: './general-calendario.component.html',
  styleUrls: ['./general-calendario.component.scss']
})
export class GeneralCalendarioComponent implements OnInit {
   
  displayModal: boolean | undefined;
     showModalDialog() {
        this.displayModal = true;
    }
    
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.showModalDialog.bind(this),
    
    
  };
   handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Ingrese su evento');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection
}

  
  constructor() { }

  ngOnInit(): void {
  }

}
