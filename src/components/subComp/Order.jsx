// import "../../styles/order.css";

import { Dropdown, DropdownButton } from "react-bootstrap";

export default function Order(props) {
  const { order, quantity } = props;

  return (
    <>
      <tbody className="tbody align-middle ">
        <tr>
          <td>#{order.orderNum}</td>
          <td>{order.date}</td>
          <td>{order.phone}</td>
          <td>{order.email}</td>
          <td>{order.address}</td>
          <td>{quantity}</td>
          <td>1000$</td>
          <td>Card</td>
          <td>
            {order.status === ""
              ? "canceled"
              : order.status
              ? `hurgegdsen`
              : `processing`}
          </td>
          <td>
            <DropdownButton
              id="dropdown-basic-button"
              title={<i className="gg-more-vertical-alt"></i>}
              key="end"
              drop="end"
              variant="secondary"
            >
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item>Delete</Dropdown.Item>
            </DropdownButton>
          </td>
        </tr>
      </tbody>
    </>
  );
}
