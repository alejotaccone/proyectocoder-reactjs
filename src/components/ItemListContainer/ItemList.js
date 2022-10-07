import Cards from "../Cards/Cards";

const ItemList = ({ productos = [] }) => {
  return productos.map((Producto) => (
    <Cards key={Producto.id} info={Producto} />
  ));
};

export default ItemList;
