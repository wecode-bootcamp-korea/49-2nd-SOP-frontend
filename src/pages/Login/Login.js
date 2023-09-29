import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import './Login.scss';
import Input from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // const [modalOpen, setIsModalOpen] = useState(false);
  // const handlemodalopen = () => {
  //   setIsModalOpen(!modalOpen);
  // };

  const navigate = useNavigate();
  const goToSignup = () => {
    navigate('/singup');
  };

  const goToMain = () => {
    navigate('/');
  };

  const saveUserEmail = e => {
    setEmail(e.target.value);
  };

  const saveUserPassword = e => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleLogin = () => {
  //   fetch('https://www.2sop.com/signIn', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.message === 'login complete') {
  //         alert('로그인이 성공했습니다');
  //         localStorage.setItem('JWT토큰', data.accessToken);
  //         goToMain();
  //       } else {
  //         alert('로그인 실패 : 올바른 정보를 입력하세요');
  //       }
  //     });
  // };

  return (
    <div className="login">
      <div className="loginModal">
        {/*로그인 모달페이지 */}
        <div className="loginScreen">
          {/*로그인 만든거 페이지 */}
          <div className="goBackButton">
            <MdClose className="closeButton" onClick={goToMain} />
          </div>
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
                  value={email}
                  onChange={saveUserEmail}
                />
              </div>
              <div className="passwordWrapper">
                <Input
                  className="passwordInput"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="비밀번호"
                  onChange={saveUserPassword}
                  value={password}
                />
                <button className="viewPassword" onClick={handleShowPassword}>
                  {showPassword ? '숨기기' : '보기'}
                </button>
              </div>
              <p>비밀번호 재설정하기</p>

              <button className="loginButton" /*onClick={handleLogin}*/>
                로그인
              </button>
            </div>
          </div>
          <h2>회원이 아니신가요?</h2>
          <p className="signupExplanation">
            회원가입을 통해 주문 내역을 확인하고, 위시리스트에 관심제품을
            저장하거나, 저장된 정보를 사용하여 더 빠른 온라인 결제 경험을 즐기실
            수 있습니다
          </p>
          <div className="signupButtonWrapper">
            <button className="signupButton" onClick={goToSignup}>
              회원가입
            </button>
          </div>
        </div>
      </div>
      {/* {modalOpen && <Modal />} */}
    </div>
  );
};

export default Login;
