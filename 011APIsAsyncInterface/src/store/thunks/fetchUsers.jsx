import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk ('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');
    //response.data === [{i: 1, name: "myra"}]

    //DEV ONLY!!!
    //await pause (3000);

    return response.data;
});

// lo que se envia y lo que se busca en el reducer

/* fetchUsers.pending === 'users/fetch/pending'
fetchUsers.fulfilled === 'users/fetch/fulfilled'
fetchUsers.rejected === 'users/fetch/rejected' */

//DEV ONLY!!!
const pause = (duration) => {
    return new Promise ((resolve) => {
        setTimeout(resolve, duration)
    });
};

export {fetchUsers};