import { useEffect, useState } from "react";
import styles from './EditLand.module.scss'
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { LandFormData } from "../../types/types";
import { editLandByID } from "../../store/land-data/api-action";

export function EditLand(): JSX.Element {
  const dispatch = useAppDispatch();
  const lands = useAppSelector((state) => state.LANDS.lands)
  const { id } = useParams<{ id?: string }>();
  const [formData, setFormData] = useState<LandFormData>({
    registerNumber: null,
    address: '',
    areaInMeters: '',
    aboutHolder: '',
    price: null,
    whoIsFound: ''
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
    dispatch(editLandByID({ id, ...formData }))
    // Сбросить форму при успешной отправке данных
    setFormData({
      registerNumber: null,
      address: '',
      areaInMeters: '',
      aboutHolder: '',
      price: null,
      whoIsFound: ''
    });
  }

  const land = lands.find((landItem) => landItem.id === id)

  useEffect(() => {
    if (land) {
      // Устанавливаем значения из land в formData при получении данных
      setFormData({
        registerNumber: land.registerNumber || null,
        address: land.address || '',
        areaInMeters: land.areaInMeters || '',
        aboutHolder: land.aboutHolder || '',
        price: land.price || null,
        whoIsFound: land.whoIsFound || '',
      });
    }
  }, [land]);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(editLandByID({ id }))
    }
  }, [dispatch, id])

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      {land && (
        <div>
          <label>
            Id земельного участка:
            <input
              type="text"
              name="registerNumber"
              placeholder='189093750'
              value={formData.registerNumber || ''}
              onChange={handleChange}
            />
          </label>
          <label>
            Id земельного участка:
            <input
              type="text"
              name="address"
              placeholder='189093750'
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Id земельного участка:
            <input
              type="text"
              name="areaInMeters"
              placeholder='189093750'
              value={formData.areaInMeters}
              onChange={handleChange}
            />
          </label>
          <label>
            Id земельного участка:
            <input
              type="text"
              name="aboutHolder"
              placeholder='189093750'
              value={formData.aboutHolder}
              onChange={handleChange}
            />
          </label>
          <label>
            Id земельного участка:
            <input
              type="text"
              name="price"
              placeholder='189093750'
              value={formData.price || ''}
              onChange={handleChange}
            />
          </label>
          <label>
            Id земельного участка:
            <input
              type="text"
              name="whoIsFound"
              placeholder='189093750'
              value={formData.whoIsFound}
              onChange={handleChange}
            />
          </label>
        </div>
      )}
      <button type='submit'>Добавить</button>
    </form>
  )
}
