import { useEffect, useMemo } from 'react';
import { useTable, usePagination, useFilters, TableInstance } from 'react-table';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchLands } from '../../store/land-data/api-action';
import styles from './TableLand.module.scss';
import { LandData } from '../../types/landData';

export default function LandTable(): JSX.Element {
  const dispatch = useAppDispatch();
  const lands = useAppSelector((state) => state.LANDS.lands);

  useEffect(() => {
    dispatch(fetchLands());
  }, [dispatch]);

  const columns = useMemo(
    () => [
      {
        Header: 'Регистрационный номер',
        accessor: 'registerNumber',
      },
      {
        Header: 'Адрес',
        accessor: 'address',
      },
      {
        Header: 'Площадь объекта',
        accessor: 'areaInMeters',
      },
      {
        Header: 'Сведения о правообладателе',
        accessor: 'aboutHolder',
      },
      {
        Header: 'Объявленная стоимость',
        accessor: 'price',
      },
      {
        Header: 'Канал поиска',
        accessor: 'whoIsFound',
      },
      {
        Header: 'Ссылка на объект',
        accessor: 'link',
        Cell: ({ row }) => (
          <Link to={`${AppRoute.land}/${row.original.id}`}>Перейти в объект</Link>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    state: { pageIndex, pageSize },
    setPageSize,
  }: TableInstance<LandData> = useTable<LandData>(
    {
      columns,
      data: lands,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    usePagination
  );

  return (
    <div className={styles.table}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <span>
          Страница{' '}
          <strong>
            {pageIndex + 1} из {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Перейти на страницу:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
              nextPage(pageNumber);
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Показать {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
