import { Component } from '@angular/core';
import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  checkinterent: any = "";
  checkConnection: string = '';
  therichpost$() {
    return merge<any>(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      })
    );
  }

  ngOnInit() {
    setInterval(() => {
      this.checkConnection =""
      this.therichpost$().subscribe(
        (isOnline) => (this.checkinterent = isOnline)
      );

      if (this.checkinterent == false) {
        this.checkConnection = 'Sua internet não está funcionando :(';
      }
    }, 300);
  }
}
