import "../../styles/product.css";

export default function Product(props) {
  const { product, index } = props;
  return (
    <>
      <tbody className="tbody align-middle ">
        <tr>
          <td>
            <img src={product.image} alt={product.name} />
          </td>
          <td>{product.name}</td>
          <td>{product.price}$</td>
          <td>{product.stock}ш</td>
          <td>{product.sale}%</td>
          <td>{product.category}</td>
          <td>
            <button>
              <span>...</span>
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
}
