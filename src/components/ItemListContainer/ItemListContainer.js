import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import styled from "styled-components";
import {
  getDocs,
  collection,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    if (categoryId) {
      const itemsFilter = query(
        itemsCollection,
        where("category", "==", categoryId)
      );
      getDocs(itemsFilter).then((snapshot) => {
        setProductos(
          snapshot.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
        );
      });
    } else {
      getDocs(itemsCollection).then((snapshot) => {
        setProductos(
          snapshot.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
        );
      });
    }
  }, [categoryId]);

  return (
    <ItemContainer>
      <div id="intro">
        <div className="poster">
          <h2>BOCA TE LLEVO EN EL ALMA</h2>
          <p>
            Nueva camiseta alternativa de Boca Juniors,inspirada en icónicos
            diseños de fines de los años ’90.
          </p>
        </div>
      </div>
      <div className="Container">
        <ItemList productos={productos} key={productos.id} />
      </div>
    </ItemContainer>
  );
};

export default ItemListContainer;
const ItemContainer = styled.div`
  .Container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
  #intro {
    background-image: url("https://i.ibb.co/hmTRbgh/football-ar-fw22-boca-jsy-mh-small-launch-d-tcm216-940236.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: 40vh;
  }
  .poster {
    text-align: left;
    display: flex;
    max-width: 50%;
    flex-direction: column;
    color: white;
    padding-top: 9rem;
    padding-left: 8rem;
  }
  .poster p {
    font-size: 20px;
  }
  .poster h2 {
    font-size: 30px;
    padding-bottom: 8px;
  }
`;
