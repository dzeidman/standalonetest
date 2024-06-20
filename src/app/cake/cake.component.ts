import { Component } from '@angular/core';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';

@Component({
  selector: 'app-cake',
  standalone: true,
  imports: [],
  providers:[AddinClientService],
  templateUrl: './cake.component.html',
  styleUrl: './cake.component.scss'
})
export class CakeComponent {

constructor(clientService: AddinClientService){}

}
