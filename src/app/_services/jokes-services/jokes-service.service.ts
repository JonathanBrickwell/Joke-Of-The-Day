import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JokesModel } from 'src/app/_models/jokes/jokes-model.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokesServiceService {

  private url = "https://sv443.net/jokeapi/v2/joke/Any";

  constructor(private httpClient: HttpClient) { }

  getAllJokes(): Observable<JokesModel> {
    return this.httpClient.get(this.url).pipe(
      map((result: any) => new JokesModel(
        result.category,
        result.type,
        result.joke,
        result.flags,
        result.id,
        result.error
      ))
    )
  }

}
