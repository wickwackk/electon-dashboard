// import { useState } from "react";
// import { Button } from "react-bootstrap";
import "../../styles/product.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Product(props) {
  const { product } = props;
  // const [modalShow, setModalShow] = useState(false);
  // const [modalContent, setModalContent] = useState("");
  // const [modalTitle, setModalTitle] = useState("");

  // const modalClose = () => {
  //   setModalShow(false);
  // };
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
              cssClass="e-caret-hide"
              id="dropdown-basic-button"
              title={<i class="gg-more-vertical-alt"></i>}
              key="end"
              drop="end"
              variant="secondary"
            >
              <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
            </DropdownButton>
          </td>
        </tr>
      </tbody>
    </>
  );
}
