

export const inc=()=>async dispatch=>{
    dispatch({
        type:"INCREMENT"
    })
}
 export const dec=()=>async dispatch =>{
    dispatch({
        type:"DECREMENT"
    })
}
 export const res=()=>async dispatch=>{
    dispatch({
    type:"RESET"
   })
}