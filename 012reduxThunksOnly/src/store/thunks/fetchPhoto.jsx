import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPhoto = createAsyncThunk ('photos/fetch', async (album) => {
    const response = await axios.get(`http://localhost:3005/photos?albumId=${album.id}`);
   
    return response.data;
});

export {fetchPhoto};