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
                        Personal Details      
                        </h3>
                        <p className="para">
                        We are all set to get your started, just need details on where to communicate with you next
                        </p>
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
                            <label htmlFor="" className="label-text">Phone Number (Whatsapp)</label>
                            <div className="inp-grp">
                                <input type="text" {...register('phone_number', { required: 'Please select an event type' })} placeholder='Enter your phone number' />
                            </div>
                            {errors.phone_number && (
                                <div className="error-message">{errors.phone_number.message}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-12 col-12">
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Email Address</label>
                            <div className="inp-grp">
                                <input type="text" {...register('email_id', { required: 'Please select an event type' })} placeholder='Enter your email address' />
                            </div>
                            {errors.email_id && (
                                <div className="error-message">{errors.email_id.message}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-12 col-12">
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Message</label>
                            <div className="inp-grp">
                                <textarea {...register('message')} id="" rows="3" placeholder='Anything you would like to share about you or the event that you are looking to host?'></textarea>
                            </div>
                            {errors.message && (
                                <div className="error-message">{errors.message.message}</div>
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