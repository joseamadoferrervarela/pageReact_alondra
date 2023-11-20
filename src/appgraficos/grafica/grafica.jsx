import {useState, useEffect} from 'react'
import './grafica.css'
import Plot from 'react-plotly.js';
import Plotly from 'react-plotly.js';
import {useSelector, useDispatch} from "react-redux";

export function Grafica() {
  const data = useSelector((state)=>state.data)
 
  const datas= data.map(data=>{
      let nueva = data.fecha.substring(5,7)
      if(nueva[0]=='0'){
      nueva= nueva.substring(1,2)
      }

      nueva= Number(nueva)

      return nueva
    })

  
  var arr= []


  for (var ind = 1; ind <= 12; ind++) {
      let contador =0;
    
      datas.forEach(element=> {
    
        if (element == ind) {
           contador = contador + 1;
        }
          
  });

    arr[ind-1]=contador
  }
    
    
    const dat=[{x: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
                  y: arr,
                  type:'bar',
                  mode:'lines+markers',
                  marker: {color: 'rgb(142,124,195)'},
                  

    }]

    const lay={title:'numero de eventos por mes'}

    var config = {responsive: true}
    
    // Plotly.newPlot('#tester', dat, lay, config );
    
  return (
    <div style={{width:'100%', height:'50vh'}} id='tester'>
      <Plot data={dat} layout={lay}   config={config} className='jiji'></Plot>
    </div>
  )
}