console.log('hi')
axios.get("https://swapi.dev/api/people/?page=2")
.then((res)=>{
  console.log(res.data.results)
})
.catch((err)=>{
  console.log(err)
  console.log('its not working')
})



function changeBodyColor(color,deley){
 return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    document.body.style.backgroundColor = color
    resolve()
  },deley)
 });
};

async function lightShow (){
  await changeBodyColor('orange',1000);
  await changeBodyColor('red',1000);
  await changeBodyColor('yellow',1000);
  await changeBodyColor('blue',1000);
}
lightShow()
