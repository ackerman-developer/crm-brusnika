import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchLands } from '../../store/land-data/api-action';
import { getLands } from '../../store/land-data/land-data.selectors';


export const LandTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const lands = useAppSelector(getLands) // Замените на ваш редьюсер и название свойства с землями

  useEffect(() => {
    dispatch(fetchLands());
  }, [dispatch]);

  return (
    <div>
      <h2>Список земель:</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            {/* Добавьте другие заголовки для других полей */}
          </tr>
        </thead>
        <tbody>
          {lands.map((land) => (
            <tr key={land.id}>
              <td>{land.id}</td>
              <td>{land.registerNumber}</td>
              {/* Отображайте другие поля для каждой земли */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

