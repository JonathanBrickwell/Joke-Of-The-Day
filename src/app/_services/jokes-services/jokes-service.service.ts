import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JokesModel } from 'src/app/_models/jokes/jokes-model.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokesServiceService {

  private url = 'assets/json/jokes.json';

  constructor(private httpClient: HttpClient) { }

  // getAllJokes(): Observable<JokesModel> {
  //   return this.httpClient.get(this.url).pipe(
  //     map((result: any) => new JokesModel(
  //       result.id,
  //       result.category,
  //       result.joke,
  //     ))
  //   )
  // }

}
