import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../App";
import Product from "../components/subComp/Product";
import { useProducts } from "../context/ProductContext";
import ControlPanelSvg from "../imgComp/ControlPanelSvg";
import "../styles/controlPanel.css";

export default function ControlPanel() {
  const { products, setProducts } = useProducts();
  const [newProducts, setNewProducts] = useState(
    products && products.slice(products.length - 6, products.length)
  );
  // useEffect(() => {
  //   setProducts(products.slice(products.length - 6, products.length));
  // }, []);

  // function Forloop() {
  //   for (let i = products.length - 1; i > products.length - 7; i--) {
  //     <div>
  //       <img
  //         style={{ width: "100px", height: "100px" }}
  //         src={products[i].image}
  //         alt=""
  //       />
  //       <p>{products[i].name}</p>
  //     </div>;
  //   }
  // }

  // onHide={setModalShow(false)}

  return (
    <div>
      <div className="options-name">
        <ControlPanelSvg />
        <span>control panel</span>
      </div>
      {newProducts.map((product, index) => {
        return <Product key={index} product={product} index={index} />;
      })}
    </div>
  );
}
