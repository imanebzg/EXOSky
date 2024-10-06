 import './CustomForm.css'

function CustomForm({label,type,onChnage}) {
    return ( 
        <div className='containerCustomForm'> 
            <div className='label'>
                <p>
                    {label}
                </p>
            </div>
            <input/>
        </div>
     );
}

export default CustomForm;