import axios from "axios";

export default class ItemService{
    add(item){
        return axios.post("http://localhost:8080/api/items/add",item)
    }

    delete(itemId){
        return axios.post("http://localhost:8080/api/items/delete?itemId="+itemId)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/items/getbyid?id="+id)
    }

    getByCategory(cat1Id,pageNo,pageSize){
        return axios.get("http://localhost:8080/api/items/getbycategory?cat1Id="+cat1Id+"&pageNo="+pageNo+"&pageSize="+pageSize)
    }

    getAllCategory1Id(cat1Id){
        return axios.get("http://localhost:8080/api/items/getallcategory1Id?cat1Id="+cat1Id)
    }

    getByItemName(itemName){
        return axios.get("http://localhost:8080/api/items/getbyitemname?itemName="+itemName)
    }

    getByItemNamePageable(itemName,pageNo,pageSize){
        return axios.get("http://localhost:8080/api/items/getbyitemnamepageable?itemName="+itemName+"&pageNo="+pageNo+"&pageSize="+pageSize)
}
}