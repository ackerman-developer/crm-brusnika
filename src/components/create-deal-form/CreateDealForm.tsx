import { useState } from 'react'
import styles from './CreateDealForm.module.scss'
import { LandFormData } from '../../types/types'

export default function CreateDealForm():JSX.Element{
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
  }

  return(
    <form className={styles.component} onSubmit={handleSubmit}>
      <div className={styles.inputData}>
        <label>
          Регистрационный номер:
          <input
            type="text"
            name="registerNumber"
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
            value={formData.searchObject}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type='submit'>Добавить</button>
    </form>
  )
}
