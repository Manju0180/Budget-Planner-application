import { Component, HostListener } from '@angular/core';
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

  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    const confirmation = window.confirm('Are you sure you want to go back?');
    if (!confirmation) {
      event.preventDefault();
      history.pushState(null, '', location.href);
    }
  }
  title = 'budget-planner';
}
