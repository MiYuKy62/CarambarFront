const btn = document.getElementById("randomBtm");
const result = document.getElementById("result");
btn.addEventListener("click",async () => {
    const res = await fetch("https://apicarambar.onrender.com/api/v1/blagues/random")
    const data  = await res.json()
    console.log (data)
    result.textContent=data.apicarambar.blague
    result.textContent=data.apicarambar.reponse

})