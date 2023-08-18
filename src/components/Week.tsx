interface WeekProps {
    isPainted: boolean
}

const Week = ({ isPainted } : WeekProps) => {
  return (
    <div className={`week ${isPainted ? 'painted' : ''}`} />
  )
}

export default Week