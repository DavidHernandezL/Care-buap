import { useEffect } from 'react';
import ReturnHeader from '../../components/ReturnHeader/ReturnHeader';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';
import { useState } from 'react';
import { getUsersRequest } from '../../services/user';
import daysJS from 'dayjs';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [sorting, setSorting] = useState([]);

  const columns = [
    {
      Header: 'ID',
      accessorKey: 'uid',
    },
    {
      Header: 'Nombre',
      accessorKey: 'fullName',
    },
    {
      Header: 'Email',
      accessorKey: 'email',
    },
    {
      Header: 'Matricula',
      accessorKey: 'studentId',
    },
    {
      Header: 'Rol',
      accessorKey: 'role',
    },
    {
      Header: 'Creado',
      accessorKey: 'createdAt',
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
      const { data: res } = await getUsersRequest(undefined);
      res.data.forEach(
        (user) => (user.createdAt = daysJS(user.createdAt).format('DD/MM/YYYY'))
      );
      setUsers(res.data);
    };
    getUsers();
  }, []);
  return (
    <>
      <ReturnHeader title={'Usuarios'} />
      <h1 style={{ textAlign: 'center' }}>Todos los usuarios registrados</h1>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((a) => (
                <th key={a.id} onClick={a.column.getToggleSortingHandler()}>
                  {flexRender(a.column.columnDef.Header, a.getContext())}
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
    </>
  );
};
export default Users;
