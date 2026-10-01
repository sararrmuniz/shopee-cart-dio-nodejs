import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishlist = [];

console.log("Welcome to the Shopee Cart!");

const item1 = await createItem("Shoes", 49.99, 2);
const item2 = await createItem("T-shirt", 19.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.displayCart(myCart);

console.log("Shopee Cart TOTAL IS:");
await cartService.calculateTotal(myCart);
