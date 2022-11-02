const PatientApi = {
    getAllPatients: async () => {
        const res = await fetch("/users", { method: "GET" })
        return res.json()
    },
    getPatientById: async (patientId) => {
        const res = await fetch(`/users/:${patientId}`, { method: "GET" })
        return res.json()
    },
    addPatient: async (data) => {
        const res = await fetch("/register-user", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })
        return res.json()
    },
    editPatientById: async (patientId, data) => {
        const res = await fetch(`/users/:${patientId}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })
        return res.json()
    },
    deletePatient: async (patientId) => {
        const res = await fetch(`/users/:${patientId}`, { method: "DELETE" })
        return res.json()
    },
}

module.exports = { PatientApi }