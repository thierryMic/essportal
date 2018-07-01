const url = process.env.REACT_APP_API
const headers = JSON.parse(process.env.REACT_APP_HEADERS)

export const apiFetchEmployees = (endpoint='JSON/employees/') => {
    return fetch(`${url}/${endpoint}`, {
                    method:"GET",
                    ...headers,
                })
                .then(response => response.json())
                .catch(e => {console.log(e)})

}
