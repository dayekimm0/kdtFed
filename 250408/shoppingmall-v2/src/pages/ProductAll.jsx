import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProduct(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <Row className="justify-content-center">
        {productList.map((menu, index) => (
          <Col className="mb-4" key={index} xs={12} sm={6} md={4} lg={3}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
