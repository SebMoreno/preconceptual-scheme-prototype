import { GridToolbarContainer } from "@mui/x-data-grid";
import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


export const EditToolbar: React.FC<{ onAdd: () => void }> = ({onAdd}) =>
    <GridToolbarContainer>
        <Button
            color="primary"
            startIcon={<AddIcon/>}
            onClick={onAdd}>
            Add record
        </Button>
    </GridToolbarContainer>;

