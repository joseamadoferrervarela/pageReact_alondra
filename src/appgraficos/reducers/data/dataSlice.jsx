import { createSlice } from "@reduxjs/toolkit";

// export interface Evento{
//     id:number;
//     nombre:string;
//     hora:string;
//     ubicacion:string;
//     descripcion:string;
// }
// const initialState: Evento[] =[
//     {id:1, nombre:'mañana1', hora:'09:10:12', ubicacion:'tepotzotlan', descripcion:'mi prueba'},
//     {id:2, nombre:'mañana2', hora:'09:10:12', ubicacion:'tepotzotlan', descripcion:'mi prueba'},
//     {id:3, nombre:'mañana3', hora:'09:10:12', ubicacion:'tepotzotlan', descripcion:'mi prueba'}
// ]


const initialState=[
        {id:1, nombre:'ir al colegio', fecha:'2023-11-09', hora:'01:10:12', ubicacion:'tepotzotlan', descripcion:'ir al colegio para presentar mi examen final'},
        {id:2, nombre:'ir a una fiesta', fecha:'2023-12-09', hora:'02:11:12', ubicacion:'tepotzotlan', descripcion:'ir a una fiesta con mi novia'},
        {id:3, nombre:'ir a la nadar', fecha:'2023-06-09', hora:'03:10:12', ubicacion:'tepotzotlan', descripcion:'ir a nadar con mis  nuevos amigos'},
        {id:4, nombre:'ir al colegio', fecha:'2023-02-09', hora:'01:10:12', ubicacion:'tepotzotlan', descripcion:'ir al colegio a solicitar una constancia'},
        {id:5, nombre:'ir al gimnasio', fecha:'2023-01-09', hora:'02:11:12', ubicacion:'tepotzotlan', descripcion:'ir al gimnasio, a pagar mi membresia'},
        {id:6, nombre:'ir al trabajo', fecha:'2023-04-09', hora:'03:10:12', ubicacion:'tepotzotlan', descripcion:'ir al trabajo para una reunion'},
        {id:7, nombre:'un celular', fecha:'2023-06-09', hora:'01:10:12', ubicacion:'tepotzotlan', descripcion:'buscar un celular de alta gama'},
        {id:8, nombre:'ver a mi familia', fecha:'2023-12-09', hora:'02:11:12', ubicacion:'tepotzotlan', descripcion:'ver a mi familia para navidad'},
        {id:9, nombre:'buscar un departamento', fecha:'2023-07-09', hora:'03:10:12', ubicacion:'tepotzotlan', descripcion:'conseguir un departamento para vivir aqui ahora'},
        {id:10, nombre:'ir al concierto', fecha:'2023-07-09', hora:'02:11:12', ubicacion:'tepotzotlan', descripcion:'ir al concierto de blakpink'},
        {id:11, nombre:'ir al colegio', fecha:'2023-07-09', hora:'02:11:12', ubicacion:'tepotzotlan', descripcion:'ir al colegio a presentar mi examen final'},
        
        
        
        
    ]

const dataSlice=createSlice({
    name:'data',
    initialState:initialState,
    reducers:{
        deleteData: (state, action) => {
            
        const id = action.payload
            const data = state.filter(data => data.id !== id)
            const data_ = data.map((data, ind) => {
            return { ...data, id: ind + 1 };
            });
            return data_

        },

        createData:(state, action)=>{
            const hol=action.payload
            console.log(hol)
            return [...state, hol]
        },

        actualizarData:(state, action) => {
            console.log(action.payload)
            const nuevadata = state.map(data => {
              if (data.id === action.payload.id) {
                return {
                  ...data,
                  nombre: action.payload.nombre,
                  fecha:action.payload.fecha,
                  hora: action.payload.hora,
                  ubicacion: action.payload.ubicacion,
                  descripcion: action.payload.descripcion
                };
              }
            
              return data;
            });
            console.log(nuevadata)
            state=nuevadata
            
            return state
        }
        
    }
    }
    )

export const {deleteData}= dataSlice.actions
export const {createData}= dataSlice.actions
export const {actualizarData}= dataSlice.actions
export default dataSlice.reducer



        
