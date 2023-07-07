import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IfGame} from "./IfGame";
import {IfSpecificGame} from "./IfSpecificGame";

@Injectable({
  providedIn: 'root'
})
export class GameService{
  constructor(private http: HttpClient){
  }
  getAll(): Observable<IfGame[]>{
    const params = {
      'headers':{
        'X-RapidAPI-Key': 'e83bb7db92mshfbbb2fe57ec441bp124522jsn3e2929c150db',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    return this.http.get<IfGame[]>('https://free-to-play-games-database.p.rapidapi.com/api/games', params);
  }
  getSpecificGame(id: number): Observable<IfSpecificGame>{
    const params = {
        'params':{
          'id': id
        },
        'headers':{
          'X-RapidAPI-Key': 'e83bb7db92mshfbbb2fe57ec441bp124522jsn3e2929c150db',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    return this.http.get<IfSpecificGame>('https://free-to-play-games-database.p.rapidapi.com/api/game', params);
    }
}
