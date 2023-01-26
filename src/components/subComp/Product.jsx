import "../../styles/product.css";

export default function Product(prop) {
  const { data, index } = prop;
  return (
    <>
      <tbody className="tbody align-middle ">
        <tr>
          <td>
            <img src={data.image} alt="" />
          </td>
          <td>{data.name}</td>
          <td>{data.price}$</td>
          <td>{data.stock}ш</td>
          <td>{data.sale}%</td>
          <td>{data.category}</td>
          <td>
            <button>...</button>
          </td>
        </tr>
      </tbody>
    </>
  );
}
