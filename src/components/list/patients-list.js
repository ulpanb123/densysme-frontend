import { useState, useEffect } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Modal,
    Card,
    CardContent,
    CardActions,
    Typography,
    TablePagination,
} from "@mui/material"
import classes from "./styles.module.css"
import { BackendApi } from "../../client/backend-api/patient"

export const PatientsList = () => {
    const [patients, setPatients] = useState([
        {
            "id": 201728560,
            "name": "Taylor Alison Swift",
            "birth": "13.12.89",
            "IIN": "131289898989",
            "blood": "2",
            "emergency": "87777777777",
            "contact": "87777777777",
            "email": "tt.swift@gmail.com",
            "address": "Kabanbay batyr, 53",
            "marital": "not married",
            "registered_date": "31.10.22"
        },
        {
            "id": 201842568,
            "name": "Helena Blosson Mary",
            "birth": "08.03.78",
            "IIN": "010203500145",
            "blood": "2",
            "emergency": "87777777777",
            "contact": "87777777777",
            "email": "helena.mary@gmail.com",
            "address": "Kabanbay batyr, 53",
            "marital": "married",
            "registered_date": "31.10.22"
        }
    ])
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const fetchPatients = async () => {
        const { patients } = await BackendApi.getAllPatients()
        setPatients(patients)
        console.log(patients)
    }

    useEffect(() => {
        fetchPatients().catch(console.error)
    }, [])

    return(
        <>
            <div className={`${classes.pageHeader} ${classes.mb2}`}>
                <Typography variant="h5"> Patients List</Typography>

            </div>
            {patients.length > 0 ? (
                <>
                    <div className={classes.tableContainer}>
                        <TableContainer component={Paper}>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">IIN</TableCell>
                                        <TableCell align="right">Date of birth</TableCell>
                                        <TableCell align="right">Blood Group</TableCell>
                                        <TableCell align="right">Contact Number</TableCell>
                                        <TableCell>Address</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(rowsPerPage > 0
                                            ? patients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            : patients
                                    ).map((patient) => (
                                        <TableRow key={patient.id}>
                                            <TableCell component="th" scope="row">
                                                {patient.name}
                                            </TableCell>
                                            <TableCell align="right">{patient.IIN}</TableCell>
                                            <TableCell align="right">{patient.birth}</TableCell>
                                            <TableCell align="right">{patient.blood}</TableCell>
                                            <TableCell align="right">{patient.contact}</TableCell>
                                            <TableCell>{patient.address}</TableCell>
                                            <TableCell>
                                                <div className={classes.actionsContainer}>
                                                    <Button
                                                        variant="contained"
                                                        component={RouterLink}
                                                        size="small"
                                                        to={`/patients/0`}
                                                    >
                                                        View
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            onRowsPerPageChange={(e) => {
                                setRowsPerPage(parseInt(e.target.value, 10))
                                setPage(0)
                            }}
                            component="div"
                            count={patients.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={(e, newPage) => setPage(newPage)}
                        />
                    </div>
                </>
            ) : (
                <Typography variant="h5">No patients found!</Typography>
            )}
        </>
    )
}