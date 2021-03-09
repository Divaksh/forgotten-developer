import Script from "@frontity/components/script";
import { connect } from "frontity";

const CallPage = () => (
  <Script
    code={`
        <!-- BEGIN callpage.io widget -->
        <!-- IMPORTANT: Remove script below if you don't need support for older browsers. -->
        (function () {var script = document.createElement('script');script.src = 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js';script.async = false;document.head.appendChild(script);}())
        <!-- END callpage.io widget -->
`}
  />
);

export default connect(CallPage);
