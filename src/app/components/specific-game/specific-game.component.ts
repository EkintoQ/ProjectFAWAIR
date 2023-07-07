import {Component, Input} from '@angular/core';
import {IfSpecificGame} from "../../services/api/IfSpecificGame";

@Component({
  selector: 'app-specific-game',
  templateUrl: './specific-game.component.html',
  styleUrls: ['./specific-game.component.scss']
})
export class SpecificGameComponent {
  @Input() specificGame!: IfSpecificGame
}
