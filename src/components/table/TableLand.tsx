import { useAppSelector } from '../../hooks/redux-hooks';
import { getLands } from '../../store/land-data/land-data.selectors';

export default function LandTable():JSX.Element {
  const lands = useAppSelector(getLands)
  console.log('Lands in LandTable component:', lands);

  return (
    <div>
      <h2>Список земель:</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
          </tr>
        </thead>
        <tbody>
        {lands.map((land) => {
          console.log('Current land:', land);
          return (
            <tr key={land.id}>
              <td>{land.id}</td>
              <td>{land.registerNumber}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  )
}

