import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
          <body>
            <Main />
            <div id="backdrop-root"></div>
            <div id="success-overlay-root"></div>
            <NextScript />
          </body>
      </Html>
    )
  }
}