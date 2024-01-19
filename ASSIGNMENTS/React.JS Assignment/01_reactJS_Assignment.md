# How we called all the component in `App.js` file.

```javascript
import Persion from "./component/Persion.js";
import Button from "./component/Button.js";
import Header from "./component/Header.js";
import List from "./component/List.js";

function App() {
  return (
    <div>
      //👉 Problem 1<Persion name="Tufan" age="26"></Persion>
      // 👉Problem 2
      <Button
        text="Click me"
        onClick={() => {
          console.log("Button is clicked.");
        }}
      />
      // 👉Problem 3
      <Header text="Hello Tufan welcome to react js world." />
      //👉 Problem 4
      <List items={["Onion", "Potato", "Garlic", "Soya"]} />
    </div>
  );
}

export default App;
```

## Problem 1

> Create a component named that takes two props- "name" and "age". The component should display the pesion's name and age in paragraph element.

```javascript
function persion
function Persion(props){
    return(
        <span>Persion Name is {props.name} and age is {props.age}</span>
    )
}

export default Persion;
```

## Problem 2

> Create a component named "Button" that takes two props - "text" and "onClick". The component should display a button element with the given text and call the onClick function when clicked.

```javascript
function Button(props) {
  return <button onClick={props.onClick}>{props.text}</button>;
}

export default Button;
```

## Problem 3

> Create a component named "Header" that takes one prop - "title". The component should display a header element with the given title.

```javascript
function Header(props) {
  return <header>{props.text}</header>;
}

export default Header;
```

## Problem 4

> Create a component named "List" that takes one prop - "items". The component should display an unordered list element with the given list items.

```javascript
function List(props) {
  const listItem = props.items.map((item) => {
    return <li key={item}> {item}</li>;
  });
  return <ul> {listItem}</ul>;
}

export default List;
```
