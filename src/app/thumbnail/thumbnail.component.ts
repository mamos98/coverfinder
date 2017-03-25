import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.sass']
})
export class ThumbnailComponent implements OnInit {

  @Input() album: Object = {};

  constructor() { }

  ngOnInit() {}

}
