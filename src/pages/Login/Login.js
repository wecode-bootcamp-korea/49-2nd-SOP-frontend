import React from 'react';
import { MdClose } from 'react-icons/md';
import './Login.scss';
import Input from '../../components/Input/Input';

const Login = () => {
  return (
    <div>
      <div className="modalWrapper">
        <div className="loginModal">
          {' '}
          {/*로그인 모달페이지 */}
          <div className="loginScreen">
            {/*로그인 만든거 페이지 */}
            <MdClose className="closeButton" />
            <div className="loginContent">
              {/*x버튼 빠진 전체 랩퍼 */}
              <div className="loginLetter">
                <h1>로그인</h1>
              </div>
              <div className="inputAndButtonWrapper">
                {/*이메일/비밀번호/로그인 랩퍼 */}
                <div className="emailWrapper">
                  <Input
                    className="emailInput"
                    type="email"
                    placeholder="이메일 주소"
                  />
                </div>
                <div className="passwordWrapper">
                  <Input
                    className="passwordInput"
                    tpye="password"
                    placeholder="비밀번호"
                  />
                  <button className="viewPassword">보기</button>
                </div>
                <div className="loginButtonWrapper">
                  <button className="loginButton">로그인</button>
                </div>
              </div>
            </div>
            <h2>회원이 아니신가요?</h2>
            <p className="signupExplanation">
              회원가입을 통해 주문 내역을 확인하고, 위시리스트에 관심제품을
              저장하거나, 저장된 정보를 사용하여 더 빠른 온라인 결제 경험을
              즐기실 수 있습니다
            </p>
            <div className="signupButtonWrapper">
              <button className="signupButton">회원가입</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
