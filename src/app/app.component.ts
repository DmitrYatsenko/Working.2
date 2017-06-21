import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = `������� ������� JSExpert`;

    links = [
        { path: '/dashboard', icon: 'home', label: '�������' },
        { path: '/filmList', icon: 'event_name', label: '��� ������' },
        { path: '/profile', icon: 'settings', label: '�������' }
    ];
}
