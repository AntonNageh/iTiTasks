const cookieStorage = {
    setItem: function (key, value) {
        setCookie(key, value);
    },
    getItem: function (key) {
       return getCookie(key);
    },
    removeItem: function (key) {
        deleteCookie(key);
    },
    clear: function () {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            const [name] = cookie.split("=");
            deleteCookie(name);
        }
    },
    key: function (index) {
        const cookies = document.cookie.split("; ");
        if (index < 0 || index >= cookies.length) return null;
        const [name] = cookies[index].split("=");
        return name;
    },
    length: function () {
        return document.cookie.split("; ").length;
    },
};

const storage = (function () {
    try {
        localStorage.setItem("testitem", "testvalue");
        return localStorage;
    } catch (e) {
        return cookieStorage;
    }
})
();

// Export the storage object
export default storage;