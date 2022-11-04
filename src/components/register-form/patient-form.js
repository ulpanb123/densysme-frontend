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
    Typography, FormControlLabel, RadioGroup, FormLabel, Radio
} from "@mui/material"
import { BackendApi } from "../../client/backend-api/patient"
import classes from "./styles.module.css"

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

    const isInvalid =
        patient.name.trim() === "" || patient.id.trim() === "" || patient.iin.trim() === ""

    const formSubmit = (event) => {
        event.preventDefault()
        if (!isInvalid) {
            if (patientId) {
                const newName = patient.name
                const newId = patient.id
                const newIin = patient.iin
                const newBirth = patient.birth
                const newBlood = patient.blood
                const newEmergencyNum = patient.emergencyNum
                const newContactNum = patient.contactNum
                const newEmail = patient.email
                const newAddress = patient.address
                const newMaritalStatus = patient.maritalStatus

                // !! UNCOMMENT!!

                // BackendApi.editPatientById(patientId, {
                //         ...patient
                //     })
                //     .then(() => navigate(`/admin/patients`))

            } else {
                // !! UNCOMMENT!!

                // BackendApi.addPatient({
                //         ...patient,
                //     })
                //     .then(() => navigate(`/admin/patients`))
            }
        }
    }

    const updatePatientField = (event) => {
        const field = event.target
        setPatient((patient) => ({ ...patient, [field.name]: field.value }))
    }

    const validateForm = (event) => {
        const { name, value } = event.target
        if (["name", "id", "iin", "email"].includes(name)) {
            setPatient((prevProd) => ({ ...prevProd, [name]: value.trim() }))
            if (!value.trim().length) {
                setErrors({ ...errors, [name]: `${name} can't be empty` })
            } else {
                setErrors({ ...errors, [name]: "" })
            }
        }
        if (["iin", "id", "emergencyNum", "contactNum"].includes(name)) {
            if (isNaN(Number(value))) {
                setErrors({ ...errors, [name]: "Only numbers are allowed" })
            } else {
                setErrors({ ...errors, [name]: "" })
            }
        }
    }


    useEffect(() => {
        if (patientId) {
            //remove following method call
            setPatient(
                {
                    name: "Taylor Alison Swift",
                    id: "201728560",
                    iin: "131289898989",
                    birth: "13.12.89",
                    blood: "2",
                    emergencyNum: "87777777777",
                    contactNum: "87777777777",
                    address: "Kabanbay batyr, 53",
                    email: "tt.swift@gmail.com",
                    maritalStatus: "not married",
                    registrationDate: "31.10.22"
                }
            )
            // !! UNCOMMENT
            // BackendApi.getPatientById(patientId).then(({ patient, error }) => {
            //     if (error) {
            //         navigate(`/admin/patients`)
            //     } else {
            //         setPatient(patient)
            //     }
            // })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [patientId])

    return (
        <>
            <Container component={Paper} className={classes.wrapper}>
                <Typography className={classes.pageHeader} variant="h5">
                    {patientId ? "Update Patient" : "Add Patient"}
                </Typography>
                <form noValidate autoComplete="off" onSubmit={formSubmit}>
                    <FormGroup>
                        <FormControl className={classes.mb2}>
                            <TextField
                                label="Name, Middle name, Surname"
                                name="name"
                                required
                                value={patient.name}
                                onChange={updatePatientField}
                                onBlur={validateForm}
                                error={errors.name.length > 0}
                                helperText={errors.name}
                            />
                        </FormControl>
                        <FormControl className={classes.mb2}>
                            <TextField
                                label="ID"
                                name="id"
                                required
                                value={patient.id}
                                onChange={updatePatientField}
                                onBlur={validateForm}
                                error={errors.id.length > 0}
                                helperText={errors.id}
                            />
                        </FormControl>
                        <FormControl className={classes.mb2}>
                            <TextField
                                label="IIN"
                                name="iin"
                                required
                                value={patient.iin}
                                onChange={updatePatientField}
                                onBlur={validateForm}
                                error={errors.iin.length > 0}
                                helperText={errors.iin}
                            />
                        </FormControl>
                        <FormControl className={classes.mb2}>
                            <TextField
                                label="Birth date"
                                name="birth"
                                required
                                value={patient.birth}
                                onChange={updatePatientField}
                                onBlur={validateForm}
                                error={errors.birth.length > 0}
                                helperText={errors.birth}
                            />
                        </FormControl>
                        <FormControl className={classes.mb2}>
                            <TextField
                                label="Blood type"
                                name="blood"
                                required
                                value={patient.blood}
                                onChange={updatePatientField}
                                onBlur={validateForm}
                                helperText={errors.blood}
                            />
                        </FormControl>
                        <FormControl className={classes.mb2}>
                            <TextField
                                label="Emergency Number"
                                name="emergencyNum"
                                required
                                value={patient.emergencyNum}
                                onChange={updatePatientField}
                                onBlur={validateForm}
                                helperText={errors.emergencyNum}
                            />
                        </FormControl>
                        <FormControl className={classes.mb2}>
                            <TextField
                                label="Contact Number"
                                name="contactNum"
                                required
                                value={patient.contactNum}
                                onChange={updatePatientField}
                                onBlur={validateForm}
                                helperText={errors.contact}
                            />
                        </FormControl>
                        <FormControl className={classes.mb2}>
                            <TextField
                                label="Email"
                                name="email"
                                value={patient.email}
                                onChange={updatePatientField}
                                onBlur={validateForm}
                                helperText={errors.email}
                            />
                        </FormControl>
                        <FormControl className={classes.mb2}>
                            <TextField
                                label="Marital status"
                                name="maritalStatus"
                                required
                                value={patient.maritalStatus}
                                onChange={updatePatientField}
                                onBlur={validateForm}
                                helperText={errors.maritalStatus}
                            />
                        </FormControl>
                        <FormControl className={classes.mb2}>
                            <TextField
                                label="Registration date"
                                name="registrationDate"
                                required
                                value={patient.registrationDate}
                                onChange={updatePatientField}
                                onBlur={validateForm}
                                error={errors.registrationDate.length > 0}
                                helperText={errors.registrationDate}
                            />
                        </FormControl>


                    </FormGroup>
                    <div className={classes.btnContainer}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                navigate(`/admin/patients`)
                            }}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary" disabled={isInvalid}>
                            {patientId ? "Update Patient" : "Add Patient"}
                        </Button>
                    </div>
                </form>
            </Container>
        </>
    )
}