import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetDetailsService {
  private apiUrl = 'https://coverfinder.herokuapp.com/api/albums';

  constructor(private http: Http) { }

  getAlbumDetails(albumId): Promise<any> {
    return this.http.get(
      this.apiUrl + '/' + albumId
    )
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
