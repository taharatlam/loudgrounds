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
                        What&apos;s your guest size and budget for the event?          
                        </h3>
                    </div>
                </div>
                <div className="row mt-4 justify-content-center">
                    <div className="col-lg-8 col-12">
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Estimated attendees?</label>
                            <div className="inp-grp">
                                <select {...register('guest_count', { required: 'Please select an event type' })} id="" >
                                    <option value="">Select</option>
                                    <option value="<25 ">{'<25'}</option>
                                    <option value="25-100">25-100</option>
                                    <option value="100-500 ">100-500 </option>
                                    <option value="500+">500+</option>
                                </select>
                            </div>
                            {errors.guest_count && (
                                <div className="error-message">{errors.guest_count.message}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Estimated budget?</label>
                            <div className="inp-grp">
                                <select {...register('total_budget', { required: 'Please select an event type' })} id="" >
                                    <option value="">Select</option>
                                    <option value="Under AED 5K">Under AED 5K</option>
                                    <option value="AED 5K - AED 20K">AED 5K - AED 20K</option>
                                    <option value="AED 20K - AED 50K">AED 20K - AED 50K</option>
                                    <option value="AED 50K - AED 100K">AED 50K - AED 100K</option>
                                    <option value="AED 100K+">AED 100K+</option>
                                </select>
                            </div>
                            {errors.total_budget && (
                                <div className="error-message">{errors.total_budget.message}</div>
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