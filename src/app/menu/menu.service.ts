import { MenuComponent } from './menu.component';

export class MenuService {
  private currentMenu: MenuComponent;

  registerMenu(menu: MenuComponent) {
    if (this.currentMenu && this.currentMenu !== menu) {
      this.currentMenu.hideMenu();
    }

    this.currentMenu = menu;
  }

  clearMenu() {
    this.currentMenu = null;
  }
}
