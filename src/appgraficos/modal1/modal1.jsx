import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import BackspaceIcon from '@mui/icons-material/Backspace';
import BeenhereIcon from '@mui/icons-material/Beenhere';

import { useFormik } from 'formik';
import  * as Yup from 'yup';

import {useSelector,useDispatch} from "react-redux";
import {createData} from "../reducers/data/dataSlice.jsx";
import {onModal1} from "../reducers/modal/modalSlice.jsx";

import "./modal1.css";

import {Modal,ModalBody} from "reactstrap";


export function Modal1() {
 
    const dispatch= useDispatch()
    const data = useSelector((state)=>state.data)
    const modal = useSelector((state)=>state.modal)
 
  

  const initialValues= {
    nombre:'',
    fecha:'',
    hora:'',
    ubicacion:'',
    descripcion:'',
  }

  
  const onSubmit =(values)=>{
    dispatch(createData({id:data.length + 1, nombre: values.nombre, fecha:values.fecha, hora:values.hora, ubicacion: values.ubicacion, descripcion: values.descripcion}));
    dispatch(onModal1({modal1:false,modal2:false}));
    document.getElementById("myform").reset()
    values.nombre=''
    values.fecha=''
    values.hora=''
    values.ubicacion=''
    values.descripcion=''
  }             

  const validationSchema = Yup.object({
    nombre:Yup.string().required('campo requerido'),
    fecha:Yup.string().required('campo requerido'),
    hora:Yup.string().required('campo requerido'),
    ubicacion:Yup.string().required('campo requerido'),
    descripcion:Yup.string().min(10,'la descripcion debe ser minimo de 10 letras').max(50,'la descripcion debe ser de maximo 50 caracteres').required('campo requerido')
  })

  const {handleChange, handleSubmit, errors} = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

 
  return (
    <div>
      <Modal isOpen={modal.modal1}>

        <ModalBody>
        <h5 style={{color:'#99ffcc'}}>Crea un nuevo evento</h5>
        <h6> Porfavor llena todos los campos para crear un evento</h6>
        
        <form id='myform' onSubmit={handleSubmit}>
        <Grid container sx={{ mt: 4 }} >
        <Grid item xs={12}>
        <div>
          <label >nombre:</label>
            <input type="text"
              className="form-control"
              name="nombre"
              onChange={handleChange}
              
            />
          <p className='advertencias'>{errors?.nombre}</p>
        </div>
        </Grid>
        
        <Grid item style={{marginRight:'10px'}}>
        <div>
          <label>fecha del evento:</label>
            <input type="date"
              className="form-control"
              name="fecha"
              onChange={handleChange}
              
            />
          <p className='advertencias'>{errors?.fecha}</p>
        </div>
        </Grid>
        
        <Grid item >
        <div>
          <label>hora del evento:</label>
          <input type="time"
              className="form-control"
              name="hora"
              onChange={handleChange}
            />
          <p className='advertencias'>{errors?.hora}</p>
        </div>
        </Grid>

        <Grid item xs={12} >
        <div>
          <label>ubicacion del evento:</label>
          <input type="text"
              className="form-control"
              name="ubicacion"
              onChange={handleChange}
            />
          <p className='advertencias'>{errors?.ubicacion}</p>
        </div>
        </Grid>

        <Grid item xs={12} >
        <div>
          <label>descripcion del evento:</label>
          <input type="text"
              className="form-control"
              name="descripcion"
              onChange={handleChange}
            />
          <p className='advertencias'>{errors?.descripcion}</p>
        </div>
        </Grid>
        </Grid>
        
        <div style={{display:'flex', flexDirection:'row-reverse'}}>
        <Stack direction="row"  spacing={2}>
          <Button onClick={()=>
                        dispatch(onModal1({
                         modal1:false,
                         modal2:false,
                         }))}
          style={{borderColor:'#6699ff',backgroundColor:'transparent', color:'#6699ff'}} 
          variant="outlined" 
          endIcon={<BackspaceIcon />}>
          Close
          </Button>
            
          <Button 
          type='submit' 
          style={{borderColor: '#66ffcc', backgroundColor:'transparent',color:'#66ffcc'}} 
          variant="outlined" 
          endIcon={<BeenhereIcon />}>
          Save
          </Button>
        </Stack>
        </div>

        </form>
     
      </ModalBody>     
      </Modal>
      
       
    </div>
  );
}







