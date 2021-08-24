import axios from "axios";

export default class CartService{

    add(cart){
        return axios.post("http://localhost:8080/api/carts/add",cart)
    }
    getAllByUserId(userId){
        return axios.get("http://localhost:8080/api/carts/getbyuserid?userId="+userId)
    }
    delete(userId,itemId){
        return axios.post("http://localhost:8080/api/carts/delete?itemId="+itemId+"?userId="+userId)
    }

    getActiveCartItems(userId){
        return axios.get("http://localhost:8080/api/carts/getactivecartitems?userId="+userId)
    }

}