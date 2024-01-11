import { useEffect } from 'react'
import styles from '../Table.module.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { fetchEntities } from '../../../store/entity-data/api-action'
import { Link } from 'react-router-dom'
import { AppRoute } from '../../../utils/const'

export default function TableObject():JSX.Element{
  const dispatch = useAppDispatch()
  const entities = useAppSelector((state) => state.ENTITY.entities)

  useEffect(() => {
    dispatch(fetchEntities())
  }, [dispatch])

  return(
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
            <th>Юридическая стоимость</th>
            <th>Разрешительная сторона</th>
            <th>Инженерно-геологические условия</th>
            <th>Наличие инженерных сетей</th>
            <th>Транспортную доступность</th>
            <th>Ссылка</th>
          </tr>
        </thead>
        <tbody>
        {entities.map((entity) =>
          <tr key={entity.id}>
            <td>{entity.land.registerNumber}</td>
            <td>{entity.land.address}</td>
            <td>{entity.land.areaInMeters} м²</td>
            <td>{entity.land.aboutHolder}</td>
            <td>{entity.land.price} рублей</td>
            <td>{entity.land.whoIsFound}</td>
            <td>{entity.juridicalCost} рублей</td>
            <td>{entity.permissiveSide}</td>
            <td>{entity.geotechnicalConditions}</td>
            <td>{entity.availabilityEngineeringNetworks}</td>
            <td>{entity.transportationaAccessibility}</td>
            <td>
              <Link to={AppRoute.main}>Перейти</Link>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}
