import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../database/db.ts";
import React, { useEffect, useRef, useState } from "react";
import { DataGrid, GridActionsCellItem, GridActionsColDef, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { EditToolbar } from "./EditToolbar.tsx";
import { camelCaseToCapitalizedWords } from "../services/camelCaseToCapitalizedWords.ts";
import { Table } from "dexie";

export interface TableDataGridProps {
    tableName: string;
    query?: <T>(table: Table<T>) => Promise<T[]>;
    title?: string;
    subTitle?: string;
    onAdd?: (table: Table) => void;
    canCreate?: boolean;
    canUpdate?: boolean;
    canDelete?: boolean;
}

export const TableDataGrid: React.FC<TableDataGridProps> = ({
                                                                tableName,
                                                                title = camelCaseToCapitalizedWords(tableName),
                                                                subTitle = "",
                                                                query = table => table.toArray(),
                                                                onAdd = async table => table.get(await table.add({})),
                                                                canCreate = false,
                                                                canDelete = false,
                                                                canUpdate = false
                                                            }) => {
    const {current: table} = useRef(db.table(tableName));
    const {current: idProp} = useRef(table.schema.primKey.name);
    const {current: tableConstructor} = useRef<{ new(): unknown }>(table.schema.mappedClass as { new(): unknown });
    const elements = useLiveQuery<object[]>(() => query(table));
    const [rows, setRows] = useState<GridRowsProp>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        setRows(elements ?? []);
        setIsLoading(elements === undefined);
    }, [elements]);

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
    };
    const columns = useRef<GridColDef[] | null>(null);
    if (columns.current === null) {
        columns.current = Object.getOwnPropertyNames(new tableConstructor())
            .map(key => ({
                headerName: camelCaseToCapitalizedWords(key),
                field: key,
                editable: canUpdate ? key !== idProp : false,
                width: camelCaseToCapitalizedWords(key).length * 10,
                minWidth: 100
            } as GridColDef));
        if (canDelete) {
            columns.current?.push(actionsColumn);
        }
    }
    return isLoading ? <div>Loading...</div> :
        <>
            <h1>{title}</h1>
            <h3>{subTitle}</h3>
            <DataGrid
                autoHeight
                className="table-data-grid"
                hideFooter={rows.length <= 100}
                getRowId={row => row[idProp]}
                rows={rows}
                columns={columns.current}
                editMode="row"
                slots={{toolbar: canCreate ? EditToolbar : null}}
                slotProps={{toolbar: {onAdd: () => onAdd(table)}}}
                processRowUpdate={async newRow => table.get(await table.put(newRow))}
                onProcessRowUpdateError={err => console.error(err)}
            />
        </>;
};


