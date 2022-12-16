import Image from "next/image";
import classes from './CompanyLogo.module.scss';
import Link from "next/link";
import { useSelector } from "react-redux";

const CompanyLogo: React.FC<{
  className: string,
  parentComponent: string,
  // intersectState: boolean | null;
  onClick: () => void;
}> = (props) => {

  const intersectState = useSelector(
    (state: {
      io: {
        targetIntersect: boolean;
      };
    }) => state.io.targetIntersect
  );

  return (
    <div className={`${classes['logo-container']} ${props.className} ${props.parentComponent === 'header' ? (intersectState ? classes['logo--large'] : classes['logo--small']) : classes['logo--regular']}`}
    onClick={props.onClick}
    >
      <Link href="/" passHref>
        <a>
          <Image
            className={`${classes.image}`}
            src="/images/head-logo.png"
            alt="Sarah's Sweet and Savory Snacks logo"
            layout="fill"
          />
        </a>
      </Link>
    </div>
  );
};

export default CompanyLogo;
