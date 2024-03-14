'use client'
import React, {useState, useEffect} from 'react'
import { Controller, useForm  } from 'react-hook-form'
import { useFormState } from '@/contexts/FormContext'
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";

import Image from 'next/image';
import thank from '../../assets/images/thank.svg'
import insta from '../../assets/images/ins.svg'
import what from '../../assets/images/wha.svg'
import mail from '../../assets/images/mai.svg'

import Link from 'next/link'

const Summary = () => {

    const { onHandleNext,onHandleBack, setStep, setFormData, formData } = useFormState();

    const [thankyou, setTankhyou] = useState(false)

    const validationSchema = Yup.object().shape({
        selectedDate: Yup.date().required('Please select a date'),
      });
    const { control, register, handleSubmit, formState: { errors } } = useForm({
        // defaultValues: formData,
        // resolver: yupResolver(validationSchema),
    });

    const onHandleFormSubmit = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        // onHandleNext();
        setTankhyou(true)
        setStep(1);
    };
        return (
            <>
                {
                    !thankyou ?
                    <>
                        <form action="" onSubmit={handleSubmit(onHandleFormSubmit)}>
                            <div className="step-inner">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h3 className="sec-head sm text-center">
                                        Summary      
                                        </h3>
                                        <p className="para">
                                        Checkout details you have filled
                                        </p>
                                    </div>
                                </div>
                                <div className="row mt-4  justify-content-center">
                                    <div className="col-12">
                                        <div className="sum-grid">
                                            {
                                                
                                                Object.entries(formData).map(([key, value])=>{
                                                    if(Array.isArray(value)){
                                                        value = value.join(', ')
                                                    }
                                                    if(value instanceof Date){
                                                        value = value.toLocaleDateString();
                                                    }
                                                    return(
                                                        <div className='sum-wrap' key={key}>
                                                            <span>{key}</span>
                                                            <span>{value}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex mt-5 justify-content-center gap-2">
                                            <button type="button" className="main-btn prev" onClick={onHandleBack}>
                                                <span>Previous</span>
                                            </button>
                                            <button className="main-btn">
                                                <span>Submit</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </>:
                     <>
                     <div className="step-inner">
                         <div className="row justify-content-center">
                             <div className="col-lg-10 col-12">
                                 <div className="th-wrap text-center">
                                     <Image src={thank} alt="" />
                                     <h3 className="sec-head mt-4 sm">
                                         Thank you for submitting your request
                                     </h3>
                                     <p className="para mb-5">
                                     Our Team will reach out to you for further details. For any further queries
                                     </p>
                                     <h3>You can reach us at:</h3>
                                     <ul className="soc-list justify-content-center pl-0">
                                         <li>
                                             <Link href="">
                                                 <Image src={insta} alt="" />
                                             </Link>
                                         </li>
                                         <li>
                                             <Link href="">
                                                 <Image src={what} alt="" />
                                             </Link>
                                         </li>
                                         <li>
                                             <Link href="">
                                                 <Image src={mail} alt="" />
                                             </Link>
                                         </li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </>
                }
            </>
        )
    

}

export default Summary