import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, filter, Observable, switchMap, tap} from "rxjs";
import {GameService} from "../../services/api/game.service";
import {IfSpecificGame} from "../../services/api/IfSpecificGame";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  loading = false

  constructor(private gameService: GameService, public modalService: ModalService) {
  }


  ngOnInit(): void {
    this.loading = true
    this.specificGame$
  }

  id$: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

  @Input()
  set id(value: number) {
    this.id$.next(value);
  }

  specificGame$: Observable<IfSpecificGame> = this.id$.pipe(
      filter(Boolean),
      tap(() => this.loading = true),
      switchMap((id: number) => this.gameService.getSpecificGame(id)),
      tap(() => this.loading = false));
}
