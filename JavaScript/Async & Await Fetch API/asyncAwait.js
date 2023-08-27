/**
 * ✅- "async" keyword is used with function for represent function is asynchronous function
 * ✅- "async" function return promise.
 * ✅-"await" keyword is used inside the "async" function  wait for the asynchronous operation.
 * ✅- Async and await is easy to error handling and batter for readablity
 */


//  Ex -1

function getInfo(){
    return new Promise(function(resolve, reject){
         setTimeout(function(){
            let student ={ stu1 :{ name: "Tufan" , age : 24 },
                           stu2 : {name: "Imran" , age : 22}}
            reject(student);

         },4000)
    })
}

// async and await
async function getStudentInfo(){
    console.log("Start")
      try{
     let studentData = await getInfo()
     console.log(studentData.stu2.name)
     console.log("Print first line")
      }catch{
          console.error("User is not avilable")
          console.log("Ignore the error")
      }
    console.log("End")
}
getStudentInfo()






