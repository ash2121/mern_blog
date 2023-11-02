import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from './UserContext'
export default function Header() {
  // info about the user should not be stored inside const
  // it must be in context.js
  // const [username, setUsername] = useState('');
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    })
    setUserInfo(null);
  }
  const username = userInfo?.username;
  return (
    <header>
      <Link to="/" className="logo">MyBlog</Link>
      <nav>
        {username && (<>
          <Link to='/create'>Create New Post</Link>
          <Link onClick={logout}>LogOut</Link>
        </>)}
        {!username && (<>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>)}
      </nav>
    </header>
  );
}