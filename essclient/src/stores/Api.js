const url = process.env.REACT_APP_API
const headers = JSON.parse(process.env.REACT_APP_HEADERS)

export const apiFetchEmployees = (endpoint='API/employees/') => {
    return fetch(`${url}/${endpoint}`, {
                    method:"GET",
                    ...headers,
                })
                .then(response => response.json())
                .catch(e => {console.log(e)})

}


export const apiSaveEmployee = (employee) => {
    return fetch(`${url}/API/saveemployee/`, {
                    headers : {
                         "Content-Type": "application/json",
                         "mode": "cors",
                         "Access-Control-Allow-Origin": "http://localhost:3000/employee"
                        },
                    method:"POST",
                    body: JSON.stringify(employee),
                })
                .then(response => response.json())
                .catch((e) => {throw 'Unable to save record'})

}