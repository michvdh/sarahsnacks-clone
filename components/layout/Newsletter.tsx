import classes from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <section className={classes.newsletter}>
      <div className={classes['newsletter-container']}>
        <div className={classes['text-container']}>
          <h2>Subscribe to our <span>Newsletter</span></h2>
          <p>Sign up with your email address to receive exclusive discounts, exciting announcements and new product sneak previews.</p>
        </div>

        <div className={classes['forms-container']}>
          <form>
            <input type="email" required placeholder="email address*" aria-invalid="true" />
            <button type="submit" className={`btn btn--green btn--thick btn--thick-font`}>Submit</button>
          </form>
        </div>
      </div>

      <div className={`${classes.overlay}`}></div>
    </section>
  );
}

export default Newsletter;