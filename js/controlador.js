
const btnUpdateReport = ".btn"


document.addEventListener("click",(e)=>{

    if(e.target.matches(btnUpdateReport)) {crearReporte() };


})


const crearReporte =  ()=>{
    fetch("http://localhost:8005/mi-endpoint").then(data => {data.json})


    fetch("http://localhost:8006/crearArchivo").then(data => {data.json})
}