import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'budget-planner';

  dataSaved = false;

  onSaveData() {
    this.dataSaved = true; // Call this when data is saved
  }

  canDeactivate() {
    if (this.dataSaved) {
      return confirm('If you go back, the saved data will be lost. Do you want to proceed?');
    } else {
      return true; // Allow navigation if no data is saved
    }
  }
}
