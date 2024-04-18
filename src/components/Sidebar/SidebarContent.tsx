import './SidebarContent.scss'
import Select from 'react-select'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../utils/hooks'

const SidebarContent = () => {
    
    interface option{
        value: string,
        label: string
    }
    
    const [options, setOptions] = useState<option[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const { list } = useAppSelector((state) => state.fetchReducer);
    
    useEffect(() => {
        if (!isOpen){
            setIsOpen(true);
            list?.map((country, i) => {
                if (options.length < 250) options.push({value: country?.name.official, label: country?.name.common});
            });
            setOptions(options);
        }
        console.log(options);
    },[]); 

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
            </div>
        </div>
    )
}

export default SidebarContent;