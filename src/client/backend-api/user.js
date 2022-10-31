const UserApi = {
    login: async (username, password) => {
        const res = await fetch("/v1/user/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        })
        return res.json()
    },
    getProfile: async () => {
        const res = await fetch("/v1/user/profile", { method: "GET" })
        return res.json()
    },
    logout: async () => {
        const res = await fetch("/v1/user/logout", { method: "GET" })
        return res.json()
    },
}

module.exports = { UserApi }