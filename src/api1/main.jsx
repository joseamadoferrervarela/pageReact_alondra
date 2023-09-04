import React, { useEffect, useState } from "react";
import "./main.css";

export function Main() {

  const handleIncrement= async () => {
    const solicitudcanales ="https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&fields=items(snippet.resourceId)&channelId&maxResults=3&channelId=UCDTIR-Pcm5L8kaiaCVWy6IA&access_token=ya29.a0AfB_byAEZLPIB0LmXeIZ2XD-PUAPKClVc4HT85jWcpFuzmwGG0auCUwJVbbCv1qpxrvHxwma8aOX0fTwwA2O6TZ0iTTOVBNAs4ktEF-ps1lc16_8WKWYP4ML4yFq0-OEupxrnQiW91nJViw-eGqjTIiQORRf1zGjxJsdpAaCgYKAesSARASFQHsvYlsmBymyxrsfrZXMjfZg0MTOA0173&key=AIzaSyB02E8Ki_FkLbuv3TJ84OfEW_X6In2ZCPk"
    const respuesta1 = await fetch(solicitudcanales)
    const respuesta1JSON = await respuesta1.json()
    const canales = respuesta1JSON.items

    canales.map((canal)=>{handleIncrement1(canal)})

    }
 
  const handleIncrement1= async (canal) => {
    
  const crearsolicitudidvideo = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&fields=items(id.videoId)&order=date&maxResults=2&channelId=${canal.snippet.resourceId.channelId}&key=AIzaSyB02E8Ki_FkLbuv3TJ84OfEW_X6In2ZCPk`
  const respuesta2 = await fetch(crearsolicitudidvideo);
  const respuesta2JSON = await respuesta2.json();
  const ids= respuesta2JSON.item

  const idarray= ids.map(element=> element.id.videoId)
  const idstring= idarray.toString()
  
  const array=["<div></div>","<div></div>","<div></div>"]
  const string=array.toString()
  console.log(string)


  const crearsolicitudembedvideo = `https://youtube.googleapis.com/youtube/v3/videos?part=player&fields=items(player(embedHtml))&id=${idstring}&key=AIzaSyB02E8Ki_FkLbuv3TJ84OfEW_X6In2ZCPk`
  const respuesta3 = await fetch(crearsolicitudembedvideo);
  const respuesta3JSON = await respuesta3.json();
  const videos = respuesta3JSON.items;
 
  const videoarray= videos.map(element=> element.player.embedHtml)
  const videostring= videoarray.toString()
  const videosconcat = videostring.replace(',', '')

  document.getElementById(`howl`).innerHTML=`<div>${videosconcat}</div>`;
    }

  return (
    <>
    <button onClick={handleIncrement}>hola</button>
    <div id="howl"></div>
 
    </>
  )
  
}


