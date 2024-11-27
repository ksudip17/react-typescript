const products = [
  { title: "Cabbage", isVegitable: true, id: 1 },
  { title: "Mango", isVegitable: false, id: 2 },
  { title: "Cauliflower", isVegitable: true, id: 3 },
];

const FruitManager = () => {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isVegitable ? "red" : "blue" }}
    >
      {product.title}
    </li>
  ));
  return <ul>{listItems}</ul>;
};

export default FruitManager;
