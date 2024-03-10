'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'

import { Controller, useForm  } from 'react-hook-form'
import { useFormState } from '@/contexts/FormContext'
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";

const FourthStep = () => {

    const { onHandleNext,onHandleBack, setFormData, formData } = useFormState();

    const validationSchema = Yup.object().shape({
        selectedDate: Yup.date().required('Please select a date'),
      });
    const { control, register, handleSubmit, formState: { errors } } = useForm({
        // defaultValues: formData,
        // resolver: yupResolver(validationSchema),
    });

    const onHandleFormSubmit = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        onHandleNext();
    };

    const data = [
        "Venue",
        "Planner",
        "Decoration",
        "Band",
        "DJ",
        "Photographer",
        "Caterer",
        "MC",
        "Videographer",
        "Rentals",
        "Marketing"
    ]

  return (
    <>
        <form action="" onSubmit={handleSubmit(onHandleFormSubmit)}>
            <div className="step-inner">
                <div className="row">
                    <div className="col-12">
                        <h3 className="sec-head sm text-center">
                        What all support do you need for the event?           
                        </h3>
                    </div>
                </div>
                <div className="row mt-4 justify-content-center">
                    <div className="col-lg-12 col-12">
                        <div className="tg-container">
                            {
                                data && data.map((item,index)=>{
                                    return(
                                    <div className="tg-wrap">
                                        <input type="checkbox" {...register('providerNeed', { required: 'Please select an event type' })} value={item} id={'count'+index} />
                                        <label htmlFor={'count'+index}>{item}</label>
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
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}

export default FourthStep