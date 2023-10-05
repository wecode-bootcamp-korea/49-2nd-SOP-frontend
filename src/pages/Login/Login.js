import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import SignUp from '../SignUp/SignUp';
import './Login.scss';
import { HOST } from '../../components/Variable';

const Login = props => {
  const { handleModalopen } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isModalSignUpOpen, setIsModalSignUpOpen] = useState(false);

  const handleSignUpModalOpen = () => {
    setIsModalSignUpOpen(!isModalSignUpOpen);
  };

  const navigate = useNavigate();

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

  const handleLogin = () => {
    if (email === '') {
      alert('이메일을 입력해주세요');
      return;
    } else if (password === '') {
      alert('비밀번호를 입력해주세요');
      return;
    }
    fetch(`${HOST}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'LOGIN_SUCCESS') {
          alert('로그인이 성공했습니다');
          localStorage.setItem('token', data.accessToken);
          goToMain();
        } else if (data.message === 'NOT_REGISTERED') {
          alert('이메일이 존재하지않습니다');
        } else if (data.message === 'WRONG_PASSWORD') {
          alert('비밀번호가 틀렷습니다');
        }
      });
  };

  return (
    <div>
      {isModalSignUpOpen ? (
        <div className="modal">
          <SignUp
            handleSignUpModalOpen={handleSignUpModalOpen}
            handleModalopen={handleModalopen}
          />
        </div>
      ) : (
        <div className="login">
          <div className="loginModal">
            <div className="loginScreen">
              <div className="goBackButton">
                <MdClose className="closeButton" onClick={handleModalopen} />
              </div>
              <div className="loginContent">
                <div className="loginLetter">
                  <h1>로그인</h1>
                </div>
                <div className="inputAndButtonWrapper">
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
                    <button
                      className="viewPassword"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? '숨기기' : '보기'}
                    </button>
                  </div>
                  <p>비밀번호 재설정하기</p>
                  <button className="loginButton" onClick={handleLogin}>
                    로그인
                  </button>
                </div>
              </div>
              <h2>회원이 아니신가요?</h2>
              <p className="signupExplanation">
                회원가입을 통해 주문 내역을 확인하고, 위시리스트에 관심제품을
                저장하거나, 저장된 정보를 사용하여 더 빠른 온라인 결제 경험을
                즐기실 수 있습니다
              </p>
              <div className="signupButtonWrapper">
                <button
                  className="signupButton"
                  onClick={handleSignUpModalOpen}
                >
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
