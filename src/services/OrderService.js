import axios  from "axios";

export default class OrderService{

add(order){
    return axios.post("http://localhost:8080/api/orders/add",order)
}

getByUserId(userId){
    return axios.get("http://localhost:8080/api/orders/getbyuserid?userId="+userId)
}

}