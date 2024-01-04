const MyCarRegisterBar = () => {
  return (
    <section className="mycar-register">
      <div className='center-container'>
        <div className="row"> 
          <p className="mycar-register__text">
            <i className="mycar-register__ico"></i>
            <span>
              <span className="mycar-register__text1">내 차 등록하기</span>
              <span className="mycar-register__text2">차번호만 입력하면</span>
              <span className="mycar-register__text3">3천원 할인</span>
            </span>
          </p>
          <img className="mycar-register__img" src="/assets/images/ico_car.webp" alt="" />
        </div>
      </div>
    </section>
  )
}

export default MyCarRegisterBar