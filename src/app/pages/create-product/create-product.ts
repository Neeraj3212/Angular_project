import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-product',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css'
})
export class CreateProduct {

  productForm: any;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0,[Validators.required, Validators.min(0)]],
      imageUrl: [''],
      discount: [0],
      category: ['',Validators.required]
    });
  }

  imageFile: File | null = null;
  imagePreview: string | null = null;

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    this.imageFile = input.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      this.productForm.patchValue({ imageUrl: this.imagePreview });
    };
    reader.readAsDataURL(this.imageFile);
  }



  onSubmit() {
    if (this.productForm.invalid) return;

    const product = {
      ...this.productForm.value,
      imageFile: this.imageFile
    };

    this.productService.addProduct(product);
    this.router.navigate(['/products']);
  }

  canDeactivate(): boolean {
    return !this.productForm.dirty;
  }

  resetForm() {
    this.productForm.reset();
    this.imagePreview = null;

    this.productForm.patchValue({
      price:0,
      discount:0
    });

    const fileInput = document.getElementById('image') as HTMLInputElement;
    if(fileInput) fileInput.value = '';
  }

}
