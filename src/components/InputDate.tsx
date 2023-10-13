const InputDate = ({dates , setDates}) => {
    const maxDate = new Date().toISOString().slice(0, 10);
    return (
        <div className="form-group">
            <input type="date" value={dates} max={maxDate} onChange={e => setDates(e.target.value)} />
        </div>
    );
}

export default InputDate;