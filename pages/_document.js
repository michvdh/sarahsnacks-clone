import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
          <body>
            <Main />
            {/* AddToCartSuccessModal*/}
            <div id="backdrop-root"></div> 
            <div id="success-overlay-root"></div> 

            {/* QtyErrorModal*/}
            <div id="qty-error-root"></div>

            {/* QuickView Modal */}
            <div id="product-quick-view-root"></div>

            {/* InDevelopmentModal */}
            <div id="in-development-root"></div>
            <NextScript />
          </body>
      </Html>
    )
  }
}