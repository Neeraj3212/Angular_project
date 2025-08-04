import { Routes } from '@angular/router';
import { AllProducts } from './pages/all-products/all-products';
import { ProductDetails } from './pages/product-details/product-details';
import { CreateProduct } from './pages/create-product/create-product';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';
import { FavouriteProducts } from './pages/favourite-products/favourite-products';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', loadComponent: () => import('./pages/all-products/all-products').then(m => m.AllProducts) },
    { path: 'products/new', loadComponent: () => import('./pages/create-product/create-product').then(m => m.CreateProduct) },
    { path: 'products/:id', loadComponent: () => import('./pages/product-details/product-details').then(m => m.ProductDetails) },
    { path: 'favourites', loadComponent: () => import('./pages/favourite-products/favourite-products').then(m => m.FavouriteProducts) }
];
