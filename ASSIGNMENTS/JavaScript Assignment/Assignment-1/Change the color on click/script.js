//color array
const colorList = ['#c644d6','#83f0d9','#de556f','#0070ff','#fff26a','#8ddc86'];

const btn = document.querySelector("button");

btn.addEventListener("click", () =>{
    //Find the single color code form colorList array
    let currColor = colorList[Math.floor(Math.random() * (colorList.length - 0) +0)];
    document.body.style.backgroundColor = `${currColor}`; 
})