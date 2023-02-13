// import "../../styles/order.css";

export default function Order(props) {
  const { order, index, quantity } = props;
  return (
    <>
      <tbody>
        <tr>
          <td>{order.orderNum}</td>
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
        </tr>
      </tbody>
    </>
  );
}
