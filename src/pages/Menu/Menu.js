import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../constants/devices';
import menu_1 from '../../img/menu_1.webp';

const Root = styled.div`
  width: 100%;
  background: #fefff8;
  padding-top: 20px;
`;

const Container = styled.div`
  width: 80%;
  margin: 20px auto;
`;

const Title = styled.h1`
  color: #ffb03a;
  font-weight: bold;
  margin-left:20px;
`;

const Divider = styled.div`
  width: 80vw;
  border-top: 2px solid #ffb03a;
`;

const OptionContainer = styled.div`
  display: flex;
`;

const ProductsOption = styled(Link)`
  color: #333;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  font-weight: bold;
  padding: 30px 15px;
  font-size: 20px;

  &:hover {
    border-bottom: 2px solid #ffb03a;
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

const Product = styled(Link)`
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;

  background: #8ad65a;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border-radius: 5px;

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
  object-fit: cover;

  @media ${device.mobileS} {
    width: 90%;
  }
`;

const Name = styled.h4`
  color: white;
  font-size: 24px;
`;

const Description = styled.p`
  color: white;
  font-size: 18px;
`;

const Price = styled.p`
  color: #333;
  font-size: 18px;
`;

export default function Menu() {
  return (
    <Root>
      <Container>
        <Title>全部商品</Title>
        <Divider />
        <OptionContainer>
          <ProductsOption to="/menu/all">全部商品</ProductsOption>
          <ProductsOption to="/menu/appetizer">開胃菜</ProductsOption>
          <ProductsOption to="/products/main">主食</ProductsOption>
          <ProductsOption to="/products/dessert">點心</ProductsOption>
          <ProductsOption to="/products/beverage">飲品</ProductsOption>
        </OptionContainer>
        <Divider />

        <ProductContainer>
          <Product to="/products/1">
            <Img src={menu_1} alt="A product" />
            <Name>PRODUCT NAME</Name>
            <Description>DESCROPTION DESCRIPION</Description>
            <Price>NT$1000</Price>
          </Product>
          <Product>
            <Img src={menu_1} alt="A product" />
            <Name>PRODUCT NAME</Name>
            <Description>DESCROPTION DESCRIPION</Description>
            <Price>NT$1000</Price>
          </Product>
          <Product>
            <Img src={menu_1} alt="A product" />
            <Name>PRODUCT NAME</Name>
            <Description>DESCROPTION DESCRIPION</Description>
            <Price>NT$1000</Price>
          </Product>
          <Product>
            <Img src={menu_1} alt="A product" />
            <Name>PRODUCT NAME</Name>
            <Description>DESCROPTION DESCRIPION</Description>
            <Price>NT$1000</Price>
          </Product>
          <Product>
            <Img src={menu_1} alt="A product" />
            <Name>PRODUCT NAME</Name>
            <Description>DESCROPTION DESCRIPION</Description>
            <Price>NT$1000</Price>
          </Product>
        </ProductContainer>
      </Container>
    </Root>
  );
}
