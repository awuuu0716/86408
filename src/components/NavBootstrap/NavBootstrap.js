import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts';
import { setAuthToken } from '../../utils';


export default function NavBootstrap() {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setAuthToken('');
    setUser(null);
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" >
      <Navbar.Brand href="/#">八六蔬食吧</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/#/menu">查看菜單</Nav.Link>
          <Nav.Link href="/#/reserve">我要訂位</Nav.Link>
          {!user && <Nav.Link href="/#/login">會員登入</Nav.Link>}
          {user && <Nav.Link href="/#/reserve/user">我的訂位</Nav.Link>}
          {user === 'admin' && (
            <Nav.Link href="/#/admin/menu">管理後台</Nav.Link>
          )}
          {user && (
            <Nav.Link href="/#" onClick={handleLogout}>
              登出
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
