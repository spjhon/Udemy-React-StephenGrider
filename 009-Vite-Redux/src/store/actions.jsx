import { createAction } from "@reduxjs/toolkit";
//este creo es un hoook en donde se utiliza el createAction que es propio de redux toolkit para dar un extra reducer que todos+
//los que esten conectados al store escuchen, que todos los slices escuchen
//ENTONCES ESTA ES UN ACTION perzonalizado para hechar ojo
//parece que el nombre apps no importa y tampoco el reset, es para dar con el punto de reseteo
//gracias al createAction es solo un creador de object para el reducer y se le puede agregar un payload y que tales
export const reset = createAction ('app/reset');