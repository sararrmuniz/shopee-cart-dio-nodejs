// ações que um carrinho pode fazer
// adicionar item, remover um item, deletar item do carrinho, calcular total do carrinho

// Adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// Deletar item do carrinho
async function deleteItem(userCart, name) {

}

// Remover um item do carrinho - diminui um item
async function removeItem(userCart, index) {

}

// Calcular total do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}

export { addItem, deleteItem, removeItem, calculateTotal };