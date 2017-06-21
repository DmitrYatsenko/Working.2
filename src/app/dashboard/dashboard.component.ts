import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "dashboard",
    templateUrl: "dashboard.component.html",
    styleUrls: ["dashboard.component.css"]
})

export class DashboardComponent {
    title: string = 'Каталог фильмов JSExpert';

    links = [
        { path: '/dashboard', icon: 'home', label: 'Главная' },
        { path: '/filmList', icon: 'event_name', label: 'Все фильмы' },
        { path: '/profile', icon: 'settings', label: 'Профиль' }
    ];
   
}