import {init} from './init'

export const appReducer = (currentData=init,newData)=>{
  {console.log(1,newData)}
    {console.log(2,currentData)}
    switch(newData.type){
      case 'NAME_VALUE':
        return{
          ...currentData,
          name:newData.payload,
        };
        break;

        case 'LOCATION_VALUE':
          return{
            ...currentData,
            location:newData.payload,
          };
          break;
    }
  return currentData; 
}