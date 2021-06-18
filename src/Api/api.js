import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3626e292-c304-45ad-a1a9-23e02972e0c9" // when start app, need to genirate a new key, will be a 403 error
    }
})

export const userAPI = {
    getUsers (currentPage = 1, pageSize = 10) {

        return instance.get(`users?page=${currentPage}&count = ${pageSize}`)
            .then(response => {
                return response.data;
            })
    }
}


/*
export const followUser = (currentPage = 1, pageSize = 10) => {

    return instance.delete(`follow?page=${currentPage}&count = ${pageSize}`)
        .then(response => {
            return response.data;
        })
}

export const unfollowUser = (currentPage = 1, pageSize = 10) => {

    return instance.post(`follow?page=${currentPage}&count = ${pageSize}`)
        .then(response => {
            return response.data;
        })
}*/
