
//TODO: correct the function addresses once WEB API is ready
//aka. '/api/quotes'

//xhr connection
const xhr = new XMLHttpRequest();

const palveluurl = '/api';

//searches all 
//TODO: change /api/ -address
export function haekaikki(callback) {

    //setting eventhandler
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            console.log("Vastaus");
            if (xhr.status === 200) {
                const all = JSON.parse(xhr.responseText);
                //callback service between client & component
                callback(null, all);
            } else {
                const error = { status: xhr.status, statusText: xhr.statusText };
                callback(error);
            }
        }
    }

    xhr.open('GET', '/api/quotes/')
    xhr.send();
}


//creates new task
//TODO: change /api/ -address
// (callback: createCallback)
export function create(createCallback) {
    return fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createCallback)
    })
        .then(function (response) {
            /*callback(response);*/
            return (response);
        });

}

//deletes task
//TODO: change /api/ -address
// (callback: id)
export function remove(id) {
    return fetch('/api/quotes/' + id,
             { method: 'DELETE' })
        .then(function(response) {
            if (response.status !==200) {
                throw new Error(response.statusText);
            }
            return (response);
    });
}
