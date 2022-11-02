const UserApi = {
    login: async (username, password) => {
        const res = await fetch("/admin/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        })
        return res.json()
    },
    getProfile: async () => {
        const res = await fetch("/admin/profile", { method: "GET" })
        return res.json()
    },
    logout: async () => {
        const res = await fetch("/admin/logout", { method: "GET" })
        return res.json()
    },
}

module.exports = { UserApi }