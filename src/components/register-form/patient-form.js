import React, { useState, useEffect } from "react"
import * as dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import { useParams, useNavigate } from "react-router-dom"
import {
    Paper,
    Container,
    Button,
    TextField,
    FormGroup,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
} from "@mui/material"
import { BackendApi } from "../../client/backend-api/patient"
//import classes from "./styles.module.css"

dayjs.extend(utc)

export const PatientForm = () => {
    const { patientId } = useParams()
    const navigate = useNavigate()
    const [patient, setPatient] = useState({
        name: "",
        id: patientId || "",
        iin: "",
        birth: "",
        blood: "",
        emergencyNum: "",
        contactNum: "",
        email: "",
        address: "",
        maritalStatus: "",
        registrationDate: "",
    })
    const [errors, setErrors] = useState({
        name: "",
        id: "",
        iin: "",
        birth: "",
        blood: "",
        emergencyNum: "",
        contactNum: "",
        email: "",
        address: "",
        maritalStatus: "",
        registrationDate: "",
    })

    // const isInvalid =
    //     patient.name.trim() === "" || patient.id.trim() === "" || patient.iin.trim() === ""
    //
    // const formSubmit = (event) => {
    //     event.preventDefault()
    //     if (!isInvalid) {
    //         if (patientId) {
    //             const newName = patient.name
    //             const newId = patient.id
    //             const newIin = patient.iin
    //             const newBirth = patient.birth
    //             const newBlood = patient.blood
    //             const newEmergencyNum = patient.emergencyNum
    //             const newContactNum = patient.contactNum
    //             const newEmail = patient.email
    //             const newAddress = patient.address
    //             const newMaritalStatus = patient.maritalStatus
    //
    //             BackendApi.
    //                 .editPatientById(bookIsbn, {
    //                     ...book,
    //                     priceHistory: newPriceHistory,
    //                     quantityHistory: newQuantityHistory,
    //                 })
    //                 .then(() => navigate(-1))
    //         } else {
    //             BackendApi.book
    //                 .addBook({
    //                     ...book,
    //                     priceHistory: [{ price: book.price, modifiedAt: dayjs().utc().format() }],
    //                     quantityHistory: [{ quantity: book.quantity, modifiedAt: dayjs().utc().format() }],
    //                 })
    //                 .then(() => navigate("/"))
    //         }
    //     }
    // }
    //
    // const updatePatientField = (event) => {
    //     const field = event.target
    //     setPatient((patient) => ({ ...patient, [field.name]: field.value }))
    // }
    //
    // const validateForm = (event) => {
    //     const { name, value } = event.target
    //     if (["name", "id", "iin", "email"].includes(name)) {
    //         setPatient((prevProd) => ({ ...prevProd, [name]: value.trim() }))
    //         if (!value.trim().length) {
    //             setErrors({ ...errors, [name]: `${name} can't be empty` })
    //         } else {
    //             setErrors({ ...errors, [name]: "" })
    //         }
    //     }
    //     if (["iin", "id", "emergencyNum", "contactNum"].includes(name)) {
    //         if (isNaN(Number(value))) {
    //             setErrors({ ...errors, [name]: "Only numbers are allowed" })
    //         } else {
    //             setErrors({ ...errors, [name]: "" })
    //         }
    //     }
    // }
    //
    // useEffect(() => {
    //     if (patientId) {
    //         BackendApi.getPatientById(patientId).then(({ patient, error }) => {
    //             if (error) {
    //                 navigate("/")
    //             } else {
    //                 setPatient(patient)
    //             }
    //         })
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [patientId])

    return (
        <> return </>
    //     <>
    //         <Container component={Paper} className={classes.wrapper}>
    //             <Typography className={classes.pageHeader} variant="h5">
    //                 {patientId ? "Update Patient" : "Add Patient"}
    //             </Typography>
    //             <form noValidate autoComplete="off" onSubmit={formSubmit}>
    //                 <FormGroup>
    //                     <FormControl className={classes.mb2}>
    //                         <TextField
    //                             label="Name"
    //                             name="name"
    //                             required
    //                             value={patient.name}
    //                             onChange={updateBookField}
    //                             onBlur={validateForm}
    //                             error={errors.name.length > 0}
    //                             helperText={errors.name}
    //                         />
    //                     </FormControl>
    //                     <FormControl className={classes.mb2}>
    //                         <TextField
    //                             label="ID"
    //                             name="id"
    //                             required
    //                             value={patient.id}
    //                             onChange={updatePatientField}
    //                             onBlur={validateForm}
    //                             error={errors.id.length > 0}
    //                             helperText={errors.id}
    //                         />
    //                         <FormControl className={classes.mb2}>
    //                             <TextField
    //                                 label="IIN"
    //                                 name="iin"
    //                                 required
    //                                 value={patient.iin}
    //                                 onChange={updatePatientField}
    //                                 onBlur={validateForm}
    //                                 error={errors.iin.length > 0}
    //                                 helperText={errors.iin}
    //                             />
    //                     </FormControl>
    //                         <FormControl className={classes.mb2}>
    //                             <TextField
    //                                 label="Birth date"
    //                                 name="birth"
    //                                 required
    //                                 value={patient.birth}
    //                                 onChange={updatePatientField}
    //                                 onBlur={validateForm}
    //                                 error={errors.birth.length > 0}
    //                                 helperText={errors.birth}
    //                             />
    //                     <FormControl className={classes.mb2}>
    //                         <InputLabel>Blood type</InputLabel>
    //                         <Select name="blood" value={patient.blood} onChange={updatePatientField} required>
    //                             <MenuItem value="A">Sci-Fi</MenuItem>
    //                             <MenuItem value="B">Action</MenuItem>
    //                             <MenuItem value="AB">Adventure</MenuItem>
    //                             <MenuItem value="O">Horror</MenuItem>
    //                         </Select>
    //                     </FormControl>
    //                     <FormControl className={classes.mb2}>
    //                         <TextField
    //                             label="Emergency Number"
    //                             name="emergencyNum"
    //                             required
    //                             value={patient.emergencyNum}
    //                             onChange={updatePatientField}
    //                             onBlur={validateForm}
    //                             helperText={errors.emergencyNum}
    //                         />
    //                     </FormControl>
    //                     <FormControl className={classes.mb2}>
    //                         <TextField
    //                             label="Quantity"
    //                             name="quantity"
    //                             type="number"
    //                             value={book.quantity}
    //                             onChange={updateBookField}
    //                             onBlur={validateForm}
    //                             error={errors.quantity.length > 0}
    //                             helperText={errors.quantity}
    //                         />
    //                     </FormControl>
    //                 </FormGroup>
    //                 <div className={classes.btnContainer}>
    //                     <Button
    //                         variant="contained"
    //                         color="secondary"
    //                         onClick={() => {
    //                             navigate(-1)
    //                         }}
    //                     >
    //                         Cancel
    //                     </Button>
    //                     <Button type="submit" variant="contained" color="primary" disabled={isInvalid}>
    //                         {bookIsbn ? "Update Book" : "Add Book"}
    //                     </Button>
    //                 </div>
    //             </form>
    //         </Container>
    //     </>
     )
}