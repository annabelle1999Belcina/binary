import axios from 'axios';

const base = 'http://localhost:4000';



export const LoginService = data => (
	axios.post(`${base}/login`, data)
		.then(res => res.status)
)

export const GetUser = data => (
	axios.get(`${base}/getUser`, data)
		.then(res => res)
)

function addUser(body) {
    return new Promise((resolve, reject)=>{
        axios.post(`${base}/user/create`, body).then(resp => {
            resolve(resp)
        }).catch(err => {
            reject(err)
            console.log("ghfjdkls")
        })
    })
}


export default {
    addUser,

}