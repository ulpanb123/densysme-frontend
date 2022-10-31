import {useEffect, useState} from "react";
import {BackendApi} from "../../client/backend-api/doctor";
import classes from "./styles.module.css";
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead, TablePagination,
    TableRow,
    Typography
} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

export const DoctorsList = () => {
    const [doctors, setDoctors] = useState([
        {
            "id": 201825560,
            "name": "Jane Rose Wood",
            "birth": "08.03.78",
            "IIN": "141516255698",
            "experience": "2",
            "department": "Surgery",
            "contact": "87777777777",
            "specialization": "Plastic surgeon",
            "photo": "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000",
            "category": "first",
            "schedule": "Mon/Wed/Fri",
            "price": "70000",
            "degree": "PhD",
            "rating": "10",
            "address": "Kabanbay batyr, 53",
            "homepage": "null"
        }
    ])
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const fetchDoctors = async () => {
        const { doctors } = await BackendApi.getAllDoctors()
        setDoctors(doctors)
        console.log(doctors)
    }

    useEffect(() => {
        fetchDoctors().catch(console.error)
    }, [])

    return(
        <>
            <div className={`${classes.pageHeader} ${classes.mb2}`}>
                <Typography variant="h5"> Doctors List</Typography>

            </div>
            {doctors.length > 0 ? (
                <>
                    <div className={classes.tableContainer}>
                        <TableContainer component={Paper}>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Department</TableCell>
                                        <TableCell align="right">Specialization</TableCell>
                                        <TableCell align="right">Rating</TableCell>
                                        <TableCell align="right">Schedule</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(rowsPerPage > 0
                                            ? doctors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            : doctors
                                    ).map((doctor) => (
                                        <TableRow key={doctor.id}>
                                            <TableCell component="th" scope="row">
                                                {doctor.name}
                                            </TableCell>
                                            <TableCell align="right">{doctor.department}</TableCell>
                                            <TableCell align="right">{doctor.specialization}</TableCell>
                                            <TableCell align="right">{doctor.rating}</TableCell>
                                            <TableCell align="right">{doctor.schedule}</TableCell>
                                            <TableCell>{`$${doctor.price}`}</TableCell>
                                            <TableCell>
                                                <div className={classes.actionsContainer}>
                                                    <Button
                                                        variant="contained"
                                                        component={RouterLink}
                                                        size="small"
                                                        to={`/doctors/0`}
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
                            count={doctors.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={(e, newPage) => setPage(newPage)}
                        />
                    </div>
                </>
            ) : (
                <Typography variant="h5">No doctors found!</Typography>
            )}
        </>
    )
}