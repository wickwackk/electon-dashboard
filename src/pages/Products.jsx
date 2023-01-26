import "../styles/products.css";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/subComp/Product";

export default function Products() {
  const [datas, setData] = useState();
  useEffect(() => {
    axios.get("http://localhost:2020/datas").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <div>products</div>
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
              <th>
                <button>...</button>
              </th>
            </tr>
          </thead>
          {datas &&
            datas.map((data, index) => {
              return <Product key={index} data={data} index={index} />;
            })}
        </Table>
      </div>
    </div>
  );
}
