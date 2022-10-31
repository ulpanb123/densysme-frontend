const PatientApi = {
    getAllPatients: async () => {
        const res = await fetch("/patients", { method: "GET" })
        return res.json()
    }
}

module.exports = { PatientApi }