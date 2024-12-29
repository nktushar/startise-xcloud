import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'startise-xcloud';
  showBlueprints: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleBlueprints() {
    this.showBlueprints = !this.showBlueprints;
    console.log('showBlueprints', this.showBlueprints);
  }
}
