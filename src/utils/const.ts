export enum AppRoute{
  main = '/',
  auth = '/login',
  createDeal = '/land/add',
  archiveLand = '/lands',
  lkManager = '/manager',
  land = '/land',
  createEntity = '/entity',
  tasks = '/tasks',
  editLand = '/land/edit',
  notFound = '*'
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
