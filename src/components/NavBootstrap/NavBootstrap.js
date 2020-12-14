import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
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
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand to="/" as={Link}>
        八六蔬食吧
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/menu" as={Link}>
            查看菜單
          </Nav.Link>
          <Nav.Link to="/reserve" as={Link}>
            我要訂位
          </Nav.Link>
          {!user && (
            <Nav.Link to="/login" as={Link}>
              會員登入
            </Nav.Link>
          )}
          {user && (
            <Nav.Link to="/reserve/user" as={Link}>
              我的訂位
            </Nav.Link>
          )}
          {user === 'admin' && (
            <Nav.Link to="/admin/menu" as={Link}>
              管理後台
            </Nav.Link>
          )}
          {user && (
            <Nav.Link to="/" onClick={handleLogout} as={Link}>
              登出
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
