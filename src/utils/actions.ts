import { AppDispatch } from './store';
import { fetchActions } from './fetches';
import { getCountries } from '../services/api';

export const fetchCountries = () => async (dispatch: AppDispatch) => {
  try{ 
    dispatch(fetchActions.Request());
    const response = await getCountries();
    dispatch(fetchActions.Success(response.data));
  } catch (error: any) {
    dispatch(fetchActions.Error(error.messsage))  
  }
}