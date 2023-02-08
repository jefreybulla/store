import { Banner } from 'shared/ui';
import { Link } from 'react-router-dom';
import styles from './cart.module.scss';

/* eslint-disable-next-line */
export interface CartProps {}

export function RoutesCart(props: CartProps) {
  return (
    <div className={styles['container']}>
      <Banner text="Welcome to the cart." />
      <Link to="/">Continue Shopping</Link>
    </div>
  );
}

export default RoutesCart;
