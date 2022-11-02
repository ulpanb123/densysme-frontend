const DoctorApi = {
    getAllDoctors: async () => {
        const res = await fetch("/doctors", { method: "GET" })
        return res.json()
    },

    getDoctorById: async (doctorId) => {
        const res = await fetch(`/doctors/:${doctorId}`, { method: "GET" })
        return res.json()
    },

    addDoctor: async (data) => {
        const res = await fetch("/register-doctor", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })
        return res.json()
    },

    editDoctorById: async (doctorId, data) => {
        const res = await fetch(`/doctors/:${doctorId}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })
        return res.json()
    },

    deleteDoctor: async (doctorId) => {
        const res = await fetch(`/doctors/:${doctorId}`, { method: "DELETE" })
        return res.json()
    },

}

module.exports = { DoctorApi }