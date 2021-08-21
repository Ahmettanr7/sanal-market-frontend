import axios from "axios";

export default class CartService{

    add(cart){
        return axios.post("http://localhost:8080/api/carts/add",cart)
    }
    getAllByUserId(userId){
        return axios.get("http://localhost:8080/api/carts/getbyuserid?userId="+userId)
    }
    delete(id){
        return axios.post("http://localhost:8080/api/carts/delete?id="+id)
    }

}