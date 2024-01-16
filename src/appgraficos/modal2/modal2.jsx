import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import BackspaceIcon from '@mui/icons-material/Backspace';
import BeenhereIcon from '@mui/icons-material/Beenhere';

import {Formik} from 'formik';
import  * as Yup from 'yup'

import {useSelector,useDispatch} from "react-redux";
import {onModal2} from "../reducers/modal/modalSlice.jsx";
import {actualizarData} from "../reducers/data/dataSlice.jsx";

import "./modal2.css";

import {Modal,ModalBody} from "reactstrap";

export function Modal2() {

  const modal = useSelector((state)=>state.modal)
  const campos = useSelector((state)=>state.edit)
  const dispatch= useDispatch()
  

  const initialValues= {
    nombre:campos.nombre,
    fecha:campos.fecha,
    hora:campos.hora,
    ubicacion:campos.ubicacion,
    descripcion:campos.descripcion
  }
  
  const onSubmit =(values)=>{
    dispatch(actualizarData({id:campos.id, nombre: values.nombre, fecha: values.fecha, hora:values.hora, ubicacion: values.ubicacion, descripcion: values.  descripcion}));
    dispatch(onModal2({modal1:false,modal2:false}));
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


  return (
    <div>
      
      <Modal isOpen={modal.modal2} >

        <ModalBody>
        <h5 style={{color:'#99ffcc'}}>Edita tu evento</h5>
        <h6> Edita los campos que tu quieras</h6>

        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
           {({values,handleChange,handleSubmit,errors})=>(
          <form id='myform' onSubmit={handleSubmit}>
        
        <Grid container sx={{ mt: 4 }} >
        <Grid  item xs={12}>
        <div>
          <label >nombre:</label>
            <input type="text"
              className="form-control"
              name="nombre"
              onChange={handleChange}
              value={values.nombre}
            />
          <p className='advertencias'>{errors?.nombre}</p>
        </div>
        </Grid>
        
        <Grid style={{marginRight:'10px'}} item >
        <div>
          <label>fecha del evento:</label>
            <input type="date"
              className="form-control"
              name="fecha"
              onChange={handleChange}
              value={values.fecha}
            />
          <p className='advertencias'>{errors?.fecha}</p>
        </div>
        </Grid>
        
        <Grid item  >
        <div>
          <label>hora del evento:</label>
          <input type="time"
              className="form-control"
              name="hora"
              onChange={handleChange}
              value={values.hora}
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
              value={values.ubicacion}
            />
          <p className='advertencias'>{errors?.ubicacion}</p>
        </div>
        </Grid>

        <Grid item xs={12}>
        <div>
          <label>descripcion del evento:</label>
          <input type="text"
              className="form-control"
              name="descripcion"
              onChange={handleChange}
              value={values.descripcion}
            />
          <p className='advertencias'>{errors?.descripcion}</p>
        </div>
        </Grid>
        </Grid>
         
        <div style={{display:'flex', flexDirection:'row-reverse'}}>
        <Stack direction="row"  spacing={2}>
           <Button onClick={()=>
                         dispatch(onModal2({
                          modal1:false,
                          modal2:false,
                       }))}
           style={{borderColor:'#6699ff',backgroundColor:'transparent', color:'#6699ff'}}  
           variant="outlined"  
           endIcon={<BackspaceIcon />}>
           Close
           </Button>
     
           
           <Button disableRipple='true' 
           type='submit' 
           style={{borderColor: '#66ffcc', backgroundColor:'transparent',color:'#66ffcc'}} 
           variant="outlined"   
           endIcon={<BeenhereIcon />}>
           Save 
           </Button>
        </Stack>
        </div>

        </form>
        )}
        </Formik>
        
        </ModalBody>
      </Modal>
       
    </div>
  );
}







