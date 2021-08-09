const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    //checks to see if the request has finished.
    if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response;
    }
}
xhr.open('GET', url);
xhr.send();

console.log(xhr.onreadystatechange());