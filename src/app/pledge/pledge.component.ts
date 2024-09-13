import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ThanksComponent } from '../thanks/thanks.component';

@Component({
  selector: 'app-pledge',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ThanksComponent],
  templateUrl: './pledge.component.html',
  styleUrl: './pledge.component.scss'
})
export class PledgeComponent {

}
