import friendsList from "./data/friends.json";
import Friends from "./components/Friends";

const App = () => {
  return (
    <Friends itemsArray={friendsList}/>
  )
}

export default App;
