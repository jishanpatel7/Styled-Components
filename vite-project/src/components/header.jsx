
import { Table } from "./header-style";

export const Header = function Header() {
    const data = [
        {rank:1, name: "Domenic", points: "88,110", team: "dcode" },
        { rank:2,name: "Sally", points: "72,400", team: "Students" },
        {rank:3, name: "Nick", points: "52,300", team: "dcode"},
      ]
    return (
        <>
      <Table>
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
        
      </Table>

    </>
    
    )
}