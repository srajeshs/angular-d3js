import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BarComponent } from './bar.component';
import { LineComponent } from './line.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, BarComponent, LineComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
