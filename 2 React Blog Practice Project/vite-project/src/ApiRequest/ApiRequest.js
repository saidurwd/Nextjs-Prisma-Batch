import axios from "axios";

const BaseURL="https://basic-blog.teamrabbil.com/api"

export async function postCategories() {

    let res = await axios.get(BaseURL+"/post-categories");
    if(res.status===200){
        return res.data;
    }
    else{
        return []
    }

}

export async function postNewest() {
    let res = await axios.get(BaseURL+"/post-newest");
    if(res.status===200){
        return res.data;
    }
    else{
        return []
    }
}

export async function postList(id) {
    let res = await axios.get(BaseURL+"/post-list/"+id);
    if(res.status===200){
        return res.data;
    }
    else{
        return []
    }
}

export async function postDetails(id) {
    let res = await axios.get(BaseURL+"/post-details/"+id);
    if(res.status===200){
        return res.data;
    }
    else{
        return []
    }
}

export async function createComment(list_id,author,comment) {
    let res = await axios.post(BaseURL+"/post-details",{"list_id":list_id, "author":author, "comment":comment});
    if(res.status===200){
        return res.data;
    }
    else{
        return []
    }
}