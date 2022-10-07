//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

//  document.querySelector('h2').innerText=''
//  document.querySelector('h3').innerText=''
 
function getFetch(){
    const choice = document.querySelector('input').value
    console.log(choice)
  
  const url = `https://api.nasa.gov/planetary/apod?api_key=SUmC8wgfIgxDXJNPKTc5WPxJpmgf5iwN5eqMAsXL&date=${choice}`


 
  function mark(ID) { //creates border
  document.getElementById(ID).style.border = "15px solid orange";
}

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)


         document.querySelector('.img-vid').src=''
         document.querySelector('iframe').src=''

         document.querySelector('.img-vid').style.border ='0'
         document.querySelector('iframe').style.border = "0";
       
        if(data.media_type === 'image'){
          
          document.querySelector('.img-vid').src = data.hdurl
          document.querySelector('.img-vid').style.border = "15px solid white";

          
          

        }else if(data.media_type === 'video'){
          
          document.querySelector('iframe').src = data.url
          document.querySelector('iframe').style.border = "15px solid white";

          
          
        }
        document.querySelector('.explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

document.querySelector('button').addEventListener('click',popTitles)

let firstClick = true
function popTitles(){
    
    if(firstClick){
     document.querySelectorAll('.title').forEach(e=>e.classList.toggle('hidden'))
     firstClick=false
    }
    
}

// document.querySelector('button').addEventListener('click',mark)

// let change = true
// function mark() { //creates border

//     if(change){
//       if(data.media_type === 'image')
//     document.querySelector('img').style.border = "15px solid white";
//     else 
//     document.querySelector('iframe').style.border = "15px solid white";
//     change=false
//     }
// }



