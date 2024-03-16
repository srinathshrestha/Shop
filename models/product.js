const products = [];

module.export = class Product {
  constructor(id, title, price, longDesc) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.longDesc = longDesc;
  }
  save() {
    products.push(this);
  }
  static fetchAll() {
    return products;
  }
  static findById(id) {
    return products.find((p) => p.id === id);
  }
};
