export const getFromLocalStorage = ()=> {
    const data = JSON.parse(localStorage.getItem("donate")) || [];
    return data;
}



export const saveToLocalStorage =(data) => {
    const savedData = getFromLocalStorage()
    const exists = savedData.find((item)=> item.id === data.id);
    if(!exists){
        savedData.push(data);
        localStorage.setItem("donate", JSON.stringify(savedData));
        alert('Your data saved successfully');
    }
    else {
        alert('Your data is allready exist');
    }
};