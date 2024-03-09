export function extractTime(dateString){
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`
}

export function extractDate(dateString){
    const date = new Date(dateString);
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${year}-${month}-${day}`
}

function padZero(number){
    return number.toString().padStart(2,"0");
}