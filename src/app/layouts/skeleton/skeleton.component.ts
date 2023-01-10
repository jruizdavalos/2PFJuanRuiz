import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent {
  public showLeftNav = true;
  public $theme: 'dark' | 'red' | 'blue-dark' | 'yelow' = 'blue-dark'

  constructor() { }

  showMenu() {
    this.showLeftNav = !this.showLeftNav
  }
}
