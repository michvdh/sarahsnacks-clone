import Image from "next/image";
import classes from './CompanyLogo.module.scss';
import Link from "next/link";

const CompanyLogo: React.FC<{
  className: string,
  section: string,
  intersectState: boolean | null;
  onClick: () => void;
}> = (props) => {

  return (
    <div className={`${classes['logo-container']} ${props.className} ${props.section === 'header' ? (props.intersectState ? classes['logo--large'] : classes['logo--small']) : classes['logo--regular']}`}
    onClick={props.onClick}
    >
      <Link href="/">
        <Image
          className={`${classes.image}`}
          src="/images/head-logo.png"
          alt="Sarah's Sweet and Savory Snacks logo"
          layout="fill"
        />
      </Link>
    </div>
  );
};

export default CompanyLogo;
