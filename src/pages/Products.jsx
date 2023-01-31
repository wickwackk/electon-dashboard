import "../styles/products.css";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/subComp/Product";
import { CreateProduct } from "../components/subComp/CreateProduct";
import { DynamicModal } from "../components/subComp/DynamicModal";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const modalClose = () => {
    setModalShow(false);
  };
  useEffect(() => {
    axios
      .get("http://localhost:2020/products")
      .then((res) => setProducts(res.data));
  }, []);

  const showAddModal = () => {
    setModalTitle(`Create Article`);
    setModalContent(<CreateProduct submitProduct={submitProduct} />);
    setModalShow(true);
  };
  function submitProduct(product) {
    setProducts([...products, product]);
    modalClose();
  }

  // function removeArticle(id) {
  //   const newArticles = articles.filter((article) => {
  //     if (article.id !== id) return article;
  //   });
  //   setArticles(newArticles);
  // }

  // function submitArticle(article) {
  //   setArticles([...articles, article]);
  //   modalClose();
  // }

  // function updateArticle(article) {
  //   const newArticles = articles.map((curArticle) => {
  //     if (article.id !== curArticle.id) return curArticle;
  //     return article;
  //   });
  //   console.log(newArticles);
  //   setArticles(newArticles);
  //   modalClose();
  // }

  // function showEditModal(article) {
  //   setModalTitle(`Edit Article`);
  //   setModalContent(
  //     <EditArticle article={article} updateArticle={updateArticle} />
  //   );
  //   setModalShow(true);
  // }

  return (
    <div>
      <div>products</div>
      <Button onClick={showAddModal} variant="primary" className="btn">
        New product
      </Button>
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
            </tr>
          </thead>
          {products.map((product, index) => {
            return <Product key={index} product={product} index={index} />;
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
