import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Curiosamente el users/fetch parece estar al revez pero no, es para el dipatch type para el action de la store ya que se va a
//guardar en el state de users
const fetchUsers = createAsyncThunk ('users/fetchs', async () => {
    const response = await axios.get('http://localhost:3005/users');
    //response.data === [{i: 1, name: "myra"}]
   
    //DEV ONLY!!!
    //await pause (3000);
    //El return siempre va a ser el payload de el llamado en el slice
    return response.data;
});

// lo que se envia y lo que se busca en el reducer

/* fetchUsers.pending === 'users/fetch/pending'
fetchUsers.fulfilled === 'users/fetch/fulfilled'
fetchUsers.rejected === 'users/fetch/rejected' */


//OJO, asi es como funciona la cosa, en el slice se pone un listener para el action type que se genera automaticamente graicas al createAsyncThunk
//cuando el async no ha regresado la info pues se manda un action type creado automaticamente por createasyncthunk de tipo pending

//DEV ONLY!!!
const pause = (duration) => {
    return new Promise ((resolve) => {
        setTimeout(resolve, duration)
    });
};

export {fetchUsers};