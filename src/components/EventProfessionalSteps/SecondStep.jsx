'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'

import { Controller, useForm  } from 'react-hook-form'
import { useFormState } from '@/contexts/FormContext'
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";

const SecondStep = () => {

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
                    <div className="col-12">
                        <h3 className="sec-head sm text-center">
                        Tell us more about you?              
                        </h3>
                    </div>
                </div>
                <div className="row mt-4 justify-content-center">
                    <div className="col-lg-8 col-12">
                    <div className="form-group">
                            <label htmlFor="" className="label-text">Business Type</label>
                            <div className="d-flex gap-2">
                                <div className="cap-check">
                                    <input type="radio" {...register('business_type', { required: 'Please select an event type' })} name="business_type" value="Freelancer" id="yes" />
                                    <label htmlFor="yes">
                                        <span>Freelancer</span>
                                    </label>
                                </div>
                                <div className="cap-check">
                                    <input type="radio" {...register('business_type', { required: 'Please select an event type' })} name='business_type' value="Registered Company" id="no" />
                                    <label htmlFor="no">
                                        <span>Registered Company</span>
                                    </label>
                                </div>
                            </div>
                            {errors.business_type && (
                                <div className="error-message">{errors.business_type.message}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Company / Brand Name</label>
                            <div className="inp-grp">
                                <input type="text" {...register('comp_name', { required: 'Please select an event type' })} placeholder='Enter Name' />
                            </div>
                            {errors.comp_name && (
                                <div className="error-message">{errors.comp_name.message}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Website</label>
                            <div className="inp-grp">
                                <input type="text" {...register('website', { required: 'Please select an event type' })} placeholder='Enter Url' />
                            </div>
                            {errors.website && (
                                <div className="error-message">{errors.website.message}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Instagram / Tik Tok</label>
                            <div className="inp-grp">
                                <input type="text" {...register('instagram', { required: 'Please select an event type' })} placeholder='Enter Url' />
                            </div>
                            {errors.instagram && (
                                <div className="error-message">{errors.instagram.message}</div>
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

export default SecondStep