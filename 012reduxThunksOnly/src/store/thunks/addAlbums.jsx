import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {faker} from '@faker-js/faker'

const addAlbums = createAsyncThunk ('albums/add', async (user) => {
    const response = await axios.post (`http://localhost:3005/albums/`, {
        title: faker.commerce.productName(),
        userId: user.id
    });

    return response.data;
});

export {addAlbums};