import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDoc, doc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", id);
    getDoc(itemRef).then((snapshot) =>
      setProducto({ id: snapshot.id, ...snapshot.data() })
    );
  }, [id]);

  return (
    <div>
      <ItemDetail info={producto} key={producto.id} />
    </div>
  );
};
export default ItemDetailContainer;
