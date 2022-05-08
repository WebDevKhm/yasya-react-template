const Stat = ({userArray}) => {

  const loopStats = () =>

    Object.keys(userArray).map((user, id) =>
      <li key={id}>
        <span className={'label'}>{user}</span>
        <span className={'quantity'}>{userArray[user]}</span>
      </li>
    )

  return (
    <ul>
      {loopStats()}
    </ul>
  )
}

export default Stat;
