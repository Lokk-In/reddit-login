const checkInput = e => {
    if (e.value.length === 0) {
        e.classList.remove("hasInput")
    } else {
        e.classList.add("hasInput")
    }

    if (e.id === "loginUsername") {
        if (e.value.length >= 3 && e.value.length <= 20) {
            e.parentNode.classList.add("valid")
            e.parentNode.classList.remove("invalid")
        } else {
            e.parentNode.classList.add("invalid")
            e.parentNode.classList.remove("valid")
        }
    }
}