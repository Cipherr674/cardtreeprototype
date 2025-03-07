'use client'; // Essential for client-side components

import { useOnboarding } from '@/contexts/onboarding-context';
import { BioStep } from '@/components/steps/BioStep';
import { ContactStep } from '@/components/steps/ContactStep';
import { TemplateStep } from '@/components/steps/TemplateStep';

export default function OnboardingPage() {
  const { currentStep } = useOnboarding();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div >
        
        
        {currentStep === 0 && <BioStep />}
        {currentStep === 1 && <ContactStep />}
        {currentStep === 2 && <TemplateStep />}
      </div>
    </div>
  );
}