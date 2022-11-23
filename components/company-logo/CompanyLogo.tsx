import Image from "next/image";
import classes from './CompanyLogo.module.scss';

const CompanyLogo: React.FC<{
  className: string,
  section: string,
  intersectState: boolean
}> = (props) => {

  console.log(props.section);
  console.log(props.intersectState);

  return (
    <div className={`${classes['logo-container']} ${props.className} ${props.section === 'header' ? (props.intersectState ? classes['logo--large'] : classes['logo--small']) : classes['logo--regular']}`}>
      <Image
        className={`${classes.image}`}
        src="/images/head-logo.png"
        alt="Sarah's Sweet and Savory Snacks logo"
        // width={props.width}
        // height={props.height}
        layout="fill"
      />
    </div>
  );
};

export default CompanyLogo;
