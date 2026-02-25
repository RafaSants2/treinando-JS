const pedidos = [
  { id: 1, cliente: "Rafa", total: 120 },
  { id: 2, cliente: "Ana", total: 80 },
  { id: 3, cliente: "Carlos", total: 200 },
  { id: 4, cliente: "Marina", total: 50 }
];

const resultado = pedidos.map(resumoPedidos => {
    if(resumoPedidos.total >= 100) {
        return { cliente: resumoPedidos.cliente, categoria: "Premium"};
    } else {
        return { cliente: resumoPedidos.cliente, categoria: "Comum"};
    }
});

console.log(resultado);