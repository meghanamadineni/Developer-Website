import { Component, OnInit, trigger, state, style, transition, animate, ViewChild, ViewContainerRef } from '@angular/core';
import { MatIconModule, MatListModule, MatInputModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ContactService } from './service/contact.service';
import 'rxjs/add/operator/filter';
declare var require: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.scss'],
  providers: [ContactService],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ]),

  ]
})

export class AppComponent implements OnInit {
  static myIndex = 1;
  flip: string = 'inactive';
  static config: any;
  strt: boolean = false;
  filePath: string;
  bg: string;
  ngOnInit() {
  }
  intro = "I am Meghana Madineni, pursuing Masters in Computer Science at University of Florida. I am a software developer with wild imagination and big dreams. I am a foodie and a good cook. Photography is my hobby. I like to paint and I love to travel."
  constructor(iconRegistry: MatIconModule, sanitizer: DomSanitizer, private contactService: ContactService) {
    this.filePath = './assets/Meghana_Madineni.pdf'
    this.bg = './assets/name.png'
  }
  submit(form: any) {
    this.contactService.addContact(form).subscribe();
    this.toggleFlip();
  }
  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }
  onComplete() {
    this.strt = true;
    var d = <HTMLElement>document.getElementsByClassName('typed-cursor')[0];
    d.style.display = "none";
    this.carousel();
  }
  carousel() {
    var i;
    for (i = 1; i <= 6; i++) {
      var y = <HTMLElement>document.getElementById(i);
      y.style.opacity = "0";
      y.style.height = "0";
    }
    if (AppComponent.myIndex > 6) { AppComponent.myIndex = 1; }
    var i1 = '' + AppComponent.myIndex;
    var x = <HTMLElement>document.getElementById(i1);
    x.style.opacity = "1";
    x.style.height = "300px"
    x.style.width = "300px"
    x.style.position = "absolute";
    x.style.top = "0";
    x.style.bottom = "0";
    x.style.transition = "opacity 1s ease-in-out"
    AppComponent.myIndex = AppComponent.myIndex + 1;
    setInterval(this.carousel, 2000, AppComponent.myIndex)
  }

}
