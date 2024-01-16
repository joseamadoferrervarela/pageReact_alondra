import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import {useSelector, useDispatch} from "react-redux";
import {deleteData} from "../reducers/data/dataSlice.jsx";
import {llenarCampos} from "../reducers/edit/editSlice.jsx";
import {onModal1,onModal2} from "../reducers/modal/modalSlice.jsx";

import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./lista.css";
import {Table} from "reactstrap";

const style = {
  width: '70%',
  height:'80vh',
  bgcolor: '#ccffff',
  p: 4,
  borderRadius: 2,
  mt: 2,
  overflow: 'auto'
  
};

const style2 = {
  width: '100%',
  bgcolor: '#ccffcc',
  boxSizing:'border-box',
  p: 4,
  borderRadius: 2,
  mt: 2,
  
};
const style3 = {
  width: '100%',
  bgcolor: '#ccffcc',
  boxSizing:'border-box',
  p: 4,
  borderRadius: 2,
  mt: 2,
  color:'#ff00ff'
};



export function Lista() {
  
  const data = useSelector((state)=>state.data)
  const dispatch= useDispatch()
  

  return (
    

    
  //   <TableContainer className='contenedor6' component={Paper}>
  //     <Button onClick={()=>dispatch(onModal1({
  //           modal1:true,
  //           modal2:false,
  //           }))} style={{borderColor: '#66ff99', backgroundColor:'transparent',color:'#66ff99'}}  sx={{mb:2}} variant="outlined" endIcon={<BookmarkAddIcon />}>
  //   Agregar Evento
  //   </Button>
  //     <Table className='tabla6' sx={{ minWidth: 670 }} size="small" aria-label="a dense table">
  //       <TableHead >
  //         <TableRow>
  //           <TableCell className='celda6' align="left">Nombre del evento</TableCell>
  //           <TableCell className='celda6' align="left">Fecha del evento</TableCell>
  //           <TableCell className='celda6' align="left">Hora del evento</TableCell>
  //           <TableCell className='celda6' align="left">Lugar del evento</TableCell>
  //           <TableCell className='celda6' align="left">Descripcion del evento</TableCell>
  //           <TableCell  align="right">Acciones del evento</TableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {data.map((data) => (
  //           <TableRow 
            
  //             key={data.id}
  //             sx={{ 
  //               '&:last-child td, &:last-child th': { border: 0 } }}
  //           >
              
  //             <TableCell align="left">{data.nombre}</TableCell>
  //             <TableCell align="left">{data.fecha}</TableCell>
  //             <TableCell align="left">{data.hora}</TableCell>
  //             <TableCell align="left">{data.ubicacion}</TableCell>
  //             <TableCell align="left">{data.descripcion}</TableCell>
  //             <TableCell align="left"> 
              
  //             <Stack direction="row" sx={{ mt: 1 }} spacing={2}>
  //       <Button  onClick={()=>dispatch(deleteData(data.id))} style={{borderColor:'#cc99ff',backgroundColor:'transparent', color:'#cc99ff'}}  variant="outlined" endIcon={<DeleteOutlineIcon />}>
  //       Eliminar
  //       </Button>
  //       <Button onClick={()=>{
  //         dispatch(onModal2({
  //           modal1:false,
  //           modal2:true,
  //           }));
  //         dispatch(llenarCampos(data))}} style={{borderColor: '#66ff99', backgroundColor:'transparent',color:'#66ff99'}} variant="outlined" endIcon={<EditIcon />}>
  //       Editar 
  //       </Button>
  //       </Stack>

  //             </TableCell>
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
      
  //   </TableContainer>

  <div className='holNN'>

    <Button onClick={()=>dispatch(onModal1({
            modal1:true,
            modal2:false,
            }))} style={{borderColor: '#6699ff', backgroundColor:'transparent',color:'#6699ff'}}  sx={{mb:2}} variant="outlined" endIcon={<BookmarkAddIcon />}>
    Agregar Evento
    </Button>
    <div className='desktopN' >
  <Table bordered  >
  <thead>
    <tr>
      <th>id</th>
      <th>nombre del evento</th>
      <th>fecha del evento</th>
      <th>hora del evento</th>
      <th>lugar del evento</th>
      <th>descripcion del evento</th>
      <th>funciones del evento</th>

    </tr>
  </thead>
  <tbody>
    {data.map((datas) => {
      return (
        <tr key={datas.id}>
          <td>{datas.id}</td>
                <td> {datas.nombre}</td>
                <td> {datas.fecha}</td>
                <td>{datas.hora}</td>
                <td> {datas.ubicacion}</td>
                <td> {datas.descripcion}</td>
                

          <td>
            <Stack direction="row" sx={{ mt: 1 }} spacing={2}>
        <Button  onClick={()=>dispatch(deleteData(datas.id))} style={{borderColor:'#6699ff',backgroundColor:'transparent', color:'#6699ff'}}  variant="outlined" endIcon={<DeleteOutlineIcon />}>
        Delete
        </Button>
       <Button onClick={()=>{
        dispatch(onModal2({
            modal1:false,
            modal2:true,
            }));
          dispatch(llenarCampos(datas))}} style={{borderColor: '#66ffcc', backgroundColor:'transparent',color:'#66ffcc'}} variant="outlined" endIcon={<EditIcon />}>
        Edit
        </Button>
        </Stack>
          </td>
        </tr>
      );
    })}
  </tbody>
</Table>
</div>

<div className="movileN">
  <Table>
        <tbody >
          {data.map((datas) => {
            return (
              <tr  key={datas.id}>
                <td style={{borderStyle:'none'}}>id: {datas.id}</td>
                <td style={{borderStyle:'none'}}>nombre del evento: {datas.nombre}</td>
                <td style={{borderStyle:'none'}}>fecha del evento: {datas.fecha}</td>
                <td style={{borderStyle:'none'}}>hora del evento: {datas.hora}</td>
                <td style={{borderStyle:'none'}}>ubicacion del evento: {datas.ubicacion}</td>
                <td style={{borderStyle:'none'}}>descripcion del evento: {datas.descripcion}</td>
                

                <td>
                  <p className="botorprueba">funciones:</p>{" "}
                  <Stack direction="row" sx={{ mt: 1 }} spacing={2}>
        <Button  onClick={()=>dispatch(deleteData(datas.id))} style={{borderColor:'#6699ff',backgroundColor:'transparent', color:'#6699ff'}}  variant="outlined" endIcon={<DeleteOutlineIcon />}>
        Eliminar
        </Button>
       <Button onClick={()=>{
        dispatch(onModal2({
            modal1:false,
            modal2:true,
            }));
          dispatch(llenarCampos(datas))}} style={{borderColor: '#66ffcc', backgroundColor:'transparent',color:'#66ffcc'}} variant="outlined" endIcon={<EditIcon />}>
        Editar 
        </Button>
        </Stack>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </div>

      </div>
  );



}

