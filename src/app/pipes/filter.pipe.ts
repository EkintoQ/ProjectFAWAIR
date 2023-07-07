import { Pipe, PipeTransform } from '@angular/core';
import {IfGame} from "../services/api/IfGame";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(games: IfGame[], filter: string): IfGame[] {
    return games.filter(game => game.genre.includes(filter));
  }
}
