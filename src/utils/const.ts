export enum AppRoute{
  main = '/',
  auth = '/login',
  createDeal = '/createDeal',
  archiveLand = '/archiveLand',
  lkManager = '/manager',
  land = '/land'
}

export enum AuthStatus{
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ApiRoute{
  Lands = '/lands',
  Entity = '/entities'
}

export enum NameSpace{
  Lands = 'LANDS',
  User = 'USER',
  Entity = 'ENTITY'
}
