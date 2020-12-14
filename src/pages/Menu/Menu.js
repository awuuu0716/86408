import { React, useEffect, useState } from 'react';
import Preload from '../../components/Preload';
import styled from 'styled-components';
import { device } from '../../constants/devices';
import { getProducts } from '../../WebAPI';
import bg from '../../img/bg.webp';

const Root = styled.div`
  width: 100%;
  background: url(${bg}) center/cover;
  background-attachment: fixed;
  padding-top: 20px;
`;

const Container = styled.div`
  width: 80%;
  min-height: 100vh;
  margin: 20px auto;
  margin-bottom: 0;
`;

const OptionContainer = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
`;

const ProductsOption = styled.div`
  color: #4b731f;
  border-bottom: 5px solid transparent;
  font-weight: bold;
  padding: 30px 15px;
  font-size: 32px;
  cursor: pointer;

  &:hover {
    border-bottom: 5px solid #ffb03a;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  width: 80vw;
  flex-wrap: wrap;

  @media ${device.mobileS} {
    width: 81vw;
    margin-top: 20px;
  }
`;

const Product = styled.div`
  display: flex;
  height: fit-content;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  animation: fade-in 0.6s linear;

  &:hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 3px #ccc;
  }

  @media ${device.mobileS} {
    width: 97%;
    margin: 20px 0;
  }

  @media ${device.laptop} {
    width: 45%;
    margin: 20px 20px;
  }

  @media ${device.laptopL} {
    width: 545px;
    margin: 20px 15px;
  }

  @media ${device.desktop} {
    width: 480px;
    margin: 20px 15px;
  }
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;

  @media ${device.mobileS} {
    width: 90%;
  }
`;

const Name = styled.h4`
  color: #74bb34;
  font-size: 30px;
  margin-bottom: 0;
`;

const Description = styled.p`
  color: #4c7923;
  font-size: 24px;
`;

const Price = styled.p`
  color: #74bb34;
  font-size: 20px;
`;

export default function Menu() {
  const [filter, setFilter] = useState('appetizer');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts(filter).then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, [filter]);

  return (
    <Root>
      <Container>
        <OptionContainer>
          <ProductsOption onClick={() => setFilter('appetizer')}>
            開胃菜
          </ProductsOption>
          <ProductsOption onClick={() => setFilter('main')}>
            主食
          </ProductsOption>
          <ProductsOption onClick={() => setFilter('dessert')}>
            點心
          </ProductsOption>
          <ProductsOption onClick={() => setFilter('beverage')}>
            飲品
          </ProductsOption>
        </OptionContainer>
        <Preload isShow={isLoading} message="菜單載入中..." />
        <ProductContainer>
          {products.map((product) => (
            <Product key={product.id}>
              <Img src={product.url} alt="A product" />
              <Name>{product.name}</Name>
              <Description>{product.desc}</Description>
              <Price>NT${product.price}</Price>
            </Product>
          ))}
        </ProductContainer>
      </Container>
    </Root>
  );
}
