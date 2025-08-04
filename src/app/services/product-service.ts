import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];
  private favourites: Product[] = [];

  private currentId = 1;

  private getNextId(): number {
    return this.currentId++;
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    product.id = this.getNextId();
    this.products.push(product);
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
    this.favourites = this.favourites.filter(p => p.id !== id);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  markAsFavourite(id: number): void {
    const product = this.getProductById(id);
    if (product && !product.isFavourite) {
      product.isFavourite = true;
      this.favourites.push(product);
    }
  }

  getFavourites(): Product[] {
    return [...this.favourites];
  }

  removeFromFavourite(id: number): void {
    const product = this.getProductById(id);
    if (product && product.isFavourite == true) {
       product.isFavourite = false;
       this.favourites = this.favourites.filter(p => p.id !== id);
      }
  }
}
