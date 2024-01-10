import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import styles from './CreateEntity.module.scss'
import { useEffect, useState } from 'react';
import { createEntity } from '../../store/entity-data/api-action';
import { fetchLandsByID } from '../../store/land-data/api-action';
import { EntityData } from '../../types/entityData';

export function CreateEntity():JSX.Element{
  const dispatch = useAppDispatch();
  const lands = useAppSelector((state) => state.LANDS.lands)
  const { id } = useParams<{ id?: string }>();
  const [formData, setFormData] = useState<EntityData>({
    landId: '',
    juridicalCost: null,
    permissiveSide: '',
    geotechnicalConditions: '',
    availabilityEngineeringNetworks: '',
    transportationaAccessibility: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(createEntity(formData))
    setFormData({
      landId: '',
      juridicalCost: null,
      permissiveSide: '',
      geotechnicalConditions: '',
      availabilityEngineeringNetworks: '',
      transportationaAccessibility: ''
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchLandsByID({ id }))
    }
  }, [dispatch, id])

  const land = lands.find((landItem) => landItem.id === id);

  return(
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.title}>
        <h1>Создать объект</h1>
      </div>
      {land && (
        <div>
          <p>Регистрационный номер: {land.registerNumber}</p>
          <p>Адрес: {land.address}</p>
          <p>Площадь объекта: {land.areaInMeters} метров</p>
          <p>Сведения о правообладателе: {land.aboutHolder}</p>
          <p>Объявленная стоимость: {land.price}</p>
          <p>Канал поиска: {land.whoIsFound}</p>
          <label>
            Id земельного участка:
            <input
              type="text"
              name="landId"
              placeholder='189093750'
              value={land.id}
              onChange={handleChange}
            />
          </label>
        </div>
      )}
      <div className={styles.inputData}>
        <label>
        Юридическая стоимость:
          <input
            type="text"
            name="juridicalCost"
            placeholder='189093750'
            value={formData.juridicalCost || ''}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.inputData}>
        <label>
          Разрешительная сторона:
          <input
            type="text"
            name="permissiveSide"
            placeholder='Мира, 32'
            value={formData.permissiveSide}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.inputData}>
        <label>
          Инженерно-геологические условия:
          <input
            type="text"
            name="geotechnicalConditions"
            placeholder='100 кв. м.'
            value={formData.geotechnicalConditions}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.inputData}>
        <label>
          Наличие инженерных сетей:
          <input
            type="text"
            name="availabilityEngineeringNetworks"
            placeholder='ООО Название компании'
            value={formData.availabilityEngineeringNetworks}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.inputData}>
        <label>
          Транспортную доступность:
          <input
            type="text"
            name="transportationaAccessibility"
            placeholder='1 500 000 р'
            value={formData.transportationaAccessibility}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type='submit'>Добавить</button>
    </form>
  )
}
