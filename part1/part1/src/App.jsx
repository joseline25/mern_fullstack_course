/* eslint-disable no-unused-vars */

const Hello = () => {
  return (
    <div>
      <p>Hello from the first component here!</p>
    </div>
  );
};
/*
We have defined a new component Hello and used it inside the component App. 
Naturally, a component can be used multiple times:
*/

const Hello2 = (props) => {
  // Component helper functions
  /*
  Let's expand our Hello component so that it guesses the year of birth of the person 
  being greeted: (it is an arrow funtion/method)
  */
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  );
};

// my first react component

/* We use arrow function */

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  const name = "Peter";
  const age = 10;
  console.log(now, a + b);
  const friends = [
    { name: "Peter", age: 4 },
    { name: "Maya", age: 10 },
  ];
  return (
    <>
      <p>Hello Jose, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello />
      <Hello />
      <Hello2 name="Orli" age="29" />
      <Hello2 name={name} age={age + 2} />
      <Hello2 name={friends[1]["name"]} age={friends[1].age} />

      <Footer />
    </>
  );
};

export default App;

/*
The first rule of frontend web development:

keep the console open all the time!!

Any JavaScript code within the curly braces is evaluated and the result of this
evaluation is embedded into the defined place in the HTML produced by the component.

Note that you should not remove the line at the bottom of the component

export default App

The export is not shown in most of the examples of the course material. 
Without the export the component and the whole app breaks down.

JSX
It seems like React components are returning HTML markup. However, this is not the
case. The layout of React components is mostly written using JSX. Although JSX looks
like HTML, we are dealing with a way to write JavaScript. Under the hood, JSX
returned by React components is compiled into JavaScript.

The compilation is handled by Babel. Projects created with create-react-app or vite 
are configured to compile automatically.

In practice, JSX is much like HTML with the distinction that with JSX you can 
easily embed dynamic content by writing appropriate JavaScript within curly braces. 
The idea of JSX is quite similar to many templating languages, such as Thymeleaf 
used along with Java Spring, which are used on servers.

JSX is "XML-like", which means that every tag needs to be closed.



NB: export at the bottom is left out in these examples, now and in the future. 
It is still needed for the code to work

Writing components with React is easy, and by combining components, even a more 
complex application can be kept fairly maintainable. Indeed, a core philosophy of
React is composing applications from many specialized reusable components.

Another strong convention is the idea of a root component called App at the top of
the component tree of the application. Nevertheless, as we will learn in part 6,
there are situations where the component App is not exactly the root, but is wrapped
within an appropriate utility component.

props: passing data to components
It is possible to pass data to components using so-called props.

There can be an arbitrary number of props and their values can be "hard-coded" 
strings or the results of JavaScript expressions. If the value of the prop is 
achieved using JavaScript it must be wrapped with curly braces.

Notes: Also, keep in mind that First letter of React component names must 
be capitalized. 
*/
