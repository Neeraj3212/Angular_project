import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product-service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCard } from "../../components/product-card/product-card";

@Component({
  selector: 'app-all-products',
  imports: [RouterModule, CommonModule, ProductCard],
  templateUrl: './all-products.html',
  styleUrl: './all-products.css'
})
export class AllProducts {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  markAsFavourite(id: number): void {
    this.productService.markAsFavourite(id);
  }

  removeFromFavourite(id: number): void {
    this.productService.removeFromFavourite(id);
  }

  getMarkFavourite(productId: number): () => void {
    return () => this.markAsFavourite(productId);
  }

  getRemoveFavourite(productId: number):  () => void {
    return () => this.removeFromFavourite(productId);
  }


}
