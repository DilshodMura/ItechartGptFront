import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { MainRoutingModule } from './main-routing.module';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { HistorybarComponent } from './components/historybar/historybar.component';


@NgModule({
  declarations: [ChatComponent, HistorybarComponent, MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    MatIconModule
  ]
})
export class MainModule { }
