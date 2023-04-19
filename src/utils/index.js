export const sortArrayASC=(arr)=>{
    return arr.sort((a,b)=>a.key-b.key);
}

export const filterDuplicated=(array)=>{
    return [...new Set(array)];
}