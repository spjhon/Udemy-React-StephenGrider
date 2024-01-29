import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk ('users/renive', async (user) => {
    const response = await axios.delete (`http://localhost:3005/users/${user.id}`);

    //se retorna user para que el payload sea el user para poder hacer el fullfiled y cambio de state en el slice
    return user;
});

export {removeUser};