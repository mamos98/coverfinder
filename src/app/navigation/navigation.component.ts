import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  @Input()
  title = 'Cover Finder';

  constructor() { }

  ngOnInit() {
  }
}
