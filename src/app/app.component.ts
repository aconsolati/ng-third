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
      name: "Hospital Cases",
      description: "Recently admitted patients",
      icon: "pets",
      route: "/dashboard"
    }
  ];

  // openDialog() {
  //   const config = new MdDialogConfig();
  //   config.viewContainerRef = this.vcr;
  //   this.dialog.open(SettingsDialog, config);
  // }

  showSettings() {
    alert("Settings");
  }
}
