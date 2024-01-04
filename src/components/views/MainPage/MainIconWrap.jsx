import { Link } from "react-router-dom"

const MainIconWrap = () => {
  return (
    <section className="favorite-nav">
      <div className="center-container">
        <div className="row">
          <ul>
            <li>
              <Link to="/">
                <span className="favorite-nav__ico-box favorite-nav__ico-box1" data-new></span>
                <span className="favorite-nav__ico-txt">와이퍼</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="favorite-nav__ico-box favorite-nav__ico-box2" ></span>
                <span className="favorite-nav__ico-txt">엔진오일</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="favorite-nav__ico-box favorite-nav__ico-box3" ></span>
                <span className="favorite-nav__ico-txt">배터리</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="favorite-nav__ico-box favorite-nav__ico-box4" ></span>
                <span className="favorite-nav__ico-txt">타이어</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="favorite-nav__ico-box favorite-nav__ico-box5" ></span>
                <span className="favorite-nav__ico-txt">세차</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="favorite-nav__ico-box favorite-nav__ico-box6" ></span>
                <span className="favorite-nav__ico-txt">매장</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="favorite-nav__ico-box favorite-nav__ico-box7" ></span>
                <span className="favorite-nav__ico-txt">최신리뷰</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="favorite-nav__ico-box favorite-nav__ico-box8" ></span>
                <span className="favorite-nav__ico-txt">특가/혜택</span>
              </Link>
            </li>
            <li data-specified>
              <Link to="/">
                <span className="favorite-nav__ico-box favorite-nav__ico-box9" ></span>
                <span className="favorite-nav__ico-txt">휠 복원</span>
              </Link>
              <span className="only-mobile"></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MainIconWrap
