import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFetchReducer {
  list: object[]
  error: string
}

const initialState: IFetchReducer = {
  list: [],
  error: ''
}

export const FetchSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    Request: (state) => {
    },
    Success: (state, action: PayloadAction<object[]>) => {
      state.list = action.payload;
      state.error = '';
    },
    Error: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
  }
})

export const fetchReducer = FetchSlice.reducer
export const fetchActions = FetchSlice.actions
