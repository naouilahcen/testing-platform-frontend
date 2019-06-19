import {RouteInfo} from './second-navbar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '/home',
    title: 'Tableau de bord',
    icon: '',
    clazz: 'nav-item',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    isNavHeader: false,
    submenu: []
  },
  {
    path: '',
    title: 'Menu with sub menu',
    icon: '',
    clazz: 'nav-item has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    isNavHeader: false,
    submenu: [
      {
        path: '',
        title: 'Sub Menu 1',
        icon: '',
        clazz: 'menu-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: []
      },
      {
        path: '',
        title: 'Sub Menu 2',
        icon: '',
        clazz: 'menu-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: []
      },
      {
        path: '',
        title: 'Sub Menu 3',
        icon: '',
        clazz: 'menu-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: []
      }
    ]
  },
  {
    path: '/admin',
    title: 'Administration',
    icon: '',
    clazz: 'nav-item',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    isNavHeader: false,
    submenu: []
  }
];
