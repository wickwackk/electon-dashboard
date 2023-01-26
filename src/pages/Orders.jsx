import { Table } from "react-bootstrap";
import "../styles/orders.css";

export default function Orders() {
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
          {/* {datas &&
            datas.map((data, index) => {
              return <Product key={index} data={data} index={index} />;
            })} */}
        </Table>
      </div>
    </div>
  );
}
