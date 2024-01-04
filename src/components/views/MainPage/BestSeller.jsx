import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation } from "swiper/modules";
import { useState, useEffect } from "react";

const BestSeller = () => {
  const [bestSellerLists, setBestSellerLists] = useState([]);

  useEffect(() => {
    fetch('src/assets/datas/bestSeller.json')
      .then(res => res.json())
      .then(result => setBestSellerLists(result));
  }, []);
  
  return (
    <div className="best-seller">
      <div className="center-container">
        <div className="row">
            <div className="best-seller__tile-wrap">
              <p className="best-seller__txt">
                <span>최근 6개월기준</span>
                <em>타이어픽 베스트셀러</em>
              </p>
              <Link className="best-seller__link" to="/">타이어 더보기</Link>
            </div>

            <Swiper 
              slidesPerView={4} 
              navigation={true} 
              modules={[Navigation]} 
              className='best-seller__swiper'
            >
              <SwiperSlide className="best-seller__swiper__item">
                a
              </SwiperSlide>
            </Swiper>

        </div>
      </div>
    </div>
  )
}

export default BestSeller