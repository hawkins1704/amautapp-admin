export const sortArrayASC=(arr)=>{
    return arr.sort((a,b)=>a.pos-b.pos);
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
export const formatToId=(id)=>{
    return id.replace(/ /g,'%20');
}