# Random Number generator with Delay and Progress Indication

> The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
> variable so can be modified. The program displays a message every second indicating the time remaining
> until the random number is generated and then outputs the generated number.

1. ### Create Random Number Generate function.
2. ### Create Display count Down funtion.
3. ### Finally Create Random Number funciton.

**Title: Random Number Generator with Countdown**

**Introduction:**
This JavaScript code is designed to create a random number generator with a countdown feature. When the user inputs a time in seconds and clicks the "Generate" button, it displays a countdown from the specified time to 0 seconds. Once the countdown reaches 0, it generates a random number between 0 and 100 and displays it. Here's a breakdown of the code:

**HTML Elements:**

- `generate`: This is the button element that triggers the random number generation.
- `message`: A container to display messages to the user.
- `inputTime`: An input field where the user can specify the time in seconds.
- `countdown`: A container to display the countdown timer.

**Functions:**

1. `getRandomNum()`: This function generates and displays a random number between 0 and 100 when called.

2. `displayCountdown(inputSec)`: This function displays a countdown timer starting from the value of `inputSec` (time in seconds) to 0. It updates the `countdown` element's text content to show the remaining time in seconds. It uses a recursive setTimeout function to update the countdown every second. When the countdown reaches 0, it calls the `getRandomNum()` function and hides the countdown element.

3. `randomNumber()`: This function is called when the "Generate" button is clicked. It retrieves the value entered in the `inputTime` field, converts it to an integer, and checks if it's a valid number between 0 and 60 seconds. If it's valid, it initiates the countdown by calling `displayCountdown(inputSec)`. It also updates the `message` element to show "Generating..." during the countdown. If the input is not valid, it displays an error message.

**Event Listener:**

- The `generate` button has an event listener that triggers the `randomNumber()` function when clicked.

**Documentation:**

To use this code, follow these steps:

1. Open the HTML file that contains the code.
2. Enter a time value in seconds (between 0 and 60) into the input field.
3. Click the "Generate" button.
4. The countdown will start, and the remaining time will be displayed.
5. When the countdown reaches 0, a random number will be generated and displayed.
6. If an invalid time is entered, an error message will be shown.

**Example:**

- If you enter "10" in the input field and click "Generate," the countdown will start from 10 seconds, and a random number will be displayed when the countdown reaches 0.
