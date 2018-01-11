exports.DATA = {
  date: [{
    '11/01/2018': [
      {
        category: 'HTML',
        questions: [
          {
            points: 100,
            question: '<p>What are the new features provided in HTML5?</p>',
            answer: '<div class="text-left"><h3>Some of the new features provided in HTML5 are:</h3>1. It provides support for local storage<br>2. New form controls, like calendar, date, time, email, url, search<br>3. &lt;canvas&gt; element is provided to facilitate 2D drawing<br>4. The &lt;video&gt; and &lt;audio&gt; elements are provided for media playback<br>5. New content-specific elements are provided. <b>For e.g.</b> &lt;article&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;, &lt;section&gt;</div>',
          },
          {
            points: 200,
            question: '_____ is the correct syntax for Doctype in HTML5?',
            answer: '<! DOCTYPE>',
          },
          {
            points: 300,
            question: 'Name 2 non-semantic elements',
            answer: '<div>, <span>',
          },
          {
            points: 400,
            question: 'Name 6 Block-level Elements',
            answer: '<div>, <hr>, <table>, <li>, <ul>, <p>, <form>, <h1>-<h6>, <ol> ...',
          },
        ],
      },
      {
        category: 'CSS',
        questions: [
          {
            points: 100,
            question: "How block elements can be centered with CSS?",
            answer: "With margin properties.",
          },
          {
            points: 200,
            question: "Using npm, which package should you require/import in addition to 'react' to render a React component in an existing DOM element of your HTML file?",
            answer: 'react-dom',
          },
          {
            points: 300,
            question: '<p>Which lifecycle function should you use to set default property values?</p><ol><li>getInitialState</li><li>getInitialProps</li><li>getDefaultProps</li></ol>',
            answer: 'C. getDefaultProps',
          },
          {
            points: 400,
            question: 'Name 3 limitations of CSS ',
            answer: '1.Ascending by selectors is not possible <br>2.Limitations of vertical control <br>3.No expressions <br>4.No column declaration <br>5.Pseudo-class not controlled by dynamic behavior <br>6.Rules, styles, targeting specific text not possible ',
          },
        ],
      },
      {
        category: 'JavaScript',
        questions: [
          {
            points: 100,
            question: '<p>Constants (const) are:</p><ol><li>Block scoped</li><li>Function scoped</li><li>Global</li></ol>',
            answer: 'A. Block scoped',
          },
          {
            points: 200,
            question: 'Name 3 new collection classes in ES2015',
            answer: '<ul><li>Map</li><li>WeakMap</li><li>Set</li><li>WeakSet</li></ul>',
          },
          {
            points: 300,
            question: "<p>What's being logged and how is this new ES6 feature called?</p><code>var colors = ['red', 'blue', 'green'];<br/>var [primary, secondary, tertiary] = colors;<br/>console.log(secondary);</code>",
            answer: '<ul><li>blue</li><li>Array destructuring</li></ul>',
          },
          {
            points: 400,
            question: "<p>What's being logged and name 4 new features of ES6 used in this code snippet?</p><code>let greeting = (name, msg='Hello') => `${msg}, ${name}`;<br/>console.log(greeting('Christophe');</code>",
            answer: '<p>Hello, Christophe</p><ul><li>let variables</li><li>Arrow functions</li><li>Default parameters</li><li>Template strings</li></ul>',
          },
        ],
      },
      {
        category: 'ES6',
        questions: [
          {
            points: 100,
            question: 'Using the proposed ECMAScript module syntax, how do you load the Mortgage.js module from the current directory and make all its members available in an object named mortgage?',
            answer: "<code>import * as mortgage from './Mortgage';</code>",
          },
          {
            points: 200,
            question: 'What are the colors of the olympic rings?',
            answer: "<img src='images/olympic_rings.png'/>",
          },
          {
            points: 300,
            question: "What's the date of the first React commit on GitHub?",
            answer: 'May 26th, 2013',
          },
          {
            points: 400,
            question: "What's the hex color of the React logo?",
            answer: '#61DAFB',
          },
        ],
      },
    ],
    '12/01/2018': [
      {
        category: 'HTML',
        questions: [
          {
            points: 2000,
            question: '<p>What part of your application does React focus on?</p><ol><li>The Model</li><li>The View</li><li>The Controller</li><li>All of the above</li></ol>',
            answer: 'B. The View',
          },
          {
            points: 200,
            question: '_____ lets you create JavaScript objects using HTML syntax',
            answer: 'JSX',
          },
          {
            points: 300,
            question: 'What tool can you use to transpile JSX?',
            answer: 'Babel',
          },
          {
            points: 400,
            question: 'React uses a _____________ to limit direct manipulation of the DOM and improve performance',
            answer: 'Virtual DOM',
          },
        ],
      },
      {
        category: 'CSS',
        questions: [
          {
            points: 100,
            question: "<p>Where can you define a component's initial state when you use the ES6 Class syntax?</p><ol><li>getInitialState()</li><li>getInitialProps()</li><li>The component's constructor</li></ol>",
            answer: "C. The component's constructor",
          },
          {
            points: 200,
            question: "Using npm, which package should you require/import in addition to 'react' to render a React component in an existing DOM element of your HTML file?",
            answer: 'react-dom',
          },
          {
            points: 300,
            question: '<p>Which lifecycle function should you use to set default property values?</p><ol><li>getInitialState</li><li>getInitialProps</li><li>getDefaultProps</li></ol>',
            answer: 'C. getDefaultProps',
          },
          {
            points: 400,
            question: 'Which lifecycle method is invoked once, immediately after the initial rendering occurs?',
            answer: 'componentDidMount',
          },
        ],
      },
      {
        category: 'JavaScript',
        questions: [
          {
            points: 100,
            question: '<p>Constants (const) are:</p><ol><li>Block scoped</li><li>Function scoped</li><li>Global</li></ol>',
            answer: 'A. Block scoped',
          },
          {
            points: 200,
            question: 'Name 3 new collection classes in ES2015',
            answer: '<ul><li>Map</li><li>WeakMap</li><li>Set</li><li>WeakSet</li></ul>',
          },
          {
            points: 300,
            question: "<p>What's being logged and how is this new ES6 feature called?</p><code>var colors = ['red', 'blue', 'green'];<br/>var [primary, secondary, tertiary] = colors;<br/>console.log(secondary);</code>",
            answer: '<ul><li>blue</li><li>Array destructuring</li></ul>',
          },
          {
            points: 400,
            question: "<p>What's being logged and name 4 new features of ES6 used in this code snippet?</p><code>let greeting = (name, msg='Hello') => `${msg}, ${name}`;<br/>console.log(greeting('Christophe');</code>",
            answer: '<p>Hello, Christophe</p><ul><li>let variables</li><li>Arrow functions</li><li>Default parameters</li><li>Template strings</li></ul>',
          },
        ],
      },
      {
        category: 'ES6',
        questions: [
          {
            points: 100,
            question: 'Using the proposed ECMAScript module syntax, how do you load the Mortgage.js module from the current directory and make all its members available in an object named mortgage?',
            answer: "<code>import * as mortgage from './Mortgage';</code>",
          },
          {
            points: 200,
            question: 'What are the colors of the olympic rings?',
            answer: "<img src='images/olympic_rings.png'/>",
          },
          {
            points: 300,
            question: "What's the date of the first React commit on GitHub?",
            answer: 'May 26th, 2013',
          },
          {
            points: 400,
            question: "What's the hex color of the React logo?",
            answer: '#61DAFB',
          },
        ],
      },
    ],
  }],
};
