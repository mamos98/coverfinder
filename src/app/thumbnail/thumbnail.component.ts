import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'album-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.sass']
})
export class ThumbnailComponent implements OnInit {

  @Input('albumInfo')
  album: Object = {}  

  constructor() { }

  ngOnInit() {}

}
