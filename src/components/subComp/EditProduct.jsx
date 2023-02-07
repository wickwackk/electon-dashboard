import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { nanoid } from "nanoid";

export default function EditProduct({ product, updateProduct }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(product.category);
  const [spec, setSpec] = useState(product.spec);
  const [description, setDescription] = useState(product.description);
  const [image, setImage] = useState(product.image);
  const [price, setPrice] = useState(product.price);
  const [name, setName] = useState(product.name);
  const [stock, setStock] = useState(product.stock);
  const [id, setId] = useState(product.id);
  const [sale, setSale] = useState(product.sale);

  useEffect(() => {
    axios.get(`http://localhost:2020/products`).then((res) => {
      let test = res.data.map((product) => {
        if (!categories.includes(product.category)) {
          return product.category;
        }
      });
      test = [...new Set(test)];
      // console.log(test);
      setCategories(test);
    });
  }, []);

  function submitHandler() {
    const editedProduct = {
      description,
      spec,
      name,
      id,
      image,
      price,
      stock,
      sale,
      category,
    };
    console.log(editedProduct);
    axios
      .patch(`http://localhost:2020/products/${product.id}`, editedProduct)
      .then((res) => {
        updateProduct(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler();
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="Image URL"
        />
      </Form.Group>
      <Form.Group className="d-flex justify-content-between gap-4">
        <div className="w-50">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Product name"
          />
        </div>
        <div className="w-50">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Product price"
          />
        </div>
      </Form.Group>

      <Form.Group className="d-flex justify-content-between gap-4">
        <div className="w-50">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            type="text"
            placeholder="Product stock"
          />
        </div>
        <div className="w-50">
          <Form.Label>Sale</Form.Label>
          <Form.Control
            value={sale}
            onChange={(e) => setSale(e.target.value)}
            type="text"
            placeholder="Product sale"
          />
        </div>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Spec</Form.Label>
        <Form.Control
          value={spec}
          onChange={(e) => setSpec(e.target.value)}
          type="text"
          placeholder="Product spec"
        />
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Product description"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Categories</Form.Label>
        <Form.Select
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
  );
}
