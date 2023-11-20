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

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  } from "./lista.css";

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
    

    
    <TableContainer className='contenedor6' component={Paper}>
      <Button onClick={()=>dispatch(onModal1({
            modal1:true,
            modal2:false,
            }))} sx={{borderColor:'#ff00ff',color:'#ff00ff',mb:2}} variant="outlined" endIcon={<BookmarkAddIcon />}>
    Agregar Evento
    </Button>
      <Table className='tabla6' sx={{ minWidth: 670 }} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow>
            <TableCell className='celda6' align="left">nombre del evento</TableCell>
            <TableCell className='celda6' align="right">Fecha del evento</TableCell>
            <TableCell className='celda6' align="right">Hora del evento</TableCell>
            <TableCell className='celda6' align="right">Lugar del evento</TableCell>
            <TableCell className='celda6' align="right">Descripcion del evento</TableCell>
            <TableCell  align="right">Acciones del evento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow 
            
              key={data.id}
              sx={{ 
                '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="right">{data.nombre}</TableCell>
              <TableCell align="right">{data.fecha}</TableCell>
              <TableCell align="right">{data.hora}</TableCell>
              <TableCell align="right">{data.ubicacion}</TableCell>
              <TableCell align="right">{data.descripcion}</TableCell>
              <TableCell align="right"> 
              
              <Stack direction="row" sx={{ mt: 1 }} spacing={2}>
        <Button  onClick={()=>dispatch(deleteData(data.id))} sx={{borderColor:'#cc99ff',color:'#cc99ff'}} variant="outlined" endIcon={<DeleteOutlineIcon />}>
        Eliminar
        </Button>
        <Button onClick={()=>{
          dispatch(onModal2({
            modal1:false,
            modal2:true,
            }));
          dispatch(llenarCampos(data))}} sx={{borderColor:'#66ff99',color:'#66ff99'}} variant="outlined" endIcon={<EditIcon />}>
        Editar 
        </Button>
        </Stack>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
  );

}

