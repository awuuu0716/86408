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
import Preload from '../../components/Preload';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #fefff8;
  padding-top: 100px;
`;

const Container = styled.div`
  position:relative;
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
    width: 85%;
    padding: 20px;
  }
  @media ${device.laptopL} {
    border-radius: 10px;
    width: 60%;
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
  width: 490px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const UploadImg = styled.input`
  cursor: pointer;
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

const Select = styled.select`
  width: 205px;
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

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function AdminMenu() {
  const [filter, setFilter] = useState('appetizer');
  const [editId, setEditId] = useState('');
  const [inputMode, setInputmode] = useState('add');
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('appetizer');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fileInput = useRef(null);
  const isSubmit = useRef(false);
  const { pathname } = useLocation();

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (isSubmit.current) return;
    setIsLoading(true);
    isSubmit.current = true;
    const img = fileInput.current.files[0];
    if (!img) {
      setErrorMessage('還沒上傳圖片喔');
      return;
    }
    setErrorMessage('');
    addProducts({ img, productName, description, price, type })
      .then((data) => {
        getProducts(type).then((data) => {
          isSubmit.current = false;
          setProducts(data);
          setIsLoading(false);
        });
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (deletedId) => {
    deleteProduct(deletedId).then((data) => {
      const { id } = data;
      setProducts(products.filter((product) => product.id !== id));
    });
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const img = fileInput.current.files[0] || null;
    editProduct({
      img,
      productName,
      description,
      price,
      editId,
    })
      .then((data) => {
        setIsLoading(false);
        getProducts(filter).then((data) => setProducts(data));
      })
      .catch((err) => console.log(err));
  };

  const handleQuitEdit = () => {
    setInputmode('add');
    setEditId('');
    setProductName('');
    setDescription('');
    setPrice('');
  };

  const addDataToEdit = (id) => {
    setInputmode('edit');
    const targetProduct = products.filter((product) => product.id === id)[0];
    const { name, price, desc } = targetProduct;
    setEditId(id);
    setProductName(name);
    setDescription(desc);
    setPrice(price);
  };

  useEffect(() => {
    getProducts(filter).then((data) => setProducts(data));
  }, [filter]);

  return (
    <Root>
      <AdminNav />

      <Form
        onSubmit={inputMode === 'add' ? handleAddProduct : handleEditProduct}
      >
        <Container id="input">
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
              <InputLabel>商品種類：</InputLabel>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="appetizer">開胃菜</option>　
                <option value="main">主菜</option>　
                <option value="dessert">點心</option>　
                <option value="beverage">飲料</option>
              </Select>
            </InputContainer>
            <InputContainer>
              <InputLabel>商品描述：</InputLabel>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>
                {inputMode === 'add' ? '上傳圖片：' : '重新上傳圖片：'}
              </InputLabel>
              <UploadImg type="file" ref={fileInput} />
            </InputContainer>
            <Preload isShow={isLoading} message="新增商品中..." />
          </ProductData>

          <Options>
            <Button>{inputMode === 'add' ? '新增品項' : '送出編輯'}</Button>
            {inputMode === 'edit' && (
              <Button onClick={handleQuitEdit}>放棄編輯</Button>
            )}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </Options>
        </Container>
      </Form>

      <OptionContainer>
        <ProductsOption onClick={() => setFilter('appetizer')}>
          開胃菜
        </ProductsOption>
        <ProductsOption onClick={() => setFilter('main')}>主菜</ProductsOption>
        <ProductsOption onClick={() => setFilter('dessert')}>
          點心
        </ProductsOption>
        <ProductsOption onClick={() => setFilter('beverage')}>
          飲品
        </ProductsOption>
      </OptionContainer>

      {products.map((product) => (
        <Container key={product.id}>
          <div>
            <ProductContainer>
              <ProductImg src={product.url} />
              <DescContainer>
                <h1>{product.name}</h1>
                <Desc>{product.type}</Desc>
                <Desc>NT$ {product.price}</Desc>
                <Desc>{product.desc}</Desc>
              </DescContainer>
            </ProductContainer>
            <Options>
              <EditButton
                to={`${pathname}#input`}
                onClick={() => addDataToEdit(product.id)}
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
