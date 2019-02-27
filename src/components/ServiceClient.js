
// TÄMÄ TOIMII JA PALAUTTAA

const apiUrl = "/api/user/1";

//searches all 
export function fetchall() {
    return fetch(apiUrl).then(function (res) {
        return res.json();
    });
}

// EI KAI TOIMI VIELÄ

export function create(createCallback) {
    return fetch('/api/task/', {
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
    return fetch('/api/user' + id,
        { method: 'DELETE' })
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            return (response);
        });
}
