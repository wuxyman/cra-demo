import React from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { useAppStore, useUIStore } from '../../hooks';
import { Button } from 'antd';

const Home = observer((props) => {
  const appStore = useAppStore();
  const uiStore = useUIStore();
  console.log('appStore---', toJS(appStore));
  console.log('uiStore---', toJS(uiStore));

  const handleIncrement = () => {
    appStore.increment();
  };

  const handleDecrement = () => {
    appStore.decrement();
  };

  const changeName = () => {
    appStore.changeName('谢谢');
  };

  return (
    <div>
      <div>home页</div>
      <NavLink to="/">home页</NavLink>
      <NavLink to="/about/2">关于</NavLink>
      <NavLink to="/me">我的</NavLink>
      <div>{appStore.name}</div>
      <div>{appStore.nameLen}</div>
      <Button onClick={changeName}>修改名字</Button>

      <div>{appStore.count}</div>
      <div>double:{appStore.doubleCount}</div>
      <Button type="primary" onClick={handleIncrement}>
        +
      </Button>
      <Button type="primary" onClick={handleDecrement}>
        -
      </Button>

      <div>ui测试</div>
      <div>loading:{uiStore.loading ? '真' : '假'}</div>
      <Button type="primary" onClick={() => uiStore.upLoading(true)}>
        更新状态
      </Button>
      {renderRoutes(props.route.children)}
    </div>
  );
});

export default Home;
