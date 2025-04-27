import axios, { Axios } from "axios";
export class serverCall{
    static fnSendGet(url){
          return axios.get(url);
    }
}