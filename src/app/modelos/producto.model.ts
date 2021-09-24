export class Producto {
    constructor(
      public _id: String,
      public nombre: String,
      public nombreProveedor: String,
      public stock: Number,
      public cantidadVendida: Number,
      public empresa: String
    ){}
  
  }