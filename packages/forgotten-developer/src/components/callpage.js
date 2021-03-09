import Script from "@frontity/components/script";
import { connect } from "frontity";

const CallPage = () => (
  <Script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js" />
);

export default connect(CallPage);
