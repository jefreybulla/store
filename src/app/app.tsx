// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
import { RoutesCart } from 'cart';
import { Route, Routes } from 'react-router-dom';
import Shop from './shop/shop';
//import styles from './app.module.scss';
//import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        {/* 
        <Route path="/cart" element={<RoutesCart />}></Route>
        */}
      </Routes>
    </>
  );
}

export default App;
