import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useEffect } from "react";
import { deleteLandByID, fetchLandsByID } from "../../store/land-data/api-action";
import { AppRoute } from "../../utils/const";
import styles from './AboutLand.module.scss'
import deleteIcon from '../../assets/delete.svg'
import editIcon from '../../assets/edit.svg'
import createIcon from '../../assets/create.svg'
import Swal from "sweetalert2";

export function AboutLand(): JSX.Element {
  const dispatch = useAppDispatch()
  const lands = useAppSelector((state) => state.LANDS.lands)
  const { id } = useParams<{ id?: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchLandsByID({ id }))
    }
  }, [dispatch, id])

  const land = lands.find((landItem) => landItem.id === id)

  const handleDelete = async () => {
    if (id && land) {
      try {
        const result = await Swal.fire({
          title: "Вы уверены?",
          text: "Вы не сможете это вернуть!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Да, удалите!",
          cancelButtonText: "Отмена"
        })

        if (result.isConfirmed) {
          await dispatch(deleteLandByID(id));
          Swal.fire({
            title: "Удалено!",
            text: "Данный земельный участок был удален.",
            icon: "success"
          })
          navigate(AppRoute.archiveLand)
        } else {
          // Действия, которые нужно выполнить при отмене удаления
        }
      } catch (error) {
        console.error('Ошибка при удалении земельного участка:', error)
      }
    }
  }

  return (
    <>
      {land ? (
        <div className={styles.component}>
          <h2>Информация о земельном участке</h2>
          <div className={styles.data}>
            <p>Регистрационный номер</p>
            <p>{land.registerNumber}</p>
          </div>
          <div className={styles.data}>
            <p>Адрес</p>
            <p>{land.address}</p>
          </div>
          <div className={styles.data}>
            <p>Площадь объекта</p>
            <p>{land.areaInMeters} м²</p>
          </div>
          <div className={styles.data}>
            <p>Сведения о правообладателе</p>
            <p>{land.aboutHolder}</p>
          </div>
          <div className={styles.data}>
            <p>Объявленная стоимость</p>
            <p>{land.price} рублей</p>
          </div>
          <div className={styles.data}>
            <p>Канал поиска</p>
            <p>{land.whoIsFound}</p>
          </div>
          <div className={styles.title}>
            <hr></hr>
            <h2>Действия</h2>
            <hr></hr>
          </div>
          <div className={styles.buttons}>
            <div className={styles.create}>
              <button onClick={() => navigate(`${AppRoute.createEntity}/${land.id}`)}><img src={createIcon} alt=''/>
                Создать паспорт объекта</button>
            </div>
            <div className={styles.edit}>
              <button onClick={() => navigate(`${AppRoute.editLand}/${land.id}`)}><img src={editIcon} alt=''/> Редактировать</button>
            </div>
            <div className={styles.delete}>
              <button onClick={handleDelete}><img src={deleteIcon} alt=''/> Удалить</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Земельный участок не найден</p>
      )}
    </>
  )
}
