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
import {
  deleteProfessionalRequest,
  getProfessionalsRequest,
} from '../../services/professional';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProfessionalsD = () => {
  const [users, setUsers] = useState([]);
  const [sorting, setSorting] = useState([]);
  const navigate = useNavigate();

  const onDeleteClick = async (id) => {
    console.log('id', id);

    const { data: res } = await deleteProfessionalRequest(id);
    console.log(res);

    const newExercises = users.filter((exercise) => exercise._id !== id);
    setUsers(newExercises);
  };

  const onEditClick = async (id) => {
    console.log('id', id);
    navigate(`/dashboard/professionals/${id}`);
  };

  const columns = [
    {
      Header: 'ID',
      accessorKey: '_id',
    },
    {
      Header: 'Nombre',
      accessorKey: 'fullName',
    },
    {
      Header: 'Especialidad',
      accessorKey: 'type',
    },
    {
      Header: 'Dirección',
      accessorKey: 'address',
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
    data: users,
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
      const { data: res } = await getProfessionalsRequest(undefined);
      console.log(res.data);
      setUsers(res.data);
    };
    getUsers();
  }, []);
  return (
    <>
      <ReturnHeader title={'Usuarios'} />
      <Main>
        <LinkStyled to='/dashboard/professionals/add'>Agregar especialista</LinkStyled>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((a) => (
                  <th key={a.id} onClick={a.column.getToggleSortingHandler()}>
                    {flexRender(a.column.columnDef.header, a.getContext())}
                    {{ asc: '🔼', desc: '🔽' }[a.column.getIsSorted() ?? null]}
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
        <div>
          <PreviousButton onClick={table.getPaginationRowModel().previousPage}>
            Previous
          </PreviousButton>
          <NextButton onClick={table.getPaginationRowModel().nextPage}>Next</NextButton>
        </div>
      </Main>
    </>
  );
};

const Button = styled.button`
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
`;

const PreviousButton = styled.button`
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #ccc;
  margin-left: 1rem;
  width: 100px;
`;

const NextButton = styled.button`
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #ccc;
  margin-left: 1rem;
  width: 100px;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
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
export default ProfessionalsD;
