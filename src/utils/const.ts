export enum AppRoute{
  main = '/',
  auth = '/login',
  createDeal = '/createDeal',
  archiveLand = '/archiveLand',
  lkManager = '/manager'
}

export enum AuthStatus{
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ApiRoute = {
  Lands: '/lands',
}

export const Namespace = {
  Lands: 'lands',
  User: 'user'
}
