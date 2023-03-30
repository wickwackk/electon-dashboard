// import { useState } from "react";
// import { Button } from "react-bootstrap";
import "../../styles/product.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";

export default function Product(props) {
  const { isChanged, setIsChanged } = useProducts();
  const { product, spec } = props;
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(product.category);
  const [id, setId] = useState(product.id);
  const [modalShow, setModalShow] = useState(false);
  const [specArr, setSpecArr] = useState([]);

  // useEffect(() => {
  //   axios.get(`http://localhost:2020/products`).then((res) => {
  //     let test = res.data.map((product) => {
  //       if (!categories.includes(product.category)) {
  //         return product.category;
  //       }
  //     });
  //     test = [...new Set(test)];

  //     setCategories(test);
  //   });
  // }, []);

  function submitHandler(e) {
    const editedProduct = {
      description: e.target.description.value,
      spec: e.target.spec.value,
      name: e.target.name.value,
      id,
      image: e.target.image.value,
      price: e.target.price.value,
      stock: e.target.stock.value,
      sale: e.target.sale.value,
      category,
    };

    axios
      .patch(`http://localhost:2020/products/${product.id}`, editedProduct)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    setIsChanged(!isChanged);
    setModalShow(false);
  }

  function deleteProduct() {
    axios
      .delete(`http://localhost:2020/products/${product.id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setIsChanged(!isChanged);
  }

  // spec.map((singleSpec) => {
  //   console.log(singleSpec);
  // });

  return (
    <>
      <tbody className="tbody align-middle">
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
              title={<i className="gg-more-vertical"></i>}
              key="end"
              drop="end"
              variant="secondary"
            >
              <Dropdown.Item onClick={() => setModalShow(true)}>
                Edit
              </Dropdown.Item>
              <Dropdown.Item onClick={deleteProduct}>Delete</Dropdown.Item>
            </DropdownButton>
          </td>
          <Modal show={modalShow} onHide={() => setModalShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Edit product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitHandler(e);
                }}
              >
                <Form.Group className="mb-3">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    name="image"
                    defaultValue={product.image}
                    // onChange={(e) => setImage(e.target.value)}
                    type="text"
                    placeholder="Image URL"
                  />
                </Form.Group>
                <Form.Group className="d-flex justify-content-between gap-4">
                  <div className="w-50">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      name="name"
                      defaultValue={product.name}
                      // onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Product name"
                    />
                  </div>
                  <div className="w-50">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      name="price"
                      defaultValue={product.price}
                      // onChange={(e) => setPrice(e.target.value)}
                      type="text"
                      placeholder="Product price"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="d-flex justify-content-between gap-4">
                  <div className="w-50">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control
                      name="stock"
                      defaultValue={product.stock}
                      // onChange={(e) => setStock(e.target.value)}
                      type="text"
                      placeholder="Product stock"
                    />
                  </div>
                  <div className="w-50">
                    <Form.Label>Sale</Form.Label>
                    <Form.Control
                      name="sale"
                      defaultValue={product.sale}
                      // onChange={(e) => setSale(e.target.value)}
                      type="text"
                      placeholder="Product sale"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Spec</Form.Label>
                  {spec.map((singleSpec, index) => {
                    // setSpecArr(...specArr, singleSpec);
                    return (
                      <div key={index}>
                        <input defaultValue={Object.keys(singleSpec)} />
                        <input
                          type="text"
                          defaultValue={Object.values(singleSpec)}
                        />
                      </div>
                    );
                  })}
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    name="description"
                    defaultValue={product.description}
                    // onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="Product description"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Categories</Form.Label>
                  <Form.Select
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    aria-label="Default select example"
                  >
                    <option hidden value={""}>
                      Open this select menu
                    </option>
                    {categories.map((category, index) => {
                      return (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </tr>
      </tbody>
    </>
  );
}
