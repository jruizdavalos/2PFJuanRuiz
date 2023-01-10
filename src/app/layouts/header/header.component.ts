
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars, faBell, faComment } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public faBars = faBars;
  public faBell = faBell;
  public faComment = faComment;
  public avatar = 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg'
  public logo = 'assets/images/defaults/logo.png'
  @Output() showMenu = new EventEmitter<any>()


  constructor() { }


  ngOnInit(): void {

  }

}
