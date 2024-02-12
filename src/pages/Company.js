import React, { useEffect, useRef, useState } from 'react'
import InputType from '../components/shared/form/InputType';
import Button from '../components/shared/form/Button';
const Company = () => {

    const [loading, setLoading] = useState(false);
    const [companyName, setCompanyName] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    // const [companyEmail, setCompanyEmail] = useState("");
    // const [companyPhone, setCompanyPhone] = useState("");

    const companyNameRef = useRef();

    const handleSubmit = async () => {
        console.log({companyName,companyAddress});
        try{
            setLoading(true);
        }catch(err){
            console.error(err);
        }finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        companyNameRef.current.focus();

    }, []);


    return (
        <> 
            <div className="card mt-3">
                <div className="card-header">
                    <h3 className="card-title">Company</h3>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                        </button>
                        <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                        </button>
                    </div>
                </div>
                <div className="card-body">
                   <div className='d-flex flex-column justify-content-between align-items-center'>
                    <div className='d-flex w-100'  style={{gap: 10}}>
                        <div className="input-group mb-3">
                            <InputType inputType={'text'}
                                controlRef={companyNameRef}
                                name={'companyName'}
                                value={companyName}
                                placeholder={'Your company name'}
                                onChange={(e) => setCompanyName(e.target.value)}
                                className={'form-control'} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <InputType inputType={'text'} 
                                name={'companyAddress'}
                                value={companyAddress}
                                placeholder={'Your company address'}
                                onChange={(e) => setCompanyAddress(e.target.value)}
                                className={'form-control'} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className='d-flex justify-content-end align-items-center w-100'>
                     {  
                        loading === false ?
                         <Button className={'col-1 btn btn-primary btn-block'} buttonText={'Save'} handleClick={handleSubmit} /> : <i className='fa-spinner fa-spin text-danger'>◌</i> 
                     }
                    </div>
                   </div>
                </div>
            </div> 
        </>
    )
}

export default Company