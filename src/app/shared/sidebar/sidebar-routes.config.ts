import {RouteInfo} from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '',
    title: 'Administration',
    icon: 'icon-settings',
    clazz: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    isNavHeader: false,
    submenu: [
      {
        path: '',
        title: 'Utilisateurs',
        icon: 'icon-users',
        clazz: 'nav-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: [
          {
            path: '/admin/users',
            title: 'Liste des utilisateurs',
            icon: 'icon-list',
            clazz: 'nav-item',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            isNavHeader: false,
            submenu: []
          },
          {
            path: '/admin/user',
            title: 'Nouveau utilisateur',
            icon: 'icon-user-follow',
            clazz: 'nav-item',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            isNavHeader: false,
            submenu: []
          }
        ]
      },
      {
        path: '',
        title: 'Demande',
        icon: 'icon-question',
        clazz: 'nav-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: [
          {
            path: '/admin/demande',
            title: 'Ajouter un demande',
            icon: 'icon-user-follow',
            clazz: 'nav-item',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            isNavHeader: false,
            submenu: []
          },
          {
            path: '/admin/emandes',
            title: 'Liste des Demandes',
            icon: 'icon-list',
            clazz: 'nav-item',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            isNavHeader: false,
            submenu: []
          },
        ]
      }, {
        path: '',
        title: 'Question',
        icon: 'icon-question',
        clazz: 'nav-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: [
          {
            path: '/admin/question',
            title: 'Ajouter une question',
            icon: 'icon-user-follow',
            clazz: 'nav-item',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            isNavHeader: false,
            submenu: []
          },
          {
            path: '/admin/questions',
            title: 'Liste des Questions',
            icon: 'icon-list',
            clazz: 'nav-item',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            isNavHeader: false,
            submenu: []
          },
        ]
      },
      {
        path: '',
        title: 'Profils',
        icon: 'icon-graduation',
        clazz: 'nav-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: [
          {
            path: '/admin/profiles',
            title: 'Liste de profils',
            icon: 'icon-list',
            clazz: 'nav-item',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            isNavHeader: false,
            submenu: []
          },
          {
            path: '/admin/profile',
            title: 'Nouveau profil',
            icon: 'icon-ghost',
            clazz: 'nav-item',
            badge: '',
            badgeClass: '',
            isExternalLink: false,
            isNavHeader: false,
            submenu: []
          }
        ]
      },
      {
        path: '/admin/settings',
        title: 'Paramétrage',
        icon: 'icon-settings',
        clazz: 'nav-item',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        isNavHeader: false,
        submenu: []
      }
    ]
  }
];
