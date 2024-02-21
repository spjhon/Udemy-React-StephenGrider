import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk('users/remove', async (user) => {
    const response = await axios.delete(`http://localhost:3005/users/${user.id}`);

    // Retorna user para que el payload sea el user y poder realizar el fulfilled y cambio de state en el slice
    return user;
});

export {removeUser};