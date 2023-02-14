import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ProductContext } from "../App";
import { DynamicModal } from "../components/subComp/DynamicModal";
import EditOrder from "../components/subComp/EditOrder";
import Order from "../components/subComp/Order";
import "../styles/orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:2020/orders").then((res) => {
      setOrders(res.data);
    });
  }, [isChanged]);

  const modalClose = () => {
    setModalShow(false);
  };

  // const showAddModal = () => {
  //   setModalTitle(`Create Order`);
  //   setModalContent(<CreateProduct submitProduct={submitProduct} />);
  //   setModalShow(true);
  // };

  // function submitProduct(product) {
  //   setProducts([...products, product]);
  //   modalClose();
  // }

  function removeOrder(id) {
    const newOrder = orders.filter((order) => {
      if (order.id !== id) return order;
    });
    setOrders(newOrder);
    setIsChanged(!isChanged);
  }

  function showOrderEdit(order) {
    setModalTitle(`Edit Order`);
    setModalContent(<EditOrder order={order} updateOrder={updateOrder} />);
    setModalShow(true);
  }

  function updateOrder(order) {
    const newOrder = orders.map((curOrder) => {
      if (order.id !== curOrder.id) return curOrder;
      return order;
    });
    console.log(newOrder);
    setIsChanged(!isChanged);
    modalClose();
  }

  return (
    <div>
      <div>orders</div>
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
      <DynamicModal
        title={modalTitle}
        content={modalContent}
        handleClose={modalClose}
        show={modalShow}
      />
    </div>
  );
}
