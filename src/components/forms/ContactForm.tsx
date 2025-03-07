import { UseFormRegister, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

interface ContactFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: (data: any) => void;
  defaultValues?: any;
}

export const ContactForm = ({ register, errors, handleSubmit, onSubmit }: ContactFormProps) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full max-w-[480px] px-4 sm:px-0">
      <div className="mb-4">
        <h1 className="text-2xl sm:text-[28px] font-bold mb-1 text-gray-900">How can your audience connect with you?</h1>
        <p className="text-sm text-gray-500">You can customize the details later.</p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Email ID<span className="text-red-500">*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          className="w-full px-3 py-2.5 border border-gray-300 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
          placeholder="name@domain.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Phone number
        </label>
        <input
          {...register('phone')}
          className="w-full px-3 py-2.5 border border-gray-300 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
          placeholder="(+XX)99999999"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div className="flex justify-center mt-8">
        <button
          type="submit"
          className="px-6 sm:px-10 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors w-full font-medium text-sm"
        >
          Continue
        </button>
      </div>
    </form>
  );
}; 