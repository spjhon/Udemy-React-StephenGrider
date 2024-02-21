import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removePhoto = createAsyncThunk ('photos/remove', async (photo) => {
    const response = await axios.delete (`http://localhost:3005/photos/${photo.id}`);

    //se retorna user para que el payload sea el user para poder hacer el fullfiled y cambio de state en el slice
    return photo;
});

export {removePhoto};