import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ChangeBgDirective } from './change-bg.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ChangeDetectionComponent, ChangeBgDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
