import { Component, OnInit } from '@angular/core';
import { GetAlbumService } from '../getAlbum/get-album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  providers: [
    GetAlbumService
  ]
})
export class SearchComponent implements OnInit {
  searchQuery: String;
  loading: Boolean;
  searchAlbum: Function;
  albums: Object = {};

  constructor(private getAlbumService: GetAlbumService) {
    this.searchAlbum = () => {
      if (this.searchQuery !== "") {
        this.loading = true;
        getAlbumService
          .getAlbums(this.searchQuery, 'album')
          .then(response => {
            if (response) {
              this.albums = response.albums;
              this.loading = false;
            }
          });
      } else { 
        this.loading = false;
      }
    }
  }

  ngOnInit() {
    this.searchQuery = "";
    this.loading = true;
  }

}
