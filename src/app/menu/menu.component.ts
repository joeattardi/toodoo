import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('menu') menu: ElementRef;
  hidden = true;

  constructor(private menuService: MenuService) {
    this.hideMenu = this.hideMenu.bind(this);
  }

  hideMenu() {
    this.hidden = true;
    this.menuService.clearMenu();
    document.removeEventListener('click', this.hideMenu);
  }

  showMenu(position) {
    Object.keys(position).forEach(pos => {
      this.menu.nativeElement.style[pos] = position[pos];
    });
    this.hidden = false;
    this.menuService.registerMenu(this);

    document.addEventListener('click', this.hideMenu);
  }

  ngOnInit() {
  }

}
