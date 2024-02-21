import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeAlbum = createAsyncThunk ('albums/remove', async (album) => {
    const response = await axios.delete (`http://localhost:3005/albums/${album.id}`);

    //se retorna user para que el payload sea el user para poder hacer el fullfiled y cambio de state en el slice
    return album;
});

export {removeAlbum};