import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetAlbumService {
  private apiUrl = 'http://api.spotify.com/v1/search'

  constructor(private http: Http) { }

  getAlbums(searchQuery, searchType): Promise<any> {
    return this.http.get(
      this.apiUrl,
      {
        params: {
          q: searchQuery,
          type: searchType || 'album'
        }
      }
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
