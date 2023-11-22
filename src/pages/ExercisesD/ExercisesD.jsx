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
import { deleteExerciseRequest, getExercisesRequest } from '../../services/exercise';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ExercisesD = () => {
  const [exercises, setExercises] = useState([]);
  const [sorting, setSorting] = useState([]);
  const navigate = useNavigate();

  const onDeleteClick = async (id) => {
    console.log('id', id);

    const { data: res } = await deleteExerciseRequest(id);
    const newExercises = exercises.filter((exercise) => exercise._id !== id);
    setExercises(newExercises);
  };

  const onEditClick = async (id) => {
    navigate(`/dashboard/exercises/${id}`);
  };

  const columns = [
    {
      Header: 'ID',
      accessorKey: '_id',
    },
    {
      Header: 'Tipo',
      accessorKey: 'type',
    },
    {
      Header: 'Descripción',
      accessorKey: 'description',
    },
    {
      Header: 'Acciones',
      accessorKey: 'actions',
      cell: (props) => {
        return (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button
              style={{ backgroundColor: '#4caf50' }}
              onClick={() => onEditClick(props.row.original._id)}
            >
              Editar
            </Button>
            <Button
              style={{ backgroundColor: '#f44336' }}
              onClick={() => onDeleteClick(props.row.original._id)}
            >
              Eliminar
            </Button>
          </div>
        );
      },
    },
  ];
  const table = useReactTable({
    data: exercises,
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
      console.log(res.data);
      setExercises(res.data);
    };
    getUsers();
  }, []);

  return (
    <>
      <ReturnHeader title={'Ejercicios'} />
      <Main>
        <LinkStyled to='/dashboard/exercises/add'>Crear Ejercicio</LinkStyled>
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
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
`;

const LinkStyled = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #00b5e2;
  width: 20%;
  margin: 1rem;
  padding: 1rem;
`;
export default ExercisesD;
