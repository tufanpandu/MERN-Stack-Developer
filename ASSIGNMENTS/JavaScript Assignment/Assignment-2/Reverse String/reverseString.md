# Reverse String

We can reverse string using multiple methods. Here is the some example.

**Note :You have to use setTimeout() method based on question**

> Approch -1 Using **_reduce()_** and **_split()_**

## Note

1. split() is used to convert string into array of string.
2. reduce() method in JavaScript iterates through an array, applying a function to accumulate elements into a single result value

```Javascript
const reverse = document.querySelector("#btn");
function reverseStringOne(){
    const input = document.querySelector("#inputStr");
    if(input.value.trim() !== ""){
        let char = input.value.split('');
        let reverseChar = char.reduce((str, ch) => ch + str , "");
       const output = document.querySelector("#output");
       output.style.height = "fit-content";
       output.innerHTML = `Reverse string output is: <span class="ans">${reverseChar}</span>`;
      }

      //Reset the input value
      input.value = "";

   }

   reverse.addEventListener("click", () => {
     setTimeout(reverseStringOne ,2000);
    });
```

> Approch -2 Using **_split()_** , **_reverse()_** and **_join()_** .

## Note

1. reverse():method don't take any parameter .It's reverse the array of element inplace means it's mutetates the original array.
2. toReversed() :method create another array to give result and they don't mutete the original array.
3. join() :It's take one parameter to join the elements of array and return string .If any parameter is not given then it's by default havae comma(",").

```javascript
function reverseStringTwo() {
  const input = document.querySelector("#inputStr");
  if (input.value.trim() !== "") {
    const strToArr = input.value.split(""); // convert to array
    const arrReverse = strToArr.reverse(); // Reverse the array
    const elementsJoin = arrReverse.join(""); //Convert to string
    const output = document.querySelector("#output");
    output.style.height = "fit-content";
    output.innerHTML = `Reverse string output is: <span class="ans">${elementsJoin}</span>`;
  }

  //Reset the input box
  input.value = "";
}
```

> Approch -3 Using **_Spread Operator_**

```javascript
function reverseStringThree() {
  const input = document.querySelector("#inputStr");
  if (input.value.trim() !== "") {
    const convertToArr = [...input.value];
    const arrReverse = convertToArr.reverse(); // Reverse the array
    const elementsJoin = arrReverse.join(""); //Convert to string
    const output = document.querySelector("#output");
    output.style.height = "fit-content";
    output.innerHTML = `Reverse string output is: <span class="ans">${elementsJoin}</span>`;
  }

  //Reset the input boc
  input.value = "";
}
```

> Approch-4 Using **_Array.form()_** and **_reverse()_**

```javascript
function reverseStringFour() {
  const input = document.querySelector("#inputStr");
  if (input.value.trim() !== "") {
    const convertToArr = Array.from(input.value);
    const arrReverse = convertToArr.reverse(); // Reverse the array.
    const elementsJoin = arrReverse.join(""); //Convert to string
    const output = document.querySelector("#output");
    output.style.height = "fit-content";
    output.innerHTML = `Reverse string output is: <span class="ans">${elementsJoin}</span>`;
  }

  //Reset the input boc
  input.value = "";
}
```

> Approch-5 Using **_Spread operato_** and **_reduce()_** method

```javascript
function reverseStringFive() {
  const input = document.querySelector("#inputStr");
  if (input.value.trim() !== "") {
    const convertToArr = [...input.value]; //Convert to array
    const arrReverse = convertToArr.reduce((newArr, ch) => ch + newArr); // Reverse the array and return string.
    const output = document.querySelector("#output");
    output.style.height = "fit-content";
    output.innerHTML = `Reverse string output is: <span class="ans">${arrReverse}</span>`;
  }

  //Reset the input boc
  input.value = "";
}
```

> Approch - 6 Using **_for loop_**

```javascript
function reverseStringSix() {
  const input = document.querySelector("#inputStr");
  if (input.value.trim() !== "") {
    let result = "";
    for (let i = input.value.length - 1; i >= 0; i--) {
      result += input.value[i];
    }
    const output = document.querySelector("#output");
    output.style.height = "fit-content";
    output.innerHTML = `Reverse string output is: <span class="ans">${result}</span>`;
  }

  //Reset the input boc
  input.value = "";
}
```

> Approch -7 Using **_substring()_** and **_decrementing index_**

```javascript
function reverseStringSeven() {
  const input = document.querySelector("#inputStr");
  if (input.value.trim() !== "") {
    let result = "";

    let i = input.value.length;
    while (i >= 0) {
      result += input.value.substring(i, i + 1);
      i--;
    }

    console.log(result);

    const output = document.querySelector("#output");
    output.style.height = "fit-content";
    output.innerHTML = `Reverse string output is: <span class="ans">${result}</span>`;
  }

  //Reset the input box
  input.value = "";
}
```

> Approch - 8 Using **_recursion_**
