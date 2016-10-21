import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDarkTheme = false;
  
  views: Object[] = [
    {
      name: "Appointments",
      description: "Review upcoming bookings",
      icon: "assignment ind",
      route: "/md"
    },
    {
      name: "Clients",
      description: "Search for clients",
      icon: "pets",
      route: "/client-view"
    }
  ];

  showSettings() {
    alert("Settings");
  }
}
