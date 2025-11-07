import { NavLink } from 'react-router-dom';

const linkStyle = {
  marginRight: '20px',
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'normal',
};

const activeLinkStyle = {
  fontWeight: 'bold',
  textDecoration: 'underline',
  color: 'blue',
  marginRight: '20px',
};

export const Header = () => {
  return (
    <nav style={{ padding: '16px', backgroundColor: '#eee' }}>
      <NavLink
        to="/JSX"
        style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        JSX
      </NavLink>
      <NavLink
        to="/useEffect"
        style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        useEffect
      </NavLink>
      <NavLink
        to="/useState"
        style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        useState
      </NavLink>
      <NavLink
        to="/renderList"
        style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        Render List
      </NavLink>
      <NavLink
        to="/useNavigate"
        style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        useNavigate
      </NavLink>
      <NavLink
        to="/useParams"
        style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        useParams
      </NavLink>
      <NavLink
        to="/useSearchParams"
        style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        useSearchParams
      </NavLink>
    </nav>
  );
};
