import "./App.css"
import { Header } from "./components/header";
function App() {
  const data = [
    {rank:1, name: "Domenic", points: "88,110", team: "dcode" },
    { rank:2,name: "Sally", points: "72,400", team: "Students" },
    {rank:3, name: "Nick", points: "52,300", team: "dcode"},
  ]
  return (
    <div className="App">
    <table>
        <thead>
        <th>Rank</th>
        <th>Name</th>
        <th>Points</th>
        <th>Team</th>
        </thead>
 
      {data.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.rank}</td>
            <td>{val.name}</td>
            <td>{val.points}</td>
            <td>{val.team}</td>
          </tr>
        )
      })}
    </table>
 
  </div>
  )
}

export default App;
