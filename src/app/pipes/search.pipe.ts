import { Pipe, PipeTransform } from '@angular/core';
import {IfGame} from "../services/api/IfGame";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(games: IfGame[], search: string): IfGame[] {
    return games.filter(game => game.title.toLowerCase().includes(search.toLowerCase()));
  }
}
