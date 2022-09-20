import Image from "next/image";
import classes from './CompanyLogo.module.scss';

const CompanyLogo: React.FC<{
  width: number, 
  height: number, 
  className: string
}> = (props) => {
  return (
    <div className={`${classes['logo-container']} ${props.className}`}>
      <Image
        className={`${classes.image}`}
        src="/images/head-logo.png"
        alt="Sarah's Sweet and Savory Snacks logo"
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default CompanyLogo;
