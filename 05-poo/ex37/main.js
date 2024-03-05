class CarrinhoDeCompras {
  constructor (itens, quantidade, valor) {
    this.itens = itens;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  adicionarItens(item) {
    let contador = 0;

    for(let itemCarrinho in this.itens) {
      if(this.itens[itemCarrinho].id == item.id) {
        this.itens[itemCarrinho].quantidade += item.quantidade;
        contador = 1;
      }
    }

    if(contador == 0) {
      this.itens.push(item);
    }

    this.quantidade += item.quantidade;
    this.valor += item.valor * item.quantidade;
  }

  removerItens(item) {
    for(let itemCarrinho in this.itens) {
      if(this.itens[itemCarrinho].id == item.id) {
        let objeto = this.itens[itemCarrinho];
        let index = this.itens.findIndex(function(objeto) {return objeto.id == item.id});

        this.quantidade -= this.itens[itemCarrinho].quantidade;
        this.valor -= this.itens[itemCarrinho].valor * this.itens[itemCarrinho].quantidade;

        this.itens.splice(index, 1);
      }
    }
  }
}

let carrinho = new CarrinhoDeCompras([
  {
    id: 1,
    nome: "Camisa",
    valor: 20,
    quantidade: 1
  },
  {
    id: 2,
    nome: "Calça",
    valor: 50,
    quantidade: 2
  }
], 3, 120);

console.log(carrinho);

carrinho.adicionarItens({
  id: 1,
  nome: 'Camisa',
  valor: 20,
  quantidade: 4
});

carrinho.adicionarItens({
  id: 3,
  nome: 'Boné',
  valor: 15,
  quantidade: 2
});

console.log(carrinho);

carrinho.removerItens({id: 1, nome: 'Camisa', valor: 20, })

console.log(carrinho);