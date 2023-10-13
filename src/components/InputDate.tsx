interface InputDateProps {
    dates: string;
    setDates: (date: string) => void;
}

const InputDate: React.FC<InputDateProps> = ({ dates, setDates }) => {
    const maxDate = new Date().toISOString().slice(0, 10);
    return (
        <div>
            <input className="button__date" type="date" value={dates} max={maxDate} onChange={e => setDates(e.target.value)} />
        </div>
    );
}

export default InputDate;