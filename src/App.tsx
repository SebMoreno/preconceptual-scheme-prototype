import DownloadIcon from "@mui/icons-material/Download";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import LockResetIcon from "@mui/icons-material/LockReset";
import { Dialog, DialogContent, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { useState } from "react";
import { PreconceptualScheme } from "./components/PreconceptualScheme.tsx";
import { TableDataGrid, TableDataGridProps } from "./components/TableDataGrid.tsx";
import { db } from "./database/db.ts";
import { Violation } from "./database/models";

export const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [tableDataGridProps, setTableDataGridProps] = useState<TableDataGridProps>({
        tableName: "",
        subTitle: ""
    });
    const handleOpenTable = (newTableDataGridProps: TableDataGridProps) => {
        setIsOpen(true);
        setTableDataGridProps(newTableDataGridProps);
    };
    const measureTechDebt = async () => {
        const violations = await db.Violation.toArray();
        const elementosAgrupados = violations.reduce((groups, v) => {
            if (groups[v.codeId]) {
                groups[v.codeId].push(v);
            } else {
                groups[v.codeId] = [v];
            }
            return groups;
        }, {} as { [group: number]: Violation[] });
        for (const [codeId, violations] of Object.entries(elementosAgrupados)) {
            const code = await db.Code.get(parseInt(codeId));
            if (!code) {
                continue;
            }
            code.technicalDebt = (await Promise.all(violations.map(async v => {
                const qualityRule = await db.QualityRule.get(v.qualityRuleId);
                return qualityRule ? qualityRule.principal + qualityRule.interest : 0;
            }))).reduce((a, b) => a + b);
            await db.Code.put(code);
        }
        alert("Technical debt measurement successfully completed, please review the Codes table.");
    };
    return (
        <>
            <PreconceptualScheme onOpenTable={handleOpenTable} measureTechDebt={measureTechDebt}/>
            <SpeedDial
                ariaLabel="SpeedDial for loading data"
                sx={{ position: "fixed", top: 16, left: 16 }}
                icon={<SpeedDialIcon/>}
                direction="right"
            >
                <SpeedDialAction
                    icon={<FileUploadIcon/>}
                    tooltipTitle="Upload Json"
                />
                <SpeedDialAction
                    icon={<DownloadIcon/>}
                    tooltipTitle="Download Json"
                />
                <SpeedDialAction
                    icon={<LockResetIcon/>}
                    tooltipTitle="Load Default Data"
                />
            </SpeedDial>
            <Dialog
                maxWidth="lg"
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <DialogContent sx={{ px: 5, py: 3 }}>
                    <TableDataGrid
                        tableName={tableDataGridProps.tableName}
                        title={tableDataGridProps.title}
                        subTitle={tableDataGridProps.subTitle}
                        onAdd={tableDataGridProps.onAdd}
                        query={tableDataGridProps.query}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
};
