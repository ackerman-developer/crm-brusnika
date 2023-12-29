import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { useEffect } from 'react'
import { fetchLandsByID } from '../../store/land-data/api-action'

export default function AboutLand(): JSX.Element {
  const dispatch = useAppDispatch()
  const lands = useAppSelector((state) => state.LANDS.lands)

  const { id } = useParams<{ id?: string }>()

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchLandsByID({ id }))
    }
  }, [dispatch, id])


  const land = lands.find((landItem) => landItem.id === id)

  return (
    <div>
      {land && (
        <div>
          <p>Регистрационный номер: {land.registerNumber}</p>
          <p>Адрес: {land.address}</p>
          <p>Площадь объекта: {land.areaInMeters} метров</p>
          <p>Сведения о правообладателе: {land.aboutHolder}</p>
          <p>Объявленная стоимость: {land.price}</p>
          <p>Канал поиска: {land.whoIsFound}</p>
        </div>
      )}
    </div>
  )
}
