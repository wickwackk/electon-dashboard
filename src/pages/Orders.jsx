import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ProductContext } from "../App";
import Order from "../components/subComp/Order";
import "../styles/orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const { products, setProducts, isChanged, setIsChanged } =
    useContext(ProductContext);

  useEffect(() => {
    axios.get("http://localhost:2020/orders").then((res) => {
      setOrders(res.data);
    });
  }, []);

  // const [itemDetail, setItemDetail] = useState([])

  // (ordersorders.map()

  return (
    <div>
      <div>orders</div>
      <div>
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
    </div>
  );
}
