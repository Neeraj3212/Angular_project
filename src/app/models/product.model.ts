export interface Product {
    id:number,
    name:string,
    description:string,
    price:number,
    imageUrl?:string,
    imageFile?: File,
    discount:number,
    category:string,
    isFavourite?: boolean;
}