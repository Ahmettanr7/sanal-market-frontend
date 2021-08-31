import axios  from "axios";

export default class UserService{
    add(user){
        return axios.post("http://localhost:8080/api/users/add",user)
    }
}