import { useState, useEffect } from 'react';
import { weeksInDates2 } from './utils/weeks';
import Week  from './components/Week';

function App() {
  const [weeks, setWeeks] = useState<boolean[]>([]);
  /* for (let i = 0; i<weeksInDates('1960-06-06'); i++){
    persons.push(<Week isPainted={false} />)
  } */
  useEffect(()=>{
		setWeeks(weeksInDates2('1960-06-06'));
	}, []);

  return (
    <>
      <h1>Memento Mori</h1>
      <div>
        {weeks.map((week, index) => (
          <Week isPainted={week} key={index} />
        ))}
      </div>
    </>
  )
}

export default App
