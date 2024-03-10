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
                            What’s your guest size and budget for the event?            
                        </h3>
                    </div>
                </div>
                <div className="row mt-4 justify-content-center">
                    <div className="col-lg-8 col-12">
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Estimated Total Guest Count?</label>
                            <div className="inp-grp">
                                <select {...register('guestCount', { required: 'Please select an event type' })} id="" >
                                    <option value="">Select</option>
                                    <option value="50 - 100">50 - 100</option>
                                    <option value="100 - 200">100 - 200</option>
                                </select>
                            </div>
                            {errors.guestCount && (
                                <div className="error-message">{errors.guestCount.message}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Estimated Total Budget for the event?</label>
                            <div className="inp-grp">
                                <select {...register('eventbudget', { required: 'Please select an event type' })} id="" >
                                    <option value="">Select</option>
                                    <option value="50K - 100K USD">50K - 100K USD</option>
                                    <option value="100K - 200K USD">100K - 200K USD</option>
                                </select>
                            </div>
                            {errors.eventbudget && (
                                <div className="error-message">{errors.eventbudget.message}</div>
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