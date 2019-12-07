  
import axios from "axios";
export default {
    feeds: [],
    populate: async file => {
        let data = await new Promise(resolve => {
            axios.get("http://localhost:4000/uploads/post").then(res => {
                resolve(res.data)
            }).catch(err => {
                console.log(err)
            })
        });
        return data;
    },

};