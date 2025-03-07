import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useOnboarding } from '../../contexts/onboarding-context';
import Image from 'next/image';
import { BioForm } from '../forms/BioForm';
import { PreviewPanel } from '../PreviewPanel';
import { ProgressSteps } from '../ProgressSteps';

// Define schema
const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  location: z.string().min(1, 'Location is required'),
  title: z.string().min(1, 'Title is required'),
  company: z.string().min(1, 'Company is required'),
});

export const BioStep = () => {
  const { formData, nextStep, setFormValues } = useOnboarding();
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData,
  });

  const watchedValues = watch();

  // Define the shape of the form data
  interface BioFormData {
    firstName: string;
    lastName: string;
    title: string;
    company: string;
    location?: string;
    bio?: string;
  }

  const onSubmit = (data: BioFormData) => {
    setFormValues(data);
    nextStep();
  };

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 py-4 lg:py-6">
        {/* Logo Header */}
        <div className="flex items-center mb-6 lg:mb-8">
          <div className="flex items-center">
            <Image 
              src="/images/cardtree-icon.png" 
              alt="Cardtree Logo" 
              width={155} 
              height={55} 
              className="mr-2"
            />
            
          </div>
        </div>

        {/* Using our reusable ProgressSteps component */}
        <ProgressSteps currentStep={1} />

        {/* Using BioForm component */}
        <div className="flex justify-center mt-4 lg:mt-6">
          <BioForm 
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        </div>
      </div>

      {/* Right Side - Using PreviewPanel - Match the rounded design from the image */}
      <div >
        <div className="w-full max-w-[750px] bg-gray-100 shadow-lg overflow-hidden">
          <PreviewPanel userData={watchedValues} />
        </div>
      </div>
    </div>
  );
};