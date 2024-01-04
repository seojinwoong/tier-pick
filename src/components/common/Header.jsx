import { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; 

const WEB_WIDTH = 1024;

const Header = () => {
  const megamenuRef = useRef(null);

  const handleShowMegaMenu = () => {
    if (window.innerWidth <= WEB_WIDTH) megamenuRef.current.style.display = 'block';
  }
  const handleHideMegaMenu = () => {
    megamenuRef.current.style.display = 'none';
  }
  const handleHeaderResize = () => {
    if (window.innerWidth > WEB_WIDTH) handleHideMegaMenu()
  }

  useEffect(() => {
    window.addEventListener('resize', handleHeaderResize);
    return () => {
      window.removeEventListener('resize', handleHeaderResize);
    }
  }, []);
  
  return (
    <header className='header'>
      <h1 className='logo'>
        <Link to='/'>
          <img src='/assets/images/h1_logo.png' alt='타이어픽' />
        </Link>
      </h1>
      <div className='header__nav'>
        <h2 className='hide'>검색</h2>
        <div className='search'>
          <input
            type='search'
            placeholder='차량번호 / 상품명 / 사이즈 검색'
            title='검색어 입력'
          />
          <button aria-label='검색' className='search__button'></button>
        </div>
        <h2 className='hide'>메뉴</h2>
        <nav className='gnb'>
          <ul>
            <li>
              <Link to='/'>타이어</Link>
            </li>
            <li>
              <Link to='/'>배터리</Link>
            </li>
            <li>
              <Link to='/'>이벤트</Link>
            </li>
            <li>
              <Link to='/'>고객센터</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='spot-menu'>
        <nav>
          <ul>
            <li className='hidden'>
              <Link to='/'>이용안내</Link>
            </li>
            <li className='spot-menu__cart'>
              <Link to='/' onClick={handleShowMegaMenu}>
                <span>장바구니</span>
              </Link>
            </li>
            <li className='hidden'>
              <Link to='/'>마이페이지</Link>
            </li>
            <li aria-hidden='true'>
              <button className="hide">전체메뉴</button>
            </li>
            <li className='hidden'>
              <Link to='/'>로그인</Link>
            </li>
          </ul>
        </nav>
      </div>

      <aside className='megamenu' ref={megamenuRef}>
        <nav>
          <ul>
            <li data-last><Link to="/">로그인</Link></li>
            <li className="bold"><Link to="/">타이어</Link></li>
            <li className="bold"><Link to="/">배터리</Link></li>
            <li className="bold"><Link to="/">이벤트</Link></li>
            <li className="bold" data-last><Link to="/">고객센터</Link></li>
            <li><Link to="/">마이페이지</Link></li>
            <li><Link to="/">장바구니</Link></li>
            <li><Link to="/">장착점 제휴신청</Link></li>
            <li data-last><Link to="/">이용안내</Link></li>
          </ul>
        </nav>
        <div className="app">
          <div className="app__txt">
            타이어픽 앱 설치하면 <span className="txt-purple">세차가 100원!</span>
          </div>
          <Link to="/"><img src="/assets/img/btn_ios.png" alt="앱 스토어" /></Link>
          <Link to="/"><img src="/assets/img/btn_googleplay.png" alt="구글 플레이" /></Link>
        </div>
        <button className="btn-close" onClick={handleHideMegaMenu}>닫기</button>
      </aside>

    </header>
  );
};

export default Header;
