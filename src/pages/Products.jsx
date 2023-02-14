import "../styles/products.css";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Product from "../components/subComp/Product";
import { CreateProduct } from "../components/subComp/CreateProduct";
import { DynamicModal } from "../components/subComp/DynamicModal";
import EditProduct from "../components/subComp/EditProduct";
import { ProductContext } from "../App";
import { useProducts } from "../context/ProductContext";

export default function Products() {
  const { products, setProducts, isChanged, setIsChanged } = useProducts();

  // const modalClose = () => {
  //   setModalShow(false);
  // };

  // const showAddModal = () => {
  //   setModalTitle(`Create Article`);
  //   setModalContent(<CreateProduct submitProduct={submitProduct} />);
  //   setModalShow(true);
  // };

  // function showEditModal(product) {
  //   setModalTitle(`Edit Product`);
  //   setModalContent(
  //     <EditProduct product={product} updateProduct={updateProduct} />
  //   );
  //   setModalShow(true);
  // }

  // function updateProduct(product) {
  //   const newProducts = products.map((curProduct) => {
  //     if (product.id !== curProduct.id) return curProduct;
  //     return product;
  //   });
  //   console.log(newProducts);
  //   setIsChanged(!isChanged);
  //   modalClose();
  // }

  // function submitProduct(product) {
  //   setProducts([...products, product]);
  //   modalClose();
  // }

  // function removeProduct(id) {
  //   const newProducts = products.filter((product) => {
  //     if (product.id !== id) return product;
  //   });
  //   setProducts(newProducts);
  //   setIsChanged(!isChanged);
  // }

  // onHide={setModalShow(false)}

  return (
    <div>
      <div>products</div>
      <Button variant="primary" className="btn">
        New product
      </Button>
      <div className="table">
        <Table>
          <thead className="thead align-middle">
            <tr>
              <th>Зураг</th>
              <th>Барааны нэр</th>
              <th>Үнэ</th>
              <th>Үлдэгдэл</th>
              <th>Хямдрал %</th>
              <th>Категори</th>
            </tr>
          </thead>
          {products.map((product, index) => {
            return <Product key={index} product={product} />;
          })}
        </Table>
      </div>
    </div>
  );
}
