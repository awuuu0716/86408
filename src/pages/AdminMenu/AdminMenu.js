import { React, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../../constants/devices';
import { useLocation } from 'react-router-dom';
import {
  addProducts,
  getProducts,
  deleteProduct,
  editProduct,
} from '../../WebAPI';
import AdminNav from '../../components/AdminNav';
import { HashLink } from 'react-router-hash-link';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #fefff8;
  padding-top: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  background: white;
  color: #333;
  box-shadow: 3px 3px 4px #ccc;

  @media ${device.mobileS} {
    border-radius: 0;
    padding: 0;
    width: 100%;
  }

  @media ${device.laptop} {
    border-radius: 10px;
    width: 1200px;
    padding: 20px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

const InputLabel = styled.label`
  font-weight: bold;
  font-size: 24px;
`;

const Input = styled.input`
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  height: 50px;
  font-weight: bold;
  background: white;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 3px #ccc;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #eee;
  }

  @media ${device.mobileS} {
    width: 80px;
    font-size: 16px;
  }

  @media ${device.tablet} {
    width: 160px;
    font-size: 24px;
  }
`;

const EditButton = styled(HashLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-weight: bold;
  background: white;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 3px #ccc;
  color: #333;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #eee;
  }

  @media ${device.mobileS} {
    width: 80px;
    font-size: 16px;
  }

  @media ${device.tablet} {
    width: 160px;
    font-size: 24px;
  }
`;

const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadImg = styled.input`
  cursor: pointer;
`;

const Topcontainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProductContainer = styled.div`
  display: flex;
`;

const ProductImg = styled.img`
  width: 300px;
  height: 300px;
  margin-right: 20px;
  object-fit: cover;
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h1 {
    color: #74bb34;
  }
`;

const Desc = styled.div`
  font-size: 24px;
  margin-bottom: 24px;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-top: 30px;
`;

const ErrorMessage = styled.span`
  margin-left: 20px;
  color: red;
`;

export default function AdminMenu() {
  const [inputMode, setInputmode] = useState('add');
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInput = useRef(null);
  const { pathname } = useLocation();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const img = fileInput.current.files[0];
    if (!img) {
      setErrorMessage('還沒上傳圖片喔');
      return;
    }
    setErrorMessage('');
    addProducts({ img, productName, description, price })
      .then((data) => {
        console.log(data);
        getProducts().then((data) => setProducts(data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const handleDelete = (deletedId) => {
    deleteProduct(deletedId).then((data) => {
      const { id } = data;
      setProducts(products.filter((product) => product.id !== id));
    });
  };

  const handleEditProduct = (id, preImgUrl) => {
    const img = fileInput.current.files[0];
    editProduct({
      img,
      productName,
      description,
      price,
      preImgUrl,
      id,
    })
      .then((data) => {
        console.log(data);
        getProducts().then((data) => setProducts(data));
      })
      .catch((err) => console.log(err));
  };

  const handleQuitEdit = () => {
    fileInput.current = null;
    setInputmode('add');
    setProductName('');
    setDescription('');
    setPrice('');
  };

  const addDataToInput = (id) => {
    setInputmode('edit');
    const targetProduct = products.filter((product) => product.id === id)[0];
    console.log(targetProduct);
    const { name, price, desc } = targetProduct;
    setProductName(name);
    setDescription(desc);
    setPrice(price);
  };

  return (
    <Root>
      <AdminNav />

      <form
        onSubmit={inputMode === 'add' ? handleAddProduct : handleEditProduct}
      >
        <Container>
          <Topcontainer>
            <ProductData>
              <InputContainer>
                <InputLabel>商品名稱：</InputLabel>
                <Input
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </InputContainer>
              <InputContainer>
                <InputLabel>商品價錢：</InputLabel>
                <Input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </InputContainer>
              <InputContainer>
                <InputLabel>商品描述：</InputLabel>
                <Input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </InputContainer>
            </ProductData>
            <InputContainer>
              <InputLabel>
                {inputMode === 'add' ? '上傳圖片：' : '重新上傳圖片：'}
              </InputLabel>
              <UploadImg type="file" ref={fileInput} />
            </InputContainer>
          </Topcontainer>
          <Options>
            <Button>{inputMode === 'add' ? '新增品項' : '送出編輯'}</Button>
            {inputMode === 'edit' && (
              <Button onClick={handleQuitEdit}>放棄編輯</Button>
            )}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </Options>
        </Container>
      </form>

      {products.map((product) => (
        <Container key={product.id}>
          <div>
            <ProductContainer>
              <ProductImg src={product.url} />
              <DescContainer>
                <h1>{product.name}</h1>
                <Desc>NT$ {product.price}</Desc>
                <Desc>{product.desc}</Desc>
              </DescContainer>
            </ProductContainer>
            <Options>
              <EditButton
                to={`${pathname}#header`}
                onClick={() => addDataToInput(product.id)}
              >
                編輯
              </EditButton>
              <Button onClick={() => handleDelete(product.id)}>刪除</Button>
            </Options>
          </div>
        </Container>
      ))}
    </Root>
  );
}
