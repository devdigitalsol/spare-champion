import { Component } from '@angular/core';
import { PledgeComponent } from '../pledge/pledge.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [RouterOutlet, RouterLink, PledgeComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

}
