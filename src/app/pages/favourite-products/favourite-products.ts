import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product-service';
import { AllProducts } from "../all-products/all-products";
import { ProductCard } from "../../components/product-card/product-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favourite-products',
  imports: [CommonModule, ProductCard],
  templateUrl: './favourite-products.html',
  styleUrl: './favourite-products.css'
})
export class FavouriteProducts implements OnInit {

  favourites: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favourites = this.productService.getFavourites();
  }

  getRemoveFavourite(id: number): () => void {
    return () => {
      this.productService.removeFromFavourite(id);
      this.loadFavorites();
    }
  }
}
