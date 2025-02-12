/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './pages/__root'

// Create Virtual Routes

const LoginLazyImport = createFileRoute('/login')()
const HomeIndexLazyImport = createFileRoute('/home/')()

// Create/Update Routes

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./pages/login.lazy').then((d) => d.Route))

const HomeIndexLazyRoute = HomeIndexLazyImport.update({
  id: '/home/',
  path: '/home/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./pages/home/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/home/': {
      id: '/home/'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/login': typeof LoginLazyRoute
  '/home': typeof HomeIndexLazyRoute
}

export interface FileRoutesByTo {
  '/login': typeof LoginLazyRoute
  '/home': typeof HomeIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/login': typeof LoginLazyRoute
  '/home/': typeof HomeIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/login' | '/home'
  fileRoutesByTo: FileRoutesByTo
  to: '/login' | '/home'
  id: '__root__' | '/login' | '/home/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LoginLazyRoute: typeof LoginLazyRoute
  HomeIndexLazyRoute: typeof HomeIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  LoginLazyRoute: LoginLazyRoute,
  HomeIndexLazyRoute: HomeIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/login",
        "/home/"
      ]
    },
    "/login": {
      "filePath": "login.lazy.tsx"
    },
    "/home/": {
      "filePath": "home/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
