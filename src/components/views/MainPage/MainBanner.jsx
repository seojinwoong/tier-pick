import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const MainBanner = () => {
  const paginationPC = {
    clickable: true,
    renderBullet: function (index, className) {
      const btns = ['신규회원 이벤트', '와이퍼 런칭기념', '올웨더 타이어', '브랜드별 TOP3', '리뷰 이벤트'];
      return '<span class="' + className + '">' + (btns[index]) + '</span>';
    },
  };
  return (
    <div>
      <Swiper 
        slidesPerView={1} 
        pagination={paginationPC} 
        loop={true} 
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true} 
        modules={[Autoplay, Pagination, Navigation]} 
        className='bannerSwiper'
      >
        <SwiperSlide className="bannerSwiper__inner bannerSwiper__01"><div><span className="hide">신규회원 3천원 할인 앱 설치하면 4천원 더 타이어는 역시 타이어픽</span></div> </SwiperSlide>
        <SwiperSlide className="bannerSwiper__inner bannerSwiper__02"><div><span className="hide">와이퍼 런칭기념 3,000 포인트 드려용 와이퍼 구매 시 100% 증정</span></div> </SwiperSlide>
        <SwiperSlide className="bannerSwiper__inner bannerSwiper__03"><div><span className="hide">올겨울에는? 올웨더 타이어 사계절 내내 사용해요</span></div> </SwiperSlide>
        <SwiperSlide className="bannerSwiper__inner bannerSwiper__04"><div><span className="hide">오래 탈 수 있는 타이어 브랜드별 TOP3만 모았다! 마일리지 좋은 타이어 기획전</span></div> </SwiperSlide>
        <SwiperSlide className="bannerSwiper__inner bannerSwiper__05"><div><span className="hide">구매리뷰 쓰고 14,000P 받자! 타이어픽 리뷰 이벤트</span></div> </SwiperSlide>
      </Swiper>

    </div>
  );
};
export default MainBanner;
