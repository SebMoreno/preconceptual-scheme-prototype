import { GridToolbarContainer } from "@mui/x-data-grid";
import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Table } from "dexie";


export const EditToolbar: React.FC<{ table: Table }> = ({table}) =>
    <GridToolbarContainer>
        <Button
            color="primary"
            startIcon={<AddIcon/>}
            onClick={async () => table.get(await table.add({}))}>
            Add record
        </Button>
    </GridToolbarContainer>;

