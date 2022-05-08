import user from "data/users.json";
import Img from "../../image";
import Stat from "../Stats/Stat";

const Description = () => {

  return (
    user.map((person, id) =>
      <div key={id} className={'user-wrapper'}>
        <div className={'description'}>
          <Img src={person.avatar} alt={user.tag}/>
          <p className={'name'}>{person.username}</p>
          <p className={'tag'}>{person.tag}</p>
          <p className={'location'}>{person.location}</p>
        </div>
        <Stat userArray={person.stats} />
      </div>
    )
  )
}

export default Description;
