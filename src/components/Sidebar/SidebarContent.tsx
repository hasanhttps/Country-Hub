import './SidebarContent.scss'
import { useState } from 'react'
import Select from 'react-select'
import {Box}   from '@mui/material'
import Slider from '@mui/material/Slider'
import { useAppDispatch } from '../../utils/hooks'
import { fetchCountries, fetchCountriesIndependent } from '../../utils/actions'

const SidebarContent = () => {    

    interface option{
        value: string,
        label: string
    }
    
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<number[]>([450, 200000000]);
    const options: option[] = [
        {value: "europe", label: "Europe"},
        {value: "asia", label: "Asia"},
        {value: "africa", label: "Africa"},
        {value: "americas", label: "Americas"},
        {value: "oceania", label: "Oceania"},
        {value: "northamerica", label: "North America"},
    ]

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const handleAll = () => {
        let allbt = document.getElementById('all');
        let yesbt = document.getElementById('yes');
        let nobt = document.getElementById('no');
        
        allbt!.style.color = '#1890FF';
        allbt!.style.border = '1px solid #1890FF';

        yesbt!.style.color = 'black';
        yesbt!.style.border = '1px solid #D9D9D9';

        nobt!.style.color = 'black';
        nobt!.style.border = '1px solid #D9D9D9';

        dispatch(fetchCountries());
    } 
    
    const handleYes = () => {
        let allbt = document.getElementById('all');
        let yesbt = document.getElementById('yes');
        let nobt = document.getElementById('no');

        yesbt!.style.color = '#1890FF';
        yesbt!.style.border = '1px solid #1890FF';

        allbt!.style.color = 'black';
        allbt!.style.border = '1px solid #D9D9D9';

        nobt!.style.color = 'black';
        nobt!.style.border = '1px solid #D9D9D9';

        dispatch(fetchCountriesIndependent("true"));
    } 

    const handleNo = () => {
        let allbt = document.getElementById('all');
        let yesbt = document.getElementById('yes');
        let nobt = document.getElementById('no');

        nobt!.style.color = '#1890FF';
        nobt!.style.border = '1px solid #1890FF';

        allbt!.style.color = 'black';
        allbt!.style.border = '1px solid #D9D9D9';

        yesbt!.style.color = 'black';
        yesbt!.style.border = '1px solid #D9D9D9';

        dispatch(fetchCountriesIndependent("false"));
    } 
    
    return (
        <div className='sidebar-content'>
            <p>Filters</p>
            <div className='lower-part'>
                <div className='independed'>
                    <p>Independed</p>
                    <div className='buttons'>
                        <button id='all' className='all-bt' onClick={handleAll}>All</button>
                        <button id='yes' className='yes-bt' onClick={handleYes}>Yes</button>
                        <button id='no' className='no-bt' onClick={handleNo}>No</button>
                    </div>
                </div>

                <div className='region'>
                    <p>Region</p>
                    <div className='region-container'>
                        <Select isMulti options={options} />
                    </div>
                </div>

                <div className='population'>
                    <p>Population</p>
                    <Box sx={{ width: 214 }}>
                        <Slider
                        min={450}
                        max={1430000000}
                        getAriaLabel={() => 'Population'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        />
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default SidebarContent;