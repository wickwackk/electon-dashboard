// import { useState } from "react";
// import { Button } from "react-bootstrap";
// import "../../styles/user.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";

export default function User(props) {
  const { user } = props;
  // const { removeProduct } = props;
  // const { showEditModal } = props;

  // const [modalShow, setModalShow] = useState(false);
  // const [modalContent, setModalContent] = useState("");
  // const [modalTitle, setModalTitle] = useState("");

  // const modalClose = () => {
  //   setModalShow(false);
  // };

  // function deleteProduct() {
  //   axios
  //     .delete(`http://localhost:2020/products/${product.id}`)
  //     .then((res) => removeProduct(res.data))
  //     .catch((err) => console.log(err));
  //   console.log(" delete button working");
  // }

  const direction = "end";
  return (
    <>
      <tbody className="tbody align-middle ">
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.surname}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.order}</td>
          <td>{user.date}</td>
          <td>
            <DropdownButton
              id="dropdown-basic-button"
              title={<i className="gg-more-vertical-alt"></i>}
              key="end"
              drop="end"
              variant="secondary"
            >
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item>Delete</Dropdown.Item>
            </DropdownButton>
          </td>
        </tr>
      </tbody>
    </>
  );
}
