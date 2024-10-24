import { Component } from '@angular/core';
import { PushComponent } from '../../components/push/push.component';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    PushComponent
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {

}
