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
        {id:1, nombre:'evento', fecha:'2023-11-09', hora:'01:10:12', ubicacion:'tepotzotlan', descripcion:'ir al colegio'},
        {id:2, nombre:'evento', fecha:'2023-12-09', hora:'02:11:12', ubicacion:'tepotzotlan', descripcion:'ir al gymnasio'},
        {id:3, nombre:'evento', fecha:'2023-06-09', hora:'03:10:12', ubicacion:'tepotzotlan', descripcion:'ir a la playa'},
        {id:4, nombre:'evento', fecha:'2023-02-09', hora:'01:10:12', ubicacion:'tepotzotlan', descripcion:'ir al colegio'},
        {id:5, nombre:'evento', fecha:'2023-01-09', hora:'02:11:12', ubicacion:'tepotzotlan', descripcion:'ir al gymnasio'},
        {id:6, nombre:'evento', fecha:'2023-04-09', hora:'03:10:12', ubicacion:'tepotzotlan', descripcion:'ir al trabajo'},
        {id:7, nombre:'evento', fecha:'2023-06-09', hora:'01:10:12', ubicacion:'tepotzotlan', descripcion:'buscar posters'},
        {id:8, nombre:'evento', fecha:'2023-05-09', hora:'02:11:12', ubicacion:'tepotzotlan', descripcion:'ver a mi familia'},
        {id:9, nombre:'evento', fecha:'2023-07-09', hora:'03:10:12', ubicacion:'tepotzotlan', descripcion:'ver amis amigos'},
        {id:10, nombre:'evento', fecha:'2023-07-09', hora:'01:10:12', ubicacion:'tepotzotlan', descripcion:'ir al colegio'},
        {id:11, nombre:'evento', fecha:'2023-07-09', hora:'02:11:12', ubicacion:'tepotzotlan', descripcion:'ver a la plaza'}
        
        
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



        
