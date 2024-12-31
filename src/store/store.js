import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});

export default store;

//add this all: state.allPost, state.userPost, etc
//it will not send the request back it vl store all the data in store only 
//create postSlice and etc