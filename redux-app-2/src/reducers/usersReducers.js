import {userInit} from '../includes/init'

export const usersReducers = (currentData=userInit,newData) =>{
switch(newData.type){
    case 'USERS':
        return {
            ...currentData,
            users:newData.payload,
        }
}
console.log(currentData)

return currentData
}