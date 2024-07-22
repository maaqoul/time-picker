import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  startHour = '08';
  startMinute = '00';
  durationHour = '00';
  durationMinute = '15';
  showStartTimePicker = false;
  showDurationPicker = false;

  hours = this.generateHours();
  minutes = this.generateMinutes();

  generateHours(): string[] {
    const hours: string[] = [];
    for (let hour = 0; hour < 24; hour++) {
      hours.push(this.padZero(hour));
    }
    return hours;
  }

  generateMinutes(): string[] {
    return ['00', '15', '30', '45'];
  }

  padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  onStartTimeChange() {
    this.showStartTimePicker = false;
  }

  onDurationChange() {
    this.showDurationPicker = false;
  }
}
