import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useOnboarding } from '../../contexts/onboarding-context';
import Image from 'next/image';
import { ContactForm } from '../forms/ContactForm';
import { PreviewPanel } from '../PreviewPanel';
import { ProgressSteps } from '../ProgressSteps';

// Define schema
const schema = z.object({
  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address (e.g., name@example.com)'),
  phone: z.string()
    .min(1, 'Phone number is required')
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 
      'Please enter a valid phone number (e.g., 123-456-7890)'),
});

export const ContactStep = () => {
  const { formData, nextStep, setFormValues } = useOnboarding();
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData,
  });

  const watchedValues = watch();

  // Define the shape of the form data
  interface ContactFormData {
    email: string;
    phone: string;
    location?: string;
    linkedin?: string;
    twitter?: string;
  }

  const onSubmit = (data: ContactFormData) => {
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
        <ProgressSteps currentStep={2} />

        {/* Using ContactForm component */}
        <div className="flex justify-center mt-4 lg:mt-6">
          <ContactForm 
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        </div>
      </div>

      {/* Right Side - Using PreviewPanel with contact info - Match the rounded design from the image */}
      <div className="w-full lg:w-1/2 bg-gray-100 py-6 px-4 sm:px-6 lg:px-8 rounded-xl lg:rounded-tr-2xl lg:rounded-br-2xl flex items-center justify-center">
        <div className="w-full max-w-[750px] bg-white rounded-xl lg:rounded-none lg:rounded-tr-2xl lg:rounded-br-2xl shadow-lg overflow-hidden">
          <PreviewPanel 
            userData={formData} 
            contactData={watchedValues} 
            showContactInfo={true} 
          />
        </div>
      </div>
    </div>
  );
};