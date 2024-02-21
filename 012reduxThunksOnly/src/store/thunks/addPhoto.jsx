import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {faker} from '@faker-js/faker'

const addPhoto = createAsyncThunk ('photos/add', async (album) => {
    const response = await axios.post (`http://localhost:3005/photos/`, {
        albumId: album.id,
        url: faker.image.abstract(150, 150, true),
    });

    return response.data;
});

export {addPhoto};