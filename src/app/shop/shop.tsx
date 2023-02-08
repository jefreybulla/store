// @ts-ignore
//import { Banner } from 'shared/ui';
// I am getting an error using the above library. See read me for more info

import { Link } from 'react-router-dom';
import styles from './shop.module.scss';

/* eslint-disable-next-line */
export interface ShopProps {}

export function Shop(props: ShopProps) {
  return (
    <div className={styles['container']}>
      <Link to="/cart">View Cart</Link>
    </div>
  );
}

export default Shop;
