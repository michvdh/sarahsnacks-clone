import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCookie,
  faSeedling,
  faWheatAlt,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import classes from "./Category.module.scss";

const Category: React.FC = () => {
  return (
    <section className={`${classes.category} category`}>

      {/* Door image */}
      <div className={`${classes[`order-online`]} order-online`}>
        <div>
          <div className={classes[`image-container`]}>
            <div className={classes.overlay}></div>
            <div className={`${classes[`text-container`]} text-container`}>
              <h2>
                <span>Order Online</span>
                <br />
                <span>Today</span>
              </h2>
            </div>
            <Image
              className={classes.image}
              src="/images/delivery.jpg"
              alt="Delivery image"
              // width={406}
              // height={554}
              layout="fill"
            />
          </div>
        </div>
      </div>

      <div className={`${classes[`feel-good`]} feel-good`}>
        <div className={classes[`image-container`]}>
          <Image
            className={classes.image}
            src="/images/testimonial.jpg"
            alt="healthy snack image"
            // width={611}
            // height={350}
            layout="fill"
          />
        </div>
        <div className={classes[`bulk-text-container`]}>
          <h2>
            Feel Good about
            <br />
            <span>What you eat!</span>
          </h2>
          <p>
            Good snacks are important, because food plays such an important role
            in our lives. It affects how we look, how we feel, and how we
            perform. As a Registered Dietitian, I create flavorful snacks that
            allow you to feel good about what you eat.
          </p>
        </div>
        <div className={classes.icons}>
          <div>
            <div className={classes[`icon-container`]}>
              <FontAwesomeIcon
                className={`${classes.icon} fa-icon--brown`}
                icon={faWheatAlt}
              />
            </div>
            <div className={classes.desc}>
              <span className={`icon-desc`}>
                Grain
                <br />
                Free
              </span>
            </div>
          </div>
          <div>
            <div className={classes[`icon-container`]}>
              <FontAwesomeIcon
                className={`${classes.icon} fa-icon--brown`}
                icon={faCookie}
              />
            </div>
            <div className={classes.desc}>
              <span className={`icon-desc`}>
                Healthy
                <br />
                Snacks
              </span>
            </div>
          </div>
          <div>
            <div className={classes[`icon-container`]}>
              <FontAwesomeIcon
                className={`${classes.icon} fa-icon--brown`}
                icon={faSeedling}
              />
            </div>
            <div className={classes.desc}>
              <span className={`icon-desc`}>
                Vegan
                <br />
                Brittle
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
