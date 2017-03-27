import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  providers: [Location]
})
export class NavigationComponent implements OnInit {
  @Input()
  title: String = 'Cover Finder';

  constructor(private location: Location) {}

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
