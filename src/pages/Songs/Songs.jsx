import { useEffect } from 'react';
import ReturnHeader from '../../components/ReturnHeader/ReturnHeader';
import styled from 'styled-components';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';
import { useState } from 'react';
import { getExercisesRequest } from '../../services/exercise';
import data from '../../data/music.json';

const Songs = () => {
  const [exercises, setExercises] = useState([]);
  const [sorting, setSorting] = useState([]);

  const { songs } = data;

  const onDeleteClick = async (id) => {
    const newExercises = exercises.filter((exercise) => exercise._id !== id);
    setExercises(newExercises);
  };

  const onEditClick = async (id) => {};

  const columns = [
    {
      Header: 'Title',
      accessorKey: 'title',
    },
  ];
  const table = useReactTable({
    data: songs,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });
  useEffect(() => {
    const getUsers = async () => {
      const { data: res } = await getExercisesRequest(undefined);

      setExercises(res.data);
    };
    getUsers();
  }, []);

  return (
    <>
      <ReturnHeader title={'Ejercicios'} />

      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                  {flexRender(header.column.columnDef.Header, header.getContext())}
                  {{ asc: '🔼', desc: '🔽' }[header.column.getIsSorted() ?? null]}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Button = styled.button`
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
`;
export default Songs;
