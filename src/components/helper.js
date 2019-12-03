import axios from 'axios';
import bcrypt from 'bcryptjs'

const base = 'http://localhost:4000';

export const UserRegistration = data => {
	const password = data.password;
	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(password, salt);
	data["password"] = hash;
	return axios.post(`${base}/user/create`, data)
		.then(res => res.status)
}

export const UsernameValidation = data => (
	axios.post(`${base}/user/validate`, data)
		.then(exist => exist.status)
)

export const LoginService = data => (
	axios.post(`${base}/login`, data)
		.then(res => res.status)
)

export const GetUser = data => (
	axios.get(`${base}/getUser`, data)
		.then(res => res.status)
)

// function addUser(body) {
//     return new Promise((resolve, reject)=>{
//         axios.post(`${base}/user/create`, body).then(resp => {
//             resolve(resp)
//         }).catch(err => {
//             reject(err)
//             console.log("ghfjdkls")
//         })
//     })
// }


export default {
    // addUser,

}