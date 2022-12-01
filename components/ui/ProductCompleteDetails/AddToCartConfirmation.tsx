import classes from './AddToCartConfirmation.module.scss';
import Link from 'next/link';

interface AddToCartConfirmationProps {
  quantity: number;
  productName: string;
}

const AddToCartConfirmation: React.FC<AddToCartConfirmationProps> = (props) => {
  return (
    <div className={classes.banner}>
      <div>
        <p>{props.quantity > 1 ? <span>{props.quantity} ×</span> : ''} <span>"{props.productName}"</span> {props.quantity > 1 ? 'have' : 'has'} been added to your cart</p>
      </div>
      <div>
        <Link href={{ pathname: `/cart` }}>
          <button>View Cart</button>
        </Link>
      </div>
    </div>
  );
}

export default AddToCartConfirmation;