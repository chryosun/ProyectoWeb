import { Link } from 'react-router-dom';

import './header.css';
import menues from './menu.json';

const Header = () => {
  const renderSubmenu = (submenus) => (
    <ul>
      {submenus.map((submenu) => (
        <li key={submenu.id}>
          <Link to={submenu.link}>{submenu.label}</Link>
        </li>
      ))}
    </ul>
  );

  const renderMenu = (menu) => (
    <li key={menu.id}>
      <Link to={menu.link}>{menu.label}</Link>
      {menu.submenus && renderSubmenu(menu.submenus)}
    </li>
  );

  const menusUx = menues.map(renderMenu);

  return (
    <header>
      <img src="https://sisters.staging.neboagency.com/files/images/som_logo_lores2012.jpg" alt="" />
      <nav>
        <ul>{menusUx}</ul>
      </nav>
    </header>
  );
};

export default Header;
