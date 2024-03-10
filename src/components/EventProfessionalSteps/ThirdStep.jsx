'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'

import { Controller, useForm  } from 'react-hook-form'
import { useFormState } from '@/contexts/FormContext'
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";

const ThirdStep = () => {

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
                        What event services do you provide?         
                        </h3>
                    </div>
                </div>
                <div className="row mt-4 justify-content-center">
                    <div className="col-lg-8 col-12">
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Can you share a detail of the services you offer?</label>
                            <div className="inp-grp">
                                <textarea {...register('details')} id="" cols="30" placeholder='Enter Details' rows="4"></textarea>
                            </div>
                            {errors.guestCount && (
                                <div className="error-message">{errors.guestCount.message}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Do you have any standard packages?</label>
                            <div className="d-flex gap-2">
                                <div className="cap-check">
                                    <input type="radio" {...register('anyStandardPackage', { required: 'Please select an event type' })} name="anyStandardPackage" value="yes" id="yes" />
                                    <label htmlFor="yes">
                                        <span>YES</span>
                                    </label>
                                </div>
                                <div className="cap-check">
                                    <input type="radio" {...register('anyStandardPackage', { required: 'Please select an event type' })} name='anyStandardPackage' value="no" id="no" />
                                    <label htmlFor="no">
                                        <span>NO</span>
                                    </label>
                                </div>
                            </div>
                            {errors.anyStandardPackage && (
                                <div className="error-message">{errors.anyStandardPackage.message}</div>
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

export default ThirdStep