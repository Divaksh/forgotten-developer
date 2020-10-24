import { warn } from "frontity";
import React from "react";

import Prism from "prismjs";
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-git';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-http';
import 'prismjs/components/prism-ignore';
import 'prismjs/components/prism-nginx';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-regex';
import 'prismjs/components/prism-robotframework';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-typescript';
//import 'prismjs/components/prism-php';  // php is disabling other languages

// Disable the automatic code highlighting of all `<code>` elements on the
// client because we are doing it ourselves with a processors.
Prism.manual = true;

const Code = ({ className, children }) => {
  // Capture the language of the snippet.
  const result = className?.match(/language-(\w*)\b/);
  try {
    // Try to get highlight the snippet according to the syntax guessed from the
    // `language-xxx` CSS class.
    const language = result[1];
    children = Prism.highlight(children, Prism.languages[language], language);
  } catch (e) {
    warn(
      `An incorrect "${className}" CSS class has been specified on the <code> element so no syntax highlighting was applied. It could be because this language is not recognized by prism.js or because of a typo.`
    );
  }

  return <code dangerouslySetInnerHTML={{ __html: children }}></code>;
};

export default Code;