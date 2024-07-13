export const Input = forwardRef(({ label, ...rest }, ref) => {
    return (
        <div className='mb-3'>
            {label && <label className="form-label" htmlFor={rest.id}>{label}</label>}
            <input ref={ref} className="form-control" {...rest} />
        </div>
    )
})

Input.displayName = "Input"

Input.propTypes = {
    label: PropTypes.string,
}
