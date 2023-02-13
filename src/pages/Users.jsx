import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ProductContext } from "../App";
import User from "../components/subComp/User";
import "../styles/users.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  useContext(ProductContext);
  useEffect(() => {
    axios.get("http://localhost:2020/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <div>users</div>
      <div>
        <Table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Овог</th>
              <th>Нэр</th>
              <th>И-мейл хаяг</th>
              <th>Утас</th>
              <th>Захиалга</th>
              <th>Огноо</th>
              <th>
                <button>...</button>
              </th>
            </tr>
          </thead>
          {users.map((user, index) => {
            return (
              <User
                key={index}
                user={user}
                // removeProduct={removeProduct}
                // index={index}
                // showEditModal={showEditModal}
              />
            );
          })}
        </Table>
      </div>
    </div>
  );
}
