const Quiz = require("./models/Quiz_Model");

const AddQuestions = async () => {
  SampleQuestions.forEach(async (element) => {
    const newQuestion = new Quiz({
      question: element.question,
      options: element.options,
      correctAnswer: element.correctAnswer,
    });

    const saveResult = await newQuestion.save();
  });
  console.log(`Sample Question Added`);
};

const SampleQuestions = [
  {
    question: "What is a Node.js module?",
    options: [
      "A function that handles HTTP requests",
      "A reusable piece of code that encapsulates related functionality",
      "A configuration file for database connections",
    ],
    correctAnswer:
      "A reusable piece of code that encapsulates related functionality",
  },
  {
    question: "What is the difference between require() and import in Node.js?",
    options: [
      "There is no difference, they are interchangeable",
      "require() is used for importing modules synchronously, while import is used asynchronously",
      "import is used for importing ES6 modules, while require() is used for CommonJS modules",
    ],
    correctAnswer:
      "import is used for importing ES6 modules, while require() is used for CommonJS modules",
  },
  {
    question: "Explain the concept of the event loop in Node.js.",
    options: [
      "A loop that executes HTTP requests sequentially",
      "A mechanism for handling asynchronous operations",
      "A function that triggers events based on user interactions",
    ],
    correctAnswer: "A mechanism for handling asynchronous operations",
  },
  {
    question: "What is a callback function in Node.js?",
    options: [
      "A function passed as an argument to another function to be executed later",
      "A function used for defining event listeners",
      "A function that executes only once",
    ],
    correctAnswer:
      "A function passed as an argument to another function to be executed later",
  },
  {
    question: "How does Node.js handle asynchronous operations?",
    options: [
      "By blocking the event loop until the operation completes",
      "By using callback functions and event-driven architecture",
      "By converting asynchronous tasks into synchronous tasks",
    ],
    correctAnswer: "By using callback functions and event-driven architecture",
  },
  {
    question: "What is a callback hell in Node.js?",
    options: [
      "A situation where callbacks are nested deeply, leading to unreadable and difficult-to-maintain code",
      "A feature of the event loop",
      "A module for handling callback functions",
    ],
    correctAnswer:
      "A situation where callbacks are nested deeply, leading to unreadable and difficult-to-maintain code",
  },
  {
    question: "What is the purpose of the 'util' module in Node.js?",
    options: [
      "To handle file operations",
      "To provide utility functions for common tasks",
      "To manage database connections",
    ],
    correctAnswer: "To provide utility functions for common tasks",
  },
  {
    question: "Explain the concept of Promises in Node.js.",
    options: [
      "Promises are callbacks that execute immediately",
      "Promises are objects representing the eventual completion or failure of an asynchronous operation",
      "Promises are used for defining event listeners",
    ],
    correctAnswer:
      "Promises are objects representing the eventual completion or failure of an asynchronous operation",
  },
  {
    question: "What is the role of the 'fs' module in Node.js?",
    options: [
      "To handle file system operations",
      "To manage HTTP requests",
      "To define routing paths",
    ],
    correctAnswer: "To handle file system operations",
  },
  {
    question: "Explain the concept of error-first callbacks in Node.js.",
    options: [
      "Callbacks that execute without any errors",
      "Callbacks where the first parameter is always an error object",
      "Callbacks that handle only success scenarios",
    ],
    correctAnswer:
      "Callbacks where the first parameter is always an error object",
  },
  {
    question: "What is Node.js?",
    options: [
      "A JavaScript library",
      "A runtime environment",
      "A front-end framework",
    ],
    correctAnswer: "A runtime environment",
  },
  {
    question: "Which of the following is true about Node.js?",
    options: [
      "It uses Java as its scripting language",
      "It is single-threaded",
      "It cannot be used for backend development",
    ],
    correctAnswer: "It is single-threaded",
  },
  {
    question: "What is the purpose of package.json in a Node.js project?",
    options: [
      "To store project metadata and dependencies",
      "To define the project's HTML structure",
      "To specify CSS stylesheets",
    ],
    correctAnswer: "To store project metadata and dependencies",
  },
  {
    question: "Which module in Node.js is used for file operations?",
    options: ["http", "fs", "path"],
    correctAnswer: "fs",
  },
  {
    question: "What is the role of npm in Node.js?",
    options: [
      "To manage project dependencies",
      "To define project routes",
      "To create user interfaces",
    ],
    correctAnswer: "To manage project dependencies",
  },
  {
    question: "What is the purpose of the Express.js framework in Node.js?",
    options: [
      "To handle frontend logic",
      "To build APIs and web applications",
      "To manage database operations",
    ],
    correctAnswer: "To build APIs and web applications",
  },
  {
    question: "What is the event-driven architecture in Node.js?",
    options: [
      "A design pattern for handling synchronous tasks",
      "A model where events trigger callbacks",
      "A mechanism to block I/O operations",
    ],
    correctAnswer: "A model where events trigger callbacks",
  },
  {
    question: "What is the purpose of middleware in Express.js?",
    options: [
      "To define routing paths",
      "To handle HTTP requests and responses",
      "To manage project configurations",
    ],
    correctAnswer: "To handle HTTP requests and responses",
  },
  {
    question: "Which of the following is a built-in HTTP module in Node.js?",
    options: ["net", "http", "url"],
    correctAnswer: "http",
  },
  {
    question: "What is the role of the 'require' function in Node.js?",
    options: [
      "To import external modules",
      "To define global variables",
      "To declare functions",
    ],
    correctAnswer: "To import external modules",
  },
  {
    question: "What is a callback function in Node.js?",
    options: [
      "A function that executes without parameters",
      "A function passed as an argument to another function to be executed later",
      "A function used to declare event listeners",
    ],
    correctAnswer:
      "A function passed as an argument to another function to be executed later",
  },
  {
    question: "What is the purpose of the 'async' keyword in Node.js?",
    options: [
      "To handle asynchronous operations",
      "To define asynchronous functions",
      "To pause the execution of code",
    ],
    correctAnswer: "To define asynchronous functions",
  },
  {
    question: "What is the role of the 'process' object in Node.js?",
    options: [
      "To manage database connections",
      "To provide information about the current Node.js process",
      "To handle file operations",
    ],
    correctAnswer: "To provide information about the current Node.js process",
  },
  {
    question: "Which tool is commonly used for debugging Node.js applications?",
    options: ["npm", "Postman", "Debugger"],
    correctAnswer: "Debugger",
  },
  {
    question: "What is the purpose of the 'stream' module in Node.js?",
    options: [
      "To manipulate strings",
      "To handle file streaming operations",
      "To manage user sessions",
    ],
    correctAnswer: "To handle file streaming operations",
  },
  {
    question:
      "Which HTTP method is used to update resource data in RESTful APIs?",
    options: ["GET", "POST", "PUT"],
    correctAnswer: "PUT",
  },
  {
    question: "What is the role of the 'crypto' module in Node.js?",
    options: [
      "To handle HTTP requests",
      "To perform cryptographic operations",
      "To manage database connections",
    ],
    correctAnswer: "To perform cryptographic operations",
  },
  {
    question: "What is the purpose of 'cluster' module in Node.js?",
    options: [
      "To create clusters of database servers",
      "To handle child processes",
      "To manage authentication",
    ],
    correctAnswer: "To handle child processes",
  },
  {
    question: "Which of the following is a popular Node.js testing framework?",
    options: ["Jest", "Mocha", "Chai"],
    correctAnswer: "Mocha",
  },
  {
    question: "What is the purpose of the 'dotenv' module in Node.js projects?",
    options: [
      "To manage environment variables",
      "To handle HTTP requests",
      "To perform data encryption",
    ],
    correctAnswer: "To manage environment variables",
  },
];

module.exports = AddQuestions;
