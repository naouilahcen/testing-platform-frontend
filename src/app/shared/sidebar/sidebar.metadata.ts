export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    clazz: string;
    badge: string;
    badgeClass: string;
    isExternalLink: boolean;
    isNavHeader: boolean;
    submenu: RouteInfo[];
}
