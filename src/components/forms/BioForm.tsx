import { UseFormRegister, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';
import { SearchIcon } from '../../icons/search-icon';

// Define a specific interface for the form values
interface BioFormValues {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
  location?: string;
  bio?: string;
}

interface BioFormProps {
  register: UseFormRegister<BioFormValues>;
  errors: FieldErrors<BioFormValues>;
  handleSubmit: UseFormHandleSubmit<BioFormValues>;
  onSubmit: (data: BioFormValues) => void;
  defaultValues?: Partial<BioFormValues>;
}

export const BioForm = ({ register, errors, handleSubmit, onSubmit }: BioFormProps) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full max-w-[480px] px-4 sm:px-0">
      <div className="mb-4">
        <h1 className="text-2xl sm:text-[28px] font-bold mb-1 text-gray-900">Bio hero details</h1>
        <p className="text-sm text-gray-500">We&apos;ll use this info to build your page.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            First name<span className="text-red-500">*</span>
          </label>
          <input
            {...register('firstName')}
            placeholder="First name"
            className="w-full px-3 py-2.5 border border-gray-300 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Last name<span className="text-red-500">*</span>
          </label>
          <input
            {...register('lastName')}
            placeholder="Last name" 
            className="w-full px-3 py-2.5 border border-gray-300 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Location
        </label>
        <input
          {...register('location')}
          placeholder="Place, City, Country"
          className="w-full px-3 py-2.5 border border-gray-300 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
        />
        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Title
        </label>
        <input
          {...register('title')}
          placeholder="Marketing Lead"
          className="w-full px-3 py-2.5 border border-gray-300 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Company
        </label>
        <div className="relative">
          <input
            {...register('company')}
            placeholder="Carrot Corp"
            className="w-full px-3 py-2.5 border border-gray-300 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10 text-sm"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <SearchIcon />
          </div>
        </div>
        {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
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