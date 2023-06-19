import { TableDataGrid, TableDataGridProps } from "./components/TableDataGrid.tsx";
import { useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { PreconceptualScheme } from "./components/PreconceptualScheme.tsx";


export const App = () => {
    const [tableName, setTableName] = useState("");
    const [message, setMessage] = useState<string | undefined>("");
    const [query, setQuery] = useState<TableDataGridProps["query"]>();
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenTable = ({
                                 tableName: newTableName,
                                 message: newMessage,
                                 query: newQuery
                             }: {
        tableName: string,
        message?: string,
        query?: TableDataGridProps["query"]
    }) => {
        setIsOpen(true);
        setTableName(newTableName);
        setMessage(newMessage);
        setQuery(newQuery);
    };
    return (
        <>
            <PreconceptualScheme onOpenTable={handleOpenTable}/>
            <Dialog
                maxWidth="lg"
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <DialogContent sx={{px: 5, py: 3}}>
                    <TableDataGrid
                        tableName={tableName}
                        message={message}
                        query={query}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
};
