import { useState, useEffect } from 'react';
import { weeksInDates3 } from './utils/weeks';
import Week  from './components/Week';

function App() {
  const [weeks, setWeeks] = useState<boolean[][]>([]);
  /* for (let i = 0; i<weeksInDates('1960-06-06'); i++){
    persons.push(<Week isPainted={false} />)
  } */
  useEffect(()=>{
		setWeeks(weeksInDates3('1960-06-06'));
	}, []);

  return (
    <>
      <h1>Memento Mori</h1>
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
  )
}

export default App
