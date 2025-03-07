'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  location: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  template: string;
}

interface OnboardingContextType {
  currentStep: number;
  formData: FormData;
  nextStep: () => void;
  prevStep: () => void;
  setFormValues: (values: Partial<FormData>) => void;
}

const OnboardingContext = createContext<OnboardingContextType>({} as OnboardingContextType);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    location: '',
    title: '',
    company: '',
    email: '',
    phone: '',
    template: '',
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 2));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const setFormValues = (values: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...values }));
  };

  return (
    <OnboardingContext.Provider value={{ currentStep, formData, nextStep, prevStep, setFormValues }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext);