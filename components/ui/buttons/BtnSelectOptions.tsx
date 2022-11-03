import Link from "next/link";
import classes from "./BtnSelectOptions.module.scss";

interface BtnSelectOptionsInterface {
  productNameDashed: string;
  id: string;
}

const BtnSelectOptions: React.FC<BtnSelectOptionsInterface> = (props) => {
  return (
    <Link
      href={{
        pathname: `/product/${props.productNameDashed}`,
        query: {
          id: props.id,
        },
      }}
      passHref
    >
      <a
        className={`btn btn--thick-font btn--green btn--small btn--featured ${classes.btn}`}
      >
        Select Options
      </a>
    </Link>
  );
};

export default BtnSelectOptions;
