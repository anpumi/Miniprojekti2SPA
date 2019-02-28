
// TÄMÄ TOIMII JA PALAUTTAA

const apiUrl = "/api/";

//searches all 
export function fetchall() {
    return fetch("/api/user/4").then(function (res) {
        return res.json();
    });
}

export function deletequote(id/*, callback*/) {
    return fetch(apiUrl + 'task/' + id, { method: 'DELETE' })
        .then(function (response) {
            //callback();
        })
}

export function createtask(task) {
    fetch(apiUrl + 'task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    })
        .then((function (response) {
        }));
}
// Annukka räveltää
// export function updatetask(task) {
//     fetch(apiUrl + 'task' + id, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(task)
//     })
//         .then((function (response) {
//         }));
// }
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
