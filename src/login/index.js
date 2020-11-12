import React from 'react';
import { Button } from 'antd';

const Login = (props) => {
  const doLogin = () => {
    props.history.push({ pathname: '/' });
  };

  return (
    <div>
      <div>登陆页面</div>
      <Button type="primary" onClick={doLogin}>
        登陆
      </Button>
    </div>
  );
};

export default Login;
