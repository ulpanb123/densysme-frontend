const DoctorApi = {
    getAllDoctors: async () => {
        const res = await fetch("/doctors", { method: "GET" })
        return res.json()
    }
}

module.exports = { DoctorApi }