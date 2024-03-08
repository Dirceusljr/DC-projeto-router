import React from "react";

let listaProdutos = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
];

const List = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Descrição</th>
          <th>Categoria</th>
          <th>Imagem</th>
        </tr>
      </thead>
      <tbody>
        {listaProdutos.map((item) => {
          return (<tr key={item.id} >
            <td style={{textAlign: 'center'}}>{item.id}</td>
            <td style={{textAlign: 'center'}}>{item.title}</td>
            <td style={{textAlign: 'center'}}>{item.price}</td>
            <td style={{textAlign: 'center'}}>{item.description}</td>
            <td style={{textAlign: 'center'}}>{item.category}</td>
            <td style={{textAlign: 'center'}}>
              <img style={{width: '25%'}} src={item.image} alt={item.title} />
            </td>
          </tr>);
        })}
      </tbody>
    </table>
  );
};

export default List;
