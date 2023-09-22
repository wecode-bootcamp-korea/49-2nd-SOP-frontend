import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <div className="Banner">
      <div className="content">
        <div>스토어 로케이터</div>
        <div>
          매장에서는 이솝 컨설턴트가 고객 여려분을 따뜻하게 맞이하고 기프트
          구매를 위한 맞춤형 컨설팅을 제공해드립니다.
        </div>
        <button>
          <span>가까운 스토어 찾기</span>
          <span>→</span>
        </button>
      </div>
      <img
        src="https://i.postimg.cc/qMJQSRqt/wine-1692625-1280.jpg"
        alt="스토어"
      />
    </div>
  );
};

export default Banner;
