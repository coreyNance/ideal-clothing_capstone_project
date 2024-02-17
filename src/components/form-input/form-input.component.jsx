import './form-input.styles.scss';

const FormInput = ({ label,...otherProps })=> {
    return (
        <div className="group">
            <input className="form-input"{...otherProps}/>
            {/* a turinary operator like this sees it as false when length is 0 and as true if greater than 0
            If length value is truthy ? then I want to you append this shrink class overwise : dont do anything null
            or append an empty string ' ' or append a different class if needed. */}
            
            {label && (
                //                if truthy or meaning > 0         do shrink else empty string
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
                )}
        </div>

    );
};


export default FormInput;