import React from 'react';

interface ProgressStepsProps {
  currentStep: number;
}

export const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {
  return (
    <div className="flex justify-center items-start mb-12 relative">
     
      
      {/* Step 1 */}
      <div className="flex flex-col items-center z-10 w-24">
        <div 
          className={`flex items-center justify-center w-7 h-7 rounded-full text-xs mb-2
            ${currentStep >= 1 ? 'bg-blue-400 text-white' : 'bg-gray-200 text-gray-500'}`}
        >
          1
        </div>
        <span className={`text-xs text-center ${currentStep === 1 ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>About</span>
      </div>
      
      {/* Step 2 */}
      <div className="flex flex-col items-center z-10 w-28">
        <div 
          className={`flex items-center justify-center w-7 h-7 rounded-full text-xs mb-2
            ${currentStep >= 2 ? 'bg-blue-400 text-white' : 'bg-gray-200 text-gray-500'}`}
        >
          2
        </div>
        <span className={`text-xs text-center ${currentStep === 2 ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>Contact info</span>
      </div>
      
      {/* Step 3 */}
      <div className="flex flex-col items-center z-10 w-24">
        <div 
          className={`flex items-center justify-center w-7 h-7 rounded-full text-xs mb-2
            ${currentStep >= 3 ? 'bg-blue-400 text-white' : 'bg-gray-200 text-gray-500'}`}
        >
          3
        </div>
        <span className={`text-xs text-center ${currentStep === 3 ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
          Template + <span className={currentStep === 3 ? 'font-bold text-blue-600' : 'bg-clip-text text-transparent bg-gradient-to-b from-blue-900 via-orange-400 to-yellow-100 font-bold'}>AI</span>
        </span>
      </div>
      
      {/* Chevrons */}
      <div className="absolute left-[calc(37.5%-8px)] top-[12px] z-10">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke={currentStep >= 2 ? '#3B82F6' : '#9CA3AF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="absolute right-[calc(37.5%-8px)] top-[12px] z-10">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke={currentStep >= 3 ? '#3B82F6' : '#9CA3AF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}; 