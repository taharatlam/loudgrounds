'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'

import { Controller, useForm  } from 'react-hook-form'
import { useFormState } from '@/contexts/FormContext'
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";

const FifthStep = () => {

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

  return (
    <>
        <form action="" onSubmit={handleSubmit(onHandleFormSubmit)}>
            <div className="step-inner">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="sec-head sm text-center">
                        Share us your details and we can
take this further    
                        </h3>
                     
                    </div>
                </div>
                <div className="row mt-4  justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Name</label>
                            <div className="inp-grp">
                                <input type="text" {...register('name', { required: 'Please select an event type' })} placeholder='Enter your full name' />
                            </div>
                            {errors.name && (
                                <div className="error-message">{errors.name.message}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Designation</label>
                            <div className="inp-grp">
                                <input type="text" {...register('name', { required: 'Please select an event type' })} placeholder='Designation In Company' />
                            </div>
                            {errors.name && (
                                <div className="error-message">{errors.name.message}</div>
                            )}
                        </div>
                    </div>
                    
                    <div className="col-lg-12 col-12">
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Email Address</label>
                            <div className="inp-grp">
                                <input type="text" {...register('email', { required: 'Please select an event type' })} placeholder='Enter your email address' />
                            </div>
                            {errors.email && (
                                <div className="error-message">{errors.email.message}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-12 col-12">
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Phone Number</label>
                            <div className="inp-grp">
                                <input type="text" {...register('mobile', { required: 'Please select an event type' })} placeholder='Enter your phone number' />
                            </div>
                            {errors.mobile && (
                                <div className="error-message">{errors.mobile.message}</div>
                            )}
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

export default FifthStep