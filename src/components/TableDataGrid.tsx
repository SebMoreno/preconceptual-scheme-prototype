import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../database/db.ts";
import React, { useEffect, useRef, useState } from "react";
import { DataGrid, GridActionsCellItem, GridActionsColDef, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { EditToolbar } from "./EditToolbar.tsx";
import { camelCaseToCapitalizedWords } from "../services/camelCaseToCapitalizedWords.ts";

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
                headerName: camelCaseToCapitalizedWords(key),
                field: key,
                editable: key !== idProp,
                width: camelCaseToCapitalizedWords(key).length * 10,
                minWidth: 100
            } as GridColDef))
            .concat(actionsColumn)
    );
    return <DataGrid
        autoHeight
        className="table-data-grid"
        hideFooter={rows.length <= 100}
        getRowId={row => row[idProp]}
        rows={rows}
        columns={columns}
        editMode="row"
        slots={{toolbar: EditToolbar}}
        slotProps={{toolbar: {table}}}
        processRowUpdate={async (newRow) => table.get(await table.put(newRow))}
        onProcessRowUpdateError={err => console.error(err)}
    />
};


