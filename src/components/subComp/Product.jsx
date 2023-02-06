// import { useState } from "react";
// import { Button } from "react-bootstrap";
import "../../styles/product.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";

export default function Product(props) {
  const { product } = props;
  const { removeProduct } = props;

  // const [modalShow, setModalShow] = useState(false);
  // const [modalContent, setModalContent] = useState("");
  // const [modalTitle, setModalTitle] = useState("");

  // const modalClose = () => {
  //   setModalShow(false);
  // };

  function deleteProduct() {
    axios
      .delete(`http://localhost:2020/products/${product.id}`)
      .then((res) => removeProduct(res.data))
      .catch((err) => console.log(err));
    console.log(" delete button working");
  }

  const direction = "end";
  return (
    <>
      <tbody className="tbody align-middle ">
        <tr>
          <td>
            <img src={product.image} alt={product.name} />
          </td>
          <td>{product.name}</td>
          <td>{product.price}$</td>
          <td>{product.stock}ш</td>
          <td>{product.sale}%</td>
          <td>{product.category}</td>
          <td>
            <DropdownButton
              id="dropdown-basic-button"
              title={<i className="gg-more-vertical-alt"></i>}
              key="end"
              drop="end"
              variant="secondary"
            >
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item onClick={deleteProduct}>Delete</Dropdown.Item>
            </DropdownButton>
          </td>
        </tr>
      </tbody>
    </>
  );
}
