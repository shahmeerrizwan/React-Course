
import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        Authorization: `Bearer j3kl4j23l4j2lk3j4lk2j34lk2jlk4j2l3kj42h4u23ij2k3l4n2,m3n423u42i34j2lk3j42lk3m42j42lj342lj432ij343`,
        userID: 2
    }
})


export const Get = (endPoint: string) => {
    return apiInstance.get(endPoint)
}
export const Post = (endPoint: string, body: any) => {
    return apiInstance.post(endPoint, body)
}
export const Put = (endPoint: string, body: any) => {
    return apiInstance.put(endPoint, body)
}
export const Del = (endPoint: string) => {
    return apiInstance.delete(endPoint)
}
