import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() iconSize: string = 'icon-google';
  @Input() iconName: string = 'icon-base';
  @Input() text: string = ''; // button inner text
}
