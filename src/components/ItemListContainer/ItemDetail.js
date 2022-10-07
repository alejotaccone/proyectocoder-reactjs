const ItemDetail = ({ item }) => {
  return (
    <div>
      <p> {item.title}</p>
      <img className="ItemDetalle" src={item.img} alt={item.title} />
      <p> {item.descripcion} </p>
    </div>
  );
};

export default ItemDetail;
