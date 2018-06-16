import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    title: string = 'To jest tytu³ z HomeComponentu';
    isCool: boolean = true;
    year: number = 2018;

}
