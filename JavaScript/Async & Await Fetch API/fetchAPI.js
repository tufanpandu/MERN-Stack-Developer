/**
 * ✅- fetch() API is use in morder javascript for network requesting.
 * ✅- befor fetch API developer used  XMLHttpRequest method.
 * ✅- fetch api return new promise
 * ✅-.json(): A method that returns a Promise resolving to the JSON representation of the response body. It's used when the response contains JSON data.
 * ✅-.ok: A boolean property indicating whether the response status is within the range of 200 to 299, indicating success.
 * ✅-.status: The HTTP status code of the response (e.g., 200 for OK, 404 for Not Found).
 */
fetch('https://randomuser.me/api/').then((response)=>{
      if(!response.ok){
        console.log("Network response is not ok") //  404 and 500 status error.
      }
      return response.json(); // json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
     console.error("Showing some error")
})
