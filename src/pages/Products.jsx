import "../styles/products.css";
import { Button, Form, Modal, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/subComp/Product";

import { useProducts } from "../context/ProductContext";
import AddCategory from "../components/subComp/AddCategory";

export default function Products() {
  const { products, isChanged, setIsChanged } = useProducts();
  const [modalShow, setModalShow] = useState(false);
  const [cateModalShow, setCateModalShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    axios.get(`http://localhost:2020/products`).then((res) => {
      let test = res.data.forEach((product) => {
        if (!categories.includes(product.category)) {
          return product.category;
        }
      });
      test = [...new Set(test)];

      setCategories(test);
    });
  });

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

  function submitHandler(e) {
    const newProduct = {
      description: e.target.description.value,
      // spec: e.target.spec.value,
      name: e.target.name.value,
      // image: e.target.image.value,
      price: Number(e.target.price.value),
      stock: Number(e.target.stock.value),
      sale: e.target.sale.value,
      // category,
    };

    const productForm = new FormData();
    productForm.append("file", e.target.image.files[0]);
    productForm.append("details", JSON.stringify(newProduct));

    axios
      .post(`http://localhost:2040/product`, productForm)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    setIsChanged(!isChanged);
    // setModalShow(false);
  }

  function cateModalHandler() {
    setCateModalShow(true);
    console.log("cate button working");
  }

  return (
    <div>
      <div>products</div>
      <Button
        variant="primary"
        className="btn"
        onClick={() => setModalShow(true)}
      >
        Add product
      </Button>
      <Button
        variant="primary"
        className="btn"
        onClick={() => {
          cateModalHandler();
        }}
      >
        Add category
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
            return (
              <Product key={index} product={product} spec={product.spec} />
            );
          })}
        </Table>
      </div>
      <AddCategory
        cateModalShow={cateModalShow}
        setCateModalShow={setCateModalShow}
      />
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              submitHandler(e);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label className="imageLabel">Image URL</Form.Label>
              {/* <Form.Control
                name="image"
                // defaultValue={product.image}
                // onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="Image URL"
              /> */}
              <input type="file" name="image" />
              {/* <input type="file" />
              <input type="file" />
              <input type="file" /> */}
            </Form.Group>
            <Form.Group className="d-flex justify-content-between gap-4">
              <div className="w-50">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  // defaultValue={product.name}
                  // onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Product name"
                />
              </div>
              <div className="w-50">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  name="price"
                  // defaultValue={product.price}
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
                  // defaultValue={product.stock}
                  // onChange={(e) => setStock(e.target.value)}
                  type="text"
                  placeholder="Product stock"
                />
              </div>
              <div className="w-50">
                <Form.Label>Sale</Form.Label>
                <Form.Control
                  name="sale"
                  // defaultValue={product.sale}
                  // onChange={(e) => setSale(e.target.value)}
                  type="text"
                  placeholder="Product sale"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              {/* <Form.Label>Spec</Form.Label>
              <Form.Control
                name="spec"
                // defaultValue={product.spec}
                // onChange={(e) => setSpec(e.target.value)}
                type="text"
                placeholder="Product spec"
              /> */}
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                // defaultValue={product.description}
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
    </div>
  );
}
