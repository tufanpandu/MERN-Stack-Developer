//========= Linkden Profils URL validator ===================
const inputUrl = "https://www.linkedin.com/in/tufanpandu/" 

function linkedinUrlValidator(inputUrl){
    const pattern = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}\/?$/;
    if(pattern.test(inputUrl)){
        console.log("Enter Linkedin profile URL is correct.");
    }else{
        console.log("Sorry ! Enter Valid URL");
    }
}

linkedinUrlValidator(inputUrl);