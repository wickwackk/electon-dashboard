import axios from "axios";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";

import Order from "../components/subComp/Order";
import "../styles/orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [category, setCategory] = useState();

  const [isChanged, setIsChanged] = useState(false);
  const [orderNum, setOrderNum] = useState();

  useEffect(() => {
    axios.get("http://localhost:2020/orders").then((res) => {
      setOrders(res.data);
    });
  }, [isChanged]);

  // const showAddModal = () => {
  //   setModalTitle(`Create Order`);
  //   setModalContent(<CreateProduct submitProduct={submitProduct} />);
  //   setModalShow(true);
  // };

  // function submitProduct(product) {
  //   setProducts([...products, product]);
  //   modalClose();
  // }

  // function removeOrder(id) {
  //   const newOrder = orders.filter((order) => {
  //     if (order.id !== id) return order;
  //   });
  //   setOrders(newOrder);
  //   setIsChanged(!isChanged);
  // }

  // function showOrderEdit(order) {
  //   setModalTitle(`Edit Order`);
  //   setModalContent();
  //   setModalShow(true);
  // }

  // function updateOrder(order) {
  //   const newOrder = orders.map((curOrder) => {
  //     if (order.id !== curOrder.id) return curOrder;
  //     return order;
  //   });
  //   console.log(newOrder);
  //   setIsChanged(!isChanged);
  // }

  function submitHandler(e) {
    const newOrder = {
      orderNum,
      date: e.target.date.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      address: e.target.address.value,
      itemDetail: [{ itemID: "abc", quantity: 2 }],
      payment: e.target.payment.value,
      status: e.target.status.value,
    };

    axios
      .post(`http://localhost:2020/orders`, newOrder)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    setIsChanged(!isChanged);
    setModalShow(false);
  }
  return (
    <div>
      <div>orders</div>
      <Button
        variant="primary"
        className="btn"
        onClick={() => setModalShow(true)}
      >
        Add order
      </Button>
      <div className="table">
        <Table>
          <thead>
            <tr>
              <th>Захиалга No</th>
              <th>Огноо</th>
              <th>Утас</th>
              <th>И-мейл</th>
              <th>Хаяг</th>
              <th>Тоо</th>
              <th>Нийт дүн ₮</th>
              <th>Төлбөр</th>
              <th>Статус</th>
              <th>
                <button>...</button>
              </th>
            </tr>
          </thead>
          {orders &&
            orders.map((order, index) => {
              let arr = [];
              order.itemDetail.map((item) => {
                arr.push(item.quantity);
              });
              let quantity = arr.reduce((x, y) => x + y);
              return (
                <Order
                  key={index}
                  order={order}
                  index={index}
                  quantity={quantity}
                />
              );
            })}
        </Table>
      </div>
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              submitHandler(e);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Огноо</Form.Label>
              <Form.Control
                name="date"
                // defaultValue={product.image}
                // onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="Order date"
              />
            </Form.Group>
            <Form.Group className="d-flex justify-content-between gap-4">
              <div className="w-50">
                <Form.Label>Утас</Form.Label>
                <Form.Control
                  name="phone"
                  // defaultValue={product.name}
                  // onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="User phone"
                />
              </div>
              <div className="w-50">
                <Form.Label>И-мейл</Form.Label>
                <Form.Control
                  name="email"
                  // defaultValue={product.price}
                  // onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  placeholder="User email"
                />
              </div>
            </Form.Group>

            <Form.Group className="d-flex justify-content-between gap-4">
              <div className="w-50">
                <Form.Label>Хаяг</Form.Label>
                <Form.Control
                  name="address"
                  // defaultValue={product.stock}
                  // onChange={(e) => setStock(e.target.value)}
                  type="text"
                  placeholder="Order address"
                />
              </div>
              <div className="w-50">
                <Form.Label>Тоо</Form.Label>
                <Form.Control
                  name="quantity"
                  // defaultValue={product.sale}
                  // onChange={(e) => setSale(e.target.value)}
                  type="text"
                  placeholder="Product quantity"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Нийт дүн ₮</Form.Label>
              <Form.Control
                name="price"
                // defaultValue={product.spec}
                // onChange={(e) => setSpec(e.target.value)}
                type="text"
                placeholder="Total price"
              />
              <Form.Label>Төлбөр</Form.Label>
              <Form.Control
                name="payment"
                // defaultValue={product.description}
                // onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Order payment"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Статус</Form.Label>
              <Form.Control
                name="status"
                // defaultValue={product.spec}
                // onChange={(e) => setSpec(e.target.value)}
                type="text"
                placeholder="Order status"
              />
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
