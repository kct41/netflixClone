/** @format */

import header from "./Header.module.css";
function Header() {
  return (
    <div>
      <div className={header.nav}>
        <div className={header.container}>
          <h1 className={header.logo}>
            <a href='#a'>NETFLIX</a>
          </h1>
          <ul className={header.main_menu}>
            <li>
              <a href='#a'>홈</a>
            </li>
            <li>
              <a href='#a'>시리즈</a>
            </li>
            <li>
              <a href='#a'>영화</a>
            </li>
            <li>
              <a href='#a'>NEW! 요즘 대세 콘텐츠</a>
            </li>
            <li>
              <a href='#a'>내가 찜한 콘텐츠</a>
            </li>
          </ul>
        </div>
        <ul className={header.icons}>
          <li>
            <a href='#a'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </a>
          </li>
          <li>
            <a href='#a'>
              <i className='fa-solid fa-bell'></i>
            </a>
          </li>
          <li>
            <a href='#a'>
              <i className='fa-solid fa-user-large'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
