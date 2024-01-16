import './grafica.css'
import {useSelector} from "react-redux";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS, BarController, BarElement, CategoryScale, LinearScale, plugins} from "chart.js";


ChartJS.register(BarController ,BarElement, CategoryScale, LinearScale, plugins
 )

export function Grafica() {
  const data = useSelector((state)=>state.data)
  let nueva 
  const datas= data.map(data=>{

      nueva = data.fecha.substring(5,7)

      if(nueva[0]=='0'){
      nueva= nueva.substring(1,2)
      }

      nueva= Number(nueva)

      return nueva
    })
    
  const arreglo=[]
  let contador
  for (let ind = 1; ind <= 12; ind++) {
      contador =0;
    
      datas.forEach(element=> {
    
        if (element == ind) {
           contador = contador + 1;
        }
          
  });

    arreglo[ind-1]=contador
  }
    
    const options = {
   
      responsive:'true',
      maintainAspectRatio:false,
      plugins: {
        legend: {
          display:false,
          position: 'top',
        },
        title: {
          display: true,
          text: 'Numero de eventos por mes '
        }
      }
    };

   
    const labels =['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const datos= {
      labels: labels,
      datasets: [
        {
          label: 'numero de eventos',
          data: arreglo,
          backgroundColor: 'rgb(204, 255, 255)',
          
        }

      ]

    };
   

  return (
    
    <div style={{ padding: '20px',width:'100%', height:'40vh'}}>
      <Bar type={'bar'} data={datos}  options={options}></Bar>
    </div>
    
  )
}