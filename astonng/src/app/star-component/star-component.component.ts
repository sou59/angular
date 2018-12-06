import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.css']
})
export class StarComponentComponent implements OnInit {
  wasClicked = false;
  constructor() { }

  ngOnInit() {
  }

  star(event) {
    if (this.wasClicked) {
    event.className = 'far fa star';
    } else {
      event.className = 'fas fa star';

    }
  }
}
