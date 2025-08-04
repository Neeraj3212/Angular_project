import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteProducts } from './favourite-products';

describe('FavouriteProducts', () => {
  let component: FavouriteProducts;
  let fixture: ComponentFixture<FavouriteProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
