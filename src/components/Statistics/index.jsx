const Statistic = propsStat => {
  const {titleStat, dataStat} = propsStat;

  const statMarkup = dataStat.map((stat, idx) => {
    const elementStyle = {
      statStyle: {
        backgroundColor: stat.background
      }
    }
    return (
      <li id={stat.id} key={idx} className="item" style={elementStyle.statStyle}>
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}%</span>
      </li>
    );
  })

  return (
    <>
      <section className="statistic">
        <h2>{titleStat}</h2>
        <ul>{statMarkup}</ul>
      </section>
    </>
  )
}
export default Statistic;
