import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Modal, Table, Form } from "react-bootstrap";
import { ProductContext } from "../App";
import User from "../components/subComp/User";
import "../styles/users.css";
import { useUsers } from "../context/UsersContext";

export default function Users() {
  const { users, isChanged, setIsChanged } = useUsers();
  const [modalShow, setModalShow] = useState(false);

  function submitHandler(e) {
    const newUser = {
      username: e.target.username.value,
      name: e.target.name.value,
      surname: e.target.surname.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address1: e.target.address1.value,
      address2: e.target.address2.value,
      password: e.target.password.value,
    };

    const userForm = new FormData();
    userForm.append("file", e.target.image.files[0]);
    userForm.append("details", JSON.stringify(newUser));

    axios
      .post(`http://localhost:2040/user`, userForm)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    setIsChanged(!isChanged);
    console.log("request success from front end");
  }

  return (
    <div>
      <div>users</div>
      <Button
        variant="primary"
        className="btn"
        onClick={() => {
          setModalShow(true);
        }}
      >
        Add user
      </Button>
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
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              submitHandler(e);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="User name"
              />
            </Form.Group>
            <Form.Group className="d-flex justify-content-between gap-4 mb-3">
              <div className="w-50">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Name" />
              </div>
              <div className="w-50">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  name="surname"
                  // defaultValue={product.price}
                  // onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  placeholder="Surname"
                />
              </div>
            </Form.Group>

            <Form.Group className="d-flex justify-content-between gap-4 mb-3">
              <div className="w-50">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Email" />
              </div>
              <div className="w-50">
                <Form.Label>Phone</Form.Label>
                <Form.Control name="phone" type="number" placeholder="Phone" />
              </div>
            </Form.Group>
            <Form.Group className="d-flex justify-content-between gap-4 mb-3">
              <div className="w-50">
                <Form.Label>Address 1</Form.Label>
                <Form.Control
                  name="address1"
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div className="w-50">
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  name="address2"
                  type="text"
                  placeholder="Address"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="w-100">Image:</Form.Label>
              <input name="image" type="file" placeholder="Image File" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                // defaultValue={product.description}
                // onChange={(e) => setDescription(e.target.value)}
                type="password"
                placeholder="Password"
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
