import { useState } from 'react'
import styles from './CreateDealForm.module.scss'
import { LandFormData } from '../../types/types'
import { createLand } from '../../store/land-data/api-action'
import { useAppDispatch } from '../../hooks/redux-hooks'

export default function CreateDealForm():JSX.Element{
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState<LandFormData>({
    registerNumber: null,
    address: '',
    square: '',
    aboutHolder: '',
    price: null,
    searchObject: ''
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
    dispatch(createLand(formData))
    setFormData({
      registerNumber: null,
      address: '',
      square: '',
      aboutHolder: '',
      price: null,
      searchObject: ''
    });
  }

  return(
    <form className={styles.component} onSubmit={handleSubmit}>
      <div className={styles.title}>
        <h1>Создать объект</h1>
      </div>
      <div className={styles.inputData}>
        <label>
          Регистрационный номер:
          <input
            type="text"
            name="registerNumber"
            placeholder='189093750'
            value={formData.registerNumber || ''}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.inputData}>
        <label>
          Cведения об адресе:
          <input
            type="text"
            name="address"
            placeholder='Мира, 32'
            value={formData.address}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.inputData}>
        <label>
          Площадь объекта:
          <input
            type="text"
            name="square"
            placeholder='100 кв. м.'
            value={formData.square}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.inputData}>
        <label>
          Сведения о правообладателе:
          <input
            type="text"
            name="aboutHolder"
            placeholder='ООО Название компании'
            value={formData.aboutHolder}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.inputData}>
        <label>
          Объявленная стоимость:
          <input
            type="text"
            name="price"
            placeholder='1 500 000 р'
            value={formData.price || ''}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.inputData}>
        <label>
          Канал поиска:
          <input
            type="text"
            name="searchObject"
            placeholder='Менеджер'
            value={formData.searchObject}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type='submit'>Добавить</button>
    </form>
  )
}
