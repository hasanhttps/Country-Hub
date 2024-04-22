import { AppDispatch } from './store';
import { fetchActions } from './fetches';
import { getCountries, getCountriesByName, getCountriesIndependent } from '../services/api';

export const fetchCountries = () => async (dispatch: AppDispatch) => {
  try{ 
    dispatch(fetchActions.Request());
    const response = await getCountries();
    dispatch(fetchActions.Success(response.data));
  } catch (error: any) {
    dispatch(fetchActions.Error(error.messsage));
  }
}

export const fetchCountriesByName = (name: string, category: string) => async (dispatch:AppDispatch) => {
  try{ 
    dispatch(fetchActions.Request());
    const response = await getCountriesByName(name, category);
    console.log(response.data);
    dispatch(fetchActions.Success(response.data));
  } catch (error: any) {
    dispatch(fetchActions.Error(error.messsage));
  }
}

export const fetchCountriesIndependent = (isIndependent: string) => async (dispatch:AppDispatch) => {
  try{ 
    dispatch(fetchActions.Request());
    const response = await getCountriesIndependent(isIndependent);
    console.log(response.data);
    dispatch(fetchActions.Success(response.data));
  } catch (error: any) {
    dispatch(fetchActions.Error(error.messsage));
  }
}