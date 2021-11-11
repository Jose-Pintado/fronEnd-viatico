import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { GeneralCalendarioComponent } from './calendario/general-calendario/general-calendario.component';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; 
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
   GeneralCalendarioComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    FullCalendarModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    SidebarModule

  ]
})
export class EventosModule { }
