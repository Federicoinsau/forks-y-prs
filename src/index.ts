import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase: number) {
    const nuevArray = products.filter((p) => {
      return p.price < precioBase;
    });
    return nuevArray;
  }
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
    // pista: push no suma muchos items (agrega de a uno)
    //newProducts.forEach((e) => this.products.push(e));
    this.products = this.products.concat(newProducts);
  }
}

export { User, Product };
