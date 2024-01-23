import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import store from "../../redux/store";
import { User } from "../../type";


export type RootState = ReturnType<typeof store.getState>;

const UserTable = () => {
  const data: User[] = useSelector(
    (state: RootState) => state.userReducer.data
  );

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'name', 
        header: 'Name',
        size: 100,
      },
      {
        accessorKey: 'age', 
        header: 'Age',
        size: 10,
      },
      {
        accessorKey: 'sex', 
        header: 'Sex',
        size: 20,
      },
      {
        accessorKey: 'mobile', 
        header: 'Mobile No',
        size: 100,
      },
      {
        accessorKey: 'govIdType', 
        header: 'Gov Id Type',
        size: 30,
      },
      {
        accessorKey: 'govIdNo', 
        header: 'Gov Id No',
        size: 100,
      },
      {
        accessorKey: 'address',
        header: 'Address',
        size: 150,
      },
      {
        accessorKey: 'country',
        header: 'Country',
        size: 20,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 20,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 20,
      },
      {
        accessorKey: 'pincode',
        header: 'Pincode',
        size: 20,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, 
    enableRowNumbers: true,

  });

  return <MaterialReactTable table={table} />;
};

export default UserTable;
