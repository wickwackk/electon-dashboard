import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { nanoid } from "nanoid";

export default function EditProduct({ product, updateProduct }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(product.category);
  const [id, setId] = useState(product.id);

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

  function submitHandler(e) {
    // console.log(e.target.sale.value);
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
        updateProduct(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
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
        <Form.Control
          name="spec"
          defaultValue={product.spec}
          // onChange={(e) => setSpec(e.target.value)}
          type="text"
          placeholder="Product spec"
        />
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
  );
}
