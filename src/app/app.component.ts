import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <h1>Hello from Angular Stackblitz!</h1>
    @if(isLoading === true){
    <h1>Wird geladen.</h1>
    } @if(isLoading === false){
    <h1>Fertig.</h1>
    }
  `,
})
export class AppComponent {
  public isLoading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
