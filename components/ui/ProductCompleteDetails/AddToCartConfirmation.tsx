import classes from './AddToCartConfirmation.module.scss';
import Link from 'next/link';

interface AddToCartConfirmationProps {
  quantity: number;
  productName: string;
}

const AddToCartConfirmation: React.FC<AddToCartConfirmationProps> = (props) => {
  return (
    <div className={classes.banner}>
      <div className={`${classes['confirmation-details']}`}>
        <div className={classes['icon-container']}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <p>{props.quantity > 1 ? <span>{props.quantity} ×</span> : ''} <span>"{props.productName}"</span> {props.quantity > 1 ? 'have' : 'has'} been added to your cart</p>
      </div>
      <div className={`${classes['btn-container']}`}>
        <Link href={{ pathname: `/cart` }}>
          <button className={`btn btn--rounded btn--thin btn--green`}>View Cart</button>
        </Link>
      </div>
    </div>
  );
}

export default AddToCartConfirmation;