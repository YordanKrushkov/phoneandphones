const verifyForm = (data, image,) => {
    let err = false
    Object.values(data).forEach(x => {
        if (x === '') {
            err = true
            return
        }
    })
    if (!image) {
        err = true
        return
    }
    return err
}

export {
    verifyForm
}