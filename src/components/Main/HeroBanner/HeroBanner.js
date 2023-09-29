import React from 'react';
import './HeroBanner.scss';

const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <img
        src="/images/paper-1074131_1280.jpg"
        alt="background"
        className="backgroundImage"
      />
      <div className="logoBox">
        <img src="/images/2sop.png" alt="heroBanner" className="aesopLogo" />
      </div>
      <div className="content">
        <div>돌아온 가을, 안부를 물으며</div>
        <div>마음을 적어 건네는 계절</div>
        <div>
          정성을 들인 한 마디, 2SOP은 아름다운 우리의 글로 감사를 이야기 합니다.
        </div>
        <button>
          <span>더 보기</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
