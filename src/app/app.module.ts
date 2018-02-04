import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {TypingAnimationDirective } from 'angular-typing-animation'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './custom-material/custom-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppComponent} from './app.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    TypingAnimationDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
