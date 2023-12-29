import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchLands } from '../../store/land-data/api-action';


export default function LandTable():JSX.Element {
  const dispatch = useAppDispatch()
  const lands = useAppSelector((state) => state.LANDS.lands)

  useEffect(() => {
    dispatch(fetchLands())
  }, [dispatch])

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
        {lands.map((land) =>
          <tr key={land.id}>
            <td>{land.id}</td>
            <td>{land.registerNumber}</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

