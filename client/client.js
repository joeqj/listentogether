const API_URL = "http://localhost:5000/insert";

let test = {
    name: "Joe",
    msg: "Test!"
}

fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(test),
    headers: {
        'content-type': 'application/json'
    }
});