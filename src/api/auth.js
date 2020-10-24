import axios from "axios"
import { BASE_URL } from "@config/constants"
import AsyncStorage from '@react-native-community/async-storage';
export const loadToken = ()=> {
    axios.post(BASE_URL+"/auth/login/visitor").then(res=>{
        if(res?.data?.token){
            const {token} =res.data;
            AsyncStorage.setItem('@token',token).then(v=>{
                
            })
        }
    })
}
