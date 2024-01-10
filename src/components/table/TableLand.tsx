import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchLands } from '../../store/land-data/api-action';
import styles from './TableLand.module.scss'
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';


export default function LandTable():JSX.Element {
  const dispatch = useAppDispatch()
  const lands = useAppSelector((state) => state.LANDS.lands)

  useEffect(() => {
    dispatch(fetchLands())
  }, [dispatch])

  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>Регистрационный номер</th>
            <th>Адрес</th>
            <th>Площадь объекта</th>
            <th>Сведения о правообладателе</th>
            <th>Объявленная стоимость</th>
            <th>Канал поиска</th>
            <th>Ссылка</th>
          </tr>
        </thead>
        <tbody>
        {lands.map((land) =>
          <tr key={land.id}>
            <td>{land.registerNumber}</td>
            <td>{land.address}</td>
            <td>{land.areaInMeters} м²</td>
            <td>{land.aboutHolder}</td>
            <td>{land.price} рублей</td>
            <td>{land.whoIsFound}</td>
            <td>
              <Link to={`${AppRoute.land}/${land.id}`}>Перейти</Link>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

