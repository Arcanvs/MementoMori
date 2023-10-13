import { useState, useEffect } from 'react';
import { weeksInDates3 } from '../utils/weeks';
import Week  from './Week';
import InputDate from './InputDate';

const Memento = () => {
    const [weeks, setWeeks] = useState<boolean[][]>([]);
    const [dates, setDates] = useState('');

    useEffect(()=>{
		setWeeks(weeksInDates3(dates));
	}, [setDates, dates]);

    return (
        <>
            <h1>Memento Mori</h1>
            <InputDate dates={dates} setDates={setDates}  />
            <div className='dflex'> 
                {
                    weeks.map((block, index1) => (
                        <div className='wflex' key={index1}>
                        {block.map((week, index2) => (
                            <Week isPainted={week} key={index2} />
                        ))}
                        </div>
                    )
                )}
            </div>
        </>
    );
}

export default Memento;