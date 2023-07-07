import {Component, OnInit} from '@angular/core';
import { IfGame } from './services/api/IfGame';
import {GameService} from "./services/api/game.service";
import {Observable, tap} from "rxjs";
import {ModalService} from "./services/modal.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  search = ''
  filter = ''
  loading = false
  games$!: Observable<IfGame[]>

  constructor(
    private gameService: GameService,
    public modalService: ModalService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.games$ = this.gameService.getAll().pipe(
      tap(() => this.loading = false)
    )
  }
}
