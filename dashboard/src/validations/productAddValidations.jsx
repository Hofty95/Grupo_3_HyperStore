const validate = (values) => {
    const errors = {}

    if (!values.name) {
        errors.name = "El nombre del producto es Obligatorio"
    }

    return errors
}

export default validate