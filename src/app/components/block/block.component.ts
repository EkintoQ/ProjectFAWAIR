import {Component, Input} from "@angular/core";
import {IfGame} from "../../services/api/IfGame";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
}
)
export class BlockComponent {
  constructor(public modalService: ModalService) {
  }
  @Input() game!: IfGame
}
