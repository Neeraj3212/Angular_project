import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input({required: true}) product!: Product;
  @Input() markFavourite: (() => void)| null = null;
  @Input() removeFavourite: (() => void)| null = null;

  constructor (private router: Router){}

  onFavouriteClick() {
    if (this.markFavourite){
    this.markFavourite();
    }
  }

  onRemoveFavourite() {
    if (this.removeFavourite){
    this.removeFavourite();
    }
  }

  navigateToDetails() {
    this.router.navigate(['/products', this.product.id]);
  }

}
