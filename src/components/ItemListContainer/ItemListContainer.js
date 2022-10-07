import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import styled from "styled-components";
import Productos from "./List";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Productos);
      }, 3000);
    });
    if (categoryId) {
      getData.then((res) =>
        setProductos(res.filter((prod) => prod.category === categoryId))
      );
    } else {
      getData.then((result) => {
        setProductos(result);
      });
    }
  }, [categoryId]);

  return (
    <ItemContainer>
      <div className="Container">
        <ItemList productos={productos} />
      </div>
    </ItemContainer>
  );
};

export default ItemListContainer;
const ItemContainer = styled.div`
  .Container {
    display: flex;
    justify-content: center;
  }
`;
