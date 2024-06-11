# React Assignment -2 | Instagram Login and Logout page.

**We started this project from scratch.**

1. First we have to setup the react app. We can do this using **create ract app** or **vite**.

2. Vite is recommended because It give's speed , flexiblity and support morder web technology.

3. Run below commands on you'r **VS Code** or **Terminal**. Then run the server and check is it working fine or not.

```
  npm create vite@latest
  cd Instagram Assignment
  npm install
  npm run dev
```

4. Now remove unnecessery codes and file from project. Also for styling you can use CSS3 manual or any CSS framewordk.

5. Finally all set . Let's start to build the project

6. Create component folder for Easy to manage. Inside the component is we create Instagram , Login and Signup component.

7. Inside the Instagram component we create instagram login and signup layout which is show on the website.Also we manage the state of user inside the component.

8. Inside the Login and Sign Up component username and password input form code is written.

**Here is main Challange is Faceing while State management of user .**

- For state manage we use **useState** hook.
  > const [isloged , setUser] = useState("login")
- Then we do conditional rendring.

  ```
  let renderComponent = ()=>{
          if(isloged === "login"){
            return <Login setUser={setUser}/>
          }else if(isloged === "signup"){
            return <Signup setUser={setUser}/>
          }
  };
  ```

  - We use **onClick** method for update the state when user is click on Signup or signin button.
