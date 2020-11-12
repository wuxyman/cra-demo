import './App.less';
import { Link } from 'react-router-dom';

function App(props) {
  return (
    <div>
      <div>app页面</div>
      <Link to="/home" />
      <Link to="/about" />
      <Link to="/me" />
      {props.children}
    </div>
  );
}

export default App;
