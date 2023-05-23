export const sortArrayASC=(arr)=>{
    return arr.sort((a,b)=>a.key-b.key);
}

export const filterDuplicated=(array)=>{
    return [...new Set(array)];
}

export const parseDate=(miliseconds)=>{
    const date=new Date(miliseconds);
    return (`${(date.getDay()+1)}/${date.getMonth()+1}/${date.getFullYear()}`)
}
export const capitalize=(word)=>{
    return word[0].toUpperCase() + word.slice(1);
}