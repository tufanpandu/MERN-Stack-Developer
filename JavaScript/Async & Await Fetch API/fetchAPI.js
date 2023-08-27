/**
 * ✅- fetch() API is use in morder javascript for network requesting.
 * ✅- befor fetch API developer used  XMLHttpRequest method.
 * ✅- fetch api return new promise
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
