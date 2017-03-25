import { Component, Input, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GetDetailsService } from '../getDetails/get-details.service';

@Component({
  selector: 'album-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  spotifyURI: String;
  album: Object = {};
  tracks: Object = {};
  loaded: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private getDetails: GetDetailsService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      // Set AlbumId
      this.spotifyURI = params['spotifyURI'];
      // Get Details of Album
      this.getDetails.getAlbumDetails(this.spotifyURI).then(response => {
        this.album = response;
        this.tracks = response.tracks.items;
        this.loaded = true;
      })
    });
  }

}
