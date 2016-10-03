import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  views: Object[] = [
    {
      name: "Appointments",
      description: "Review upcoming bookings",
      icon: "assignment ind",
      route: "/md"
    },
    {
      name: "Hospital Cases",
      description: "Recently admitted patients",
      icon: "pets",
      route: "/dashboard"
    }
  ];
}
