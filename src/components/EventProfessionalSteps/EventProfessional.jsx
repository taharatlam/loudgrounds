'use client'
// components/StepFormikForm.js
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Image from 'next/image';

import { useFormState } from '@/contexts/FormContext';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import FifthStep from './FifthStep';
import Summary from './Summary';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const EventProfessional = ({ onSubmit, handleChange }) => {

    const { step } = useFormState();
    
    switch (step) {
      case 1:
        return <FirstStep handleChange={handleChange}/>;
      case 2:
        return <SecondStep />;
      case 3:
        return  <ThirdStep />;
      case 4:
        return  <FifthStep />;
      case 5:
        return  <Summary />;
      default:
        return null;
    }

};

export default EventProfessional;
