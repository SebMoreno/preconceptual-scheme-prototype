import DownloadIcon from "@mui/icons-material/Download";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import LockResetIcon from "@mui/icons-material/LockReset";
import {
    Alert,
    AlertColor,
    Dialog,
    DialogContent,
    Snackbar,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon
} from "@mui/material";
import React, { useRef, useState } from "react";
import { PreconceptualScheme } from "./components/PreconceptualScheme.tsx";
import { TableDataGrid, TableDataGridProps } from "./components/TableDataGrid.tsx";
import { db } from "./database/db.ts";
import { Violation } from "./database/models";
import { downloadJsonFile } from "./services/downloadJsonFile.ts";

export const App = () => {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [alertInfo, setAlertInfo] = useState<{ isShown?: boolean, message?: string, severity?: AlertColor }>({});
    const [tableDataGridProps, setTableDataGridProps] = useState<TableDataGridProps>({
        tableName: "",
        subTitle: ""
    });
    const handleOpenTable = (newTableDataGridProps: TableDataGridProps) => {
        setIsOpenModal(true);
        setTableDataGridProps(newTableDataGridProps);
    };
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const file = event.target.files?.[0];
            if (file) {
                await db.loadDataFromObject(JSON.parse(await file.text()));
                event.target.value = '';
                setAlertInfo({
                    isShown: true,
                    message: "Data loaded successfully.",
                    severity: "success"
                });
            }
        } catch (e) {
            console.error(e);
            setAlertInfo({
                isShown: true,
                message: "Error loading data. Please reload the page and try again.",
                severity: "error"
            });
        }
    };
    const measureTechDebt = async () => {
        try {
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
                    if (qualityRule) {
                        qualityRule.principal = typeof qualityRule.principal === "string" ? parseFloat(qualityRule.principal) : qualityRule.principal;
                        qualityRule.interest = typeof qualityRule.interest === "string" ? parseFloat(qualityRule.interest) : qualityRule.interest;
                        return qualityRule.principal + qualityRule.interest;
                    }
                    return 0;
                }))).reduce((a, b) => a + b);
                await db.Code.put(code);
            }
            setAlertInfo({
                isShown: true,
                message: "Technical debt measurement successfully completed. Please review the Codes table.",
                severity: "success"
            });
        } catch (e) {
            console.error(e);
            setAlertInfo({
                isShown: true,
                message: "Error measuring technical debt. Please reload the page and try again.",
                severity: "error"
            });
        }
    };
    return (
        <>
            <PreconceptualScheme onOpenTable={handleOpenTable} measureTechDebt={measureTechDebt}/>
            <SpeedDial
                ariaLabel="SpeedDial for loading data"
                sx={{position: "fixed", top: 16, left: 16}}
                icon={<SpeedDialIcon/>}
                direction="right"
            >
                <SpeedDialAction
                    tooltipTitle="Upload Json"
                    onClick={() => inputFileRef.current?.click()}
                    icon={<>
                        <input type="file" accept=".json" hidden ref={inputFileRef} onChange={handleFileChange}/>
                        <FileUploadIcon/>
                    </>}
                />
                <SpeedDialAction
                    icon={<DownloadIcon/>}
                    tooltipTitle="Download Json"
                    onClick={async () => downloadJsonFile(await db.getAllData())}
                />
                <SpeedDialAction
                    icon={<LockResetIcon/>}
                    tooltipTitle="Load Default Data"
                    onClick={() => db.loadDataFromObject()
                        .then(() => setAlertInfo({
                            isShown: true,
                            message: "Default data has been successfully loaded.",
                            severity: "success"
                        }))
                        .catch(e => {
                        console.error(e);
                        setAlertInfo({
                            isShown: true,
                            message: "Error loading default data.",
                            severity: "error"
                        })
                    })}
                />
            </SpeedDial>
            <Dialog
                maxWidth="lg"
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
            >
                <DialogContent sx={{px: 5, py: 3}}>
                    <TableDataGrid
                        {...tableDataGridProps}
                    />
                </DialogContent>
            </Dialog>
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                open={alertInfo.isShown}
                autoHideDuration={5000}
                onClose={() => setAlertInfo({isShown: false})}>
                <Alert
                    onClose={() => setAlertInfo({isShown: false})}
                    severity={alertInfo.severity}
                    sx={{width: '100%'}}>
                    {alertInfo.message}
                </Alert>
            </Snackbar>
        </>
    );
};
