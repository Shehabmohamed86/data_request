console.log('hi')
axios.get("https://swapi.dev/api/people/?page=2")
.then((res)=>{
  console.log(res.data.results)
})
.catch((err)=>{
  console.log(err)
  console.log('its not working')
})