import React, { useEffect, useState } from "react";
import "./main1.css";

export function Main1() {

  const handleIncrement= async () => {

  
    const solicitudinfocanal ='https://youtube.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings&id=UCKnTtZpgQiIznMU3tl40DjQ&key=AIzaSyB02E8Ki_FkLbuv3TJ84OfEW_X6In2ZCPk'
    const respuesta1 = await fetch(solicitudinfocanal)
    const respuesta1JSON = await respuesta1.json()
    const infocanal = respuesta1JSON.items

    console.log(infocanal[0].snippet.thumbnails.high.url)
    const contains =document.getElementById(`howl`)
   
    contains.innerHTML= contains.innerHTML + `<div class='maincaja'><div class='banner'><h2 class='mainmain'> <i class="fa-brands fa-square-youtube"></i> youtube data api v3</h2></div><img class='myphoto' src="${infocanal[0].snippet.thumbnails.high.url}"/><div class='info'><h1 class='title'>${infocanal[0].snippet.title}</h1><a class='description' href="https://www.youtube.com/${infocanal[0].snippet.customUrl}">https://www.youtube.com/${infocanal[0].snippet.customUrl}</a><h2 class='description'>${infocanal[0].snippet.description}</h2></div></div>`;
   
    
   
    const solicitudinfoseccionescanal= 'https://youtube.googleapis.com/youtube/v3/channelSections?part=snippet,contentDetails&fields=items(snippet.title,contentDetails.playlists)&channelId=UCKnTtZpgQiIznMU3tl40DjQ&key=AIzaSyB02E8Ki_FkLbuv3TJ84OfEW_X6In2ZCPk'
    const respuesta2 = await fetch(solicitudinfoseccionescanal);
    const respuesta2JSON = await respuesta2.json();
    const infosecciones= respuesta2JSON.items
     
    
    const infoseccionesfiiltrado = infosecciones.filter(objeto => objeto.contentDetails!==undefined)
    console.log(infoseccionesfiiltrado)

    const infoseccionesfii = infoseccionesfiiltrado.map(lista=>lista.contentDetails.playlists)
    console.log(infoseccionesfii)

    const titleseccions = infoseccionesfiiltrado.map(lista=>lista.snippet.title)

    infoseccionesfii.map((list,index)=>{handleIncrement1(list,titleseccions[index])})

  }
 
  const handleIncrement1= async (canal, tituloseccion) => {
  
  const arraystring= canal.toString();
  console.log(arraystring)

  const crearsolicitudidplaylist = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet,player&id=${arraystring}&key=AIzaSyB02E8Ki_FkLbuv3TJ84OfEW_X6In2ZCPk`
  console.log(crearsolicitudidplaylist)
  const respuesta3 = await fetch(crearsolicitudidplaylist);
  const respuesta3JSON = await respuesta3.json();
  const ids= respuesta3JSON.items
 
  const idimalist= `<div class='nameseccion'>${tituloseccion}</div>` 
  const listbox= ids.map(element=> `<div class='videos'><h1 class='namelist'>${element.snippet.title}</h1><h2 class='descriptionlist'>${element.snippet.description}</h2><div>${element.player.embedHtml}</div></div>`)

  const listboxs=listbox.toString()
  const lisboxss = listboxs.replace(/,/g,'')
  

  const contain =document.getElementById(`howl`)
  contain.innerHTML= contain.innerHTML + `<div class="cajaseccion">${idimalist}<div class='cajavideos'>${lisboxss}</div></div>`;
  

    }

    useEffect(handleIncrement, [ ])
    

  return (
    <>
    {/* <button onClick={handleIncrement}>hola</button> */}
    <div id="howl"></div>
 
    </>
  )
  
}


