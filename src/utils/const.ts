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

export enum ApiRoute{
  Lands = '/lands',
}

export enum NameSpace{
  Lands = 'LANDS',
  User = 'USER'
}
