import React, {useEffect, useState } from "react";
import "./App.css";


export function App1() {
  
  const [idchannel,setIdchannel] = useState("2S24-y0Ij3Y");
  
  

  const handleIncrement= async () => {
    const solicitudinfocanal0 =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,player&id=${idchannel}&key=AIzaSyAOmotyWBeEwp7-07ac-pRH-4gLyvJSUxM`
    const respuesta0 = await fetch(solicitudinfocanal0)
    const respuesta0JSON = await respuesta0.json()
    const infocanal0 = respuesta0JSON.items
  
  
    const solicitudinfocanal =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings&id=${infocanal0[0].snippet.channelId}&key=AIzaSyAOmotyWBeEwp7-07ac-pRH-4gLyvJSUxM`
    const respuesta1 = await fetch(solicitudinfocanal)
    const respuesta1JSON = await respuesta1.json()
    const infocanal = respuesta1JSON.items

    const contains =document.getElementById('howl');
    contains.innerHTML='';
    
    contains.innerHTML= contains.innerHTML + `<div class='maincaja'><div class='banner'><h2 class='mainmain'>youtube data api v3</h2></div><div class='naa'>${infocanal0[0].player.embedHtml}</div><div class='info'><h1 class='title'>${infocanal[0].snippet.title}</h1><a class='enlace' target="_blank" href="https://www.youtube.com/${infocanal[0].snippet.customUrl}">https://www.youtube.com/${infocanal[0].snippet.customUrl}</a><h2 class='description'>${infocanal[0].snippet.description}</h2></div></div>`;
    
    // <img class='myphoto' src="${infocanal0[0].snippet.thumbnails.high.url}"/>
    // infocanal[0].brandingSettings.image.bannerExternalUrl
    const solicitudinfoseccionescanal= `https://youtube.googleapis.com/youtube/v3/channelSections?part=snippet,contentDetails&fields=items(snippet.title,contentDetails.playlists)&channelId=${infocanal0[0].snippet.channelId}&key=AIzaSyAOmotyWBeEwp7-07ac-pRH-4gLyvJSUxM`
    
    
    const respuesta2 = await fetch(solicitudinfoseccionescanal);
    const respuesta2JSON = await respuesta2.json();
    const infosecciones= respuesta2JSON.items

    const infoseccionesfiltrado = infosecciones.filter(objeto => objeto.contentDetails!==undefined)
    console.log(infoseccionesfiltrado)
    
    const infoseccionesfiltrado1 = infoseccionesfiltrado.filter(objeto => Object.keys(objeto.contentDetails).length!==0)
    console.log(infoseccionesfiltrado1)

    

    const listas= infoseccionesfiltrado1.map(data=>{
          
          return data.contentDetails.playlists.toString()
    })

    console.log(listas)

      const respuesta=listas.map((list)=>{
      const crearsolicitudidplaylist = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet,player&id=${list}&key=AIzaSyAOmotyWBeEwp7-07ac-pRH-4gLyvJSUxM`

      return fetch(crearsolicitudidplaylist)
              .then(res=>res.json())
      })


      const respuestan=infoseccionesfiltrado1.map(list=>{
      const respuestann=list.contentDetails.playlists.map(list=>{
      
      const crearsolicitudidplaylist4 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&contentDetails&playlistId=${list}&maxResults=15&key=AIzaSyAOmotyWBeEwp7-07ac-pRH-4gLyvJSUxM`
      
      return fetch(crearsolicitudidplaylist4)
             .then(res=>res.json())

        })
      return respuestann
      })
          
      console.log(respuesta)
      console.log(respuestan)        
          
      Promise.all(respuesta).then(values => {
        
        
        const contain =document.getElementById(`listas`);
        contain.innerHTML='';
        values.map((value,ind)=>{
          
          Promise.all(respuestan[ind]).then(valuesn => {
            
            // const listbox= value.items.map(element=> `<div class='videos'><h1 class='namelist'>${element.snippet.title}</h1><h2 class='descriptionlist'>${element.snippet.description}</h2>${element.player.embedHtml}</div>`)
            const listbox= value.items.map(element=> `<div class='videos'><h1 class='namelist'>${element.snippet.title}</h1><h2 class='descriptionlist'>${element.snippet.description}</h2><img class='boo'src='${element.snippet.thumbnails.medium.url}'></div>`)

            const listboxs=listbox.toString()
            const lisboxss = listboxs.replace(/,/g,'')
          
            const data1= `<hr></hr><div class="cajaseccion"><div class='cajavideos'>${lisboxss}</div></div>`;

            const contain =document.getElementById(`listas`);
           
            contain.innerHTML= contain.innerHTML + data1;


            //-------------------------------------
            
            

            const cajaantes= document.createElement('div')
            cajaantes.classList.add('hora')
            cajaantes.innerHTML=''

            valuesn.map(d=>{
            const cajad= document.createElement('div')
            cajad.classList.add('hoy')
            cajad.innerHTML='';
            
            d.items.map((elemen)=> {
             
            cajad.innerHTML= cajad.innerHTML + `<div><h1>${elemen.snippet.title}</h1>
            <h2>${elemen.snippet.description}</h2>
            <a target="_blank" href="https://www.youtube.com/watch?v=${elemen.snippet.resourceId.videoId}">
            <img class=ni src="${elemen.snippet.thumbnails.medium.url}"></a>
            </div>`
            })
            console.log(cajad)
            cajaantes.appendChild(cajad)
            console.log(cajaantes)
            })
            
            contain.appendChild(cajaantes)
            
          })
        })
        
      })
  }
  
 
  
  
    useEffect(handleIncrement, [])
    
    const nueva = (e)=>{
    if (e.target.value.includes('https://www.youtube.com/watch?v=')) {
    const substrin=e.target.value.substring(32)  
    setIdchannel(substrin)
    }}

    return (
    <>
    
    <div className="head">
    <input placeholder='url video del canal ' className="entrada form-control" type="text" onChange={nueva} />
    <button className="form-control boton" onClick={handleIncrement}>buscar</button>
    </div>
    <div id="howl"></div>
    <div  id="listas"></div>
 
    </>
  )
  
}
