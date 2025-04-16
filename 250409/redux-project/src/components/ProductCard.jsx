import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  cursor: pointer;
`;

const Img = styled.img`
  /* width: 300px; */
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`products/${item?.id}`);
  };

  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(item?.price);
  return (
    <Container onClick={showDetail}>
      <Img src={item && item?.img} alt="style" />
      <div>Conscious Choice</div>
      <div>{item && item?.title}</div>
      <div>{item && formattedPrice}</div>
      <div>{item && item?.new === true ? "신상품" : ""}</div>
    </Container>
  );
};

export default ProductCard;
