import { IRouteConfig } from '../interfaces/route-config';

export const INFO_PATH: IRouteConfig = {
  path: 'info',
  fullpath: '/info',
};

export const GALLERY_PATH: IRouteConfig = {
  path: 'gallery',
  fullpath: '/gallery',
};

export const PRODUCT_PATH: IRouteConfig = {
  path: 'product/:id',
  fullpath: '/product/:id',
  name: 'product',
};
