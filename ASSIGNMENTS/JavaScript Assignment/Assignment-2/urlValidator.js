// ======== URL Validator ================
 const url = "http://regex101.com";
function urlValidator(url) {
    // Pattern for URL
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

    if (url.match(urlPattern)) {
        console.log("Valid URL");
    } else {
        console.log("Not Valid URL");
    }
}

urlValidator(url);


