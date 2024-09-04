const products = [
  { id: 1, title: "Cabbage", isFruit: false },
  { id: 2, title: "Garlic", isFruit: false },
  { id: 3, title: "Apple", isFruit: true },
];

const TaskList = () => {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "red" : "darkgreen" }}
    >
      {product.title}
    </li>
  ));
  return <ul>{listItems}</ul>;
};

export default TaskList;
