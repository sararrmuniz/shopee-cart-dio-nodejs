# Shopee Cart

Projeto de estudo em Node.js que simula as operações básicas de um carrinho de compras inspirado na Shopee.

## Funcionalidades

- Criar itens com nome, preço e quantidade.
- Adicionar itens ao carrinho.
- Exibir os itens, suas quantidades e seus subtotais.
- Remover uma unidade de um item. Quando resta apenas uma unidade, a próxima remoção exclui o item do carrinho.
- Excluir um item inteiro pelo nome.
- Calcular o total do carrinho.

## Requisitos

- Node.js 18 ou superior.

O projeto não possui dependências externas.

## Como executar

Na raiz do projeto, execute:

```bash
node src/index.js
```

O script cria alguns itens de exemplo, adiciona-os ao carrinho, remove uma unidade e exibe o carrinho e o total.

## Estrutura do projeto

```text
src/
├── index.js          # Exemplo de uso dos serviços do carrinho
└── services/
	├── cart.js       # Operações do carrinho
	└── item.js       # Criação de itens e cálculo do subtotal
```

## Serviços do carrinho

O módulo `src/services/cart.js` exporta as seguintes funções:

| Função                   | Comportamento                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------- |
| `addItem(cart, item)`    | Adiciona um item ao carrinho.                                                                     |
| `removeItem(cart, item)` | Reduz em uma unidade a quantidade do item; remove-o do carrinho quando a quantidade chega a zero. |
| `deleteItem(cart, name)` | Remove do carrinho o item com o nome informado, independentemente da quantidade.                  |
| `displayCart(cart)`      | Exibe os itens e seus subtotais no terminal.                                                      |
| `calculateTotal(cart)`   | Exibe a soma dos subtotais dos itens.                                                             |
