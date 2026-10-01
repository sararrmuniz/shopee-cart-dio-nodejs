// ações que um carrinho pode fazer
// adicionar item, remover um item, deletar item do carrinho, calcular total do carrinho

// Adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// Deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// Remover um item do carrinho - diminui um item
async function removeItem(userCart, index) {}

// Mostrar o carrinho
async function displayCart(userCart) {
  console.log("Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - $${item.price} x ${item.quantity} = $${item.subtotal()}`,
    );
  });
}

// Calcular total do carrinho
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(result);
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart };
