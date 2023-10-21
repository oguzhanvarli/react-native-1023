import axios from "axios"
import baseUrl from "../env/baseUrl"


export default baseService = {
  get: async(url) => {
    let response
    await axios.get(baseUrl + url).then(res => response = res.data)
    .catch(err => console.log(err))
    return response
  },
  post : async(url,data) => {
    let response 
    await axios.post(baseUrl + url, data).then(res => response = res.data)
    .catch(err => console.log(err))
    return response
  }
  
}