import { init } from "./init";

export const appReducer = (currData= init,newData)=>{
    {console.log(currData)}
    return currData;
}; 