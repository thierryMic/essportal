const url = process.env.REACT_APP_API
const headers = JSON.parse(process.env.REACT_APP_HEADERS)


export const apiFetchEmployee = (email) => {
    return fetch(`${url}/api/employee/`, {
                headers : {
                    "Content-Type": "application/json",
                    "mode": "cors",
                    "Access-Control-Allow-Origin": "http://localhost:3000/",
                    "Authorization": `Bearer ${localStorage.getItem("access_token")}`
                },
                    method:"GET",
                    body: JSON.stringify(email),
                })
                .then(response => response.json())
                .catch(e => {console.log(e)})

}

// export const apiFetchEmployees = (endpoint='API/employees/') => {
//     return fetch(`${url}/${endpoint}`, {
//                     method:"GET",
//                     ...headers,
//                 })
//                 .then(response => response.json())
//                 .catch(e => {console.log(e)})

// }


export const apiSaveEmployee = (employee) => {
    return fetch(`${url}/API/saveemployee/`, {
                headers : {
                    "Content-Type": "application/json",
                    "mode": "cors",
                    "Access-Control-Allow-Origin": "http://localhost:3000/",
                    "Authorization": `Bearer ${localStorage.getItem("access_token")}`
                },
                    method:"POST",
                    body: JSON.stringify(employee),
                })
                .then(response => response.json())
                .catch((e) => {throw 'Unable to save record'})

}