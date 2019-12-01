import React from 'react';
import { Form, Input } from 'antd';
import './LoginPage.scss';
import logoUrl from '../../assets/img/login/team-name.png';

const Login = () => {
  return (
    <div className="login-page">
      <div className="team-name">
        <img src={logoUrl} alt="logo" />
      </div>
      <div className="login-form">
        <h1 className="form-title">Lin CMS</h1>
        <Form name="login">
          <Form.Item className="input-form-item username-item" name="username" rules={[{ required: true }]}>
            <Input placeholder="请填写用户名" />
          </Form.Item>
          <Form.Item className="input-form-item password-item" name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="请填写用户登录密码" />
          </Form.Item>
          <Form.Item className="submit-form-item">
            <button className="login-btn">登录</button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
