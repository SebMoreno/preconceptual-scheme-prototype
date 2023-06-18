import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../database/db.ts";
import React, { useEffect, useRef, useState } from "react";
import { DataGrid, GridActionsCellItem, GridActionsColDef, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { EditToolbar } from "../EditToolbar.tsx";

export const TableDataGrid: React.FC<{ tableName: string }> = ({tableName}) => {
    const {current: table} = useRef(db.table(tableName));
    const {current: idProp} = useRef(table.schema.primKey.name);
    const {current: tableConstructor} = useRef<{ new(): unknown }>(table.schema.mappedClass as { new(): unknown });
    const elements = useLiveQuery<object[]>(() => table.toArray());
    const [rows, setRows] = useState<GridRowsProp>([]);
    useEffect(() => setRows(elements ?? []), [elements])

    const actionsColumn: GridActionsColDef = {
        editable: false,
        field: 'actions',
        type: 'actions',
        headerName: '',
        getActions: ({id}) => [
            <GridActionsCellItem
                icon={<DeleteIcon/>}
                label="Delete"
                onClick={async () => await table.delete(id)}
                color="inherit"
            />
        ]
    }
    const {current: columns} = useRef<GridColDef[]>(
        Object.getOwnPropertyNames(new tableConstructor())
            .map(key => ({
                headerName: key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
                field: key,
                editable: key !== idProp,
            } as GridColDef))
            .concat(actionsColumn)
    );
    return <DataGrid
        hideFooter={rows.length <= 100}
        getRowId={row => row[idProp]}
        rows={rows}
        columns={columns}
        editMode="row"
        slots={{toolbar: EditToolbar}}
        slotProps={{toolbar: {table}}}
        processRowUpdate={newRow => table.put(newRow)}
    />
};


