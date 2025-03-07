import { useOnboarding } from '../../contexts/onboarding-context';
import Image from 'next/image';
import { ProgressSteps } from '../ProgressSteps';

const templates = [
  {
    id: 'full-story',
    title: 'Full Story',
    description: 'Template 1 of 5',
    features: [
      { icon: '👤', text: 'About you' },
      { icon: '📞', text: 'Contact section' },
      { icon: '🏢', text: 'About current company' },
      { icon: '🔗', text: 'Content - Links & files' },
      { icon: '🖼️', text: 'Gallery - Video, image & gif' }
    ]
  },
  {
    id: 'big-picture',
    title: 'Big Picture',
    description: 'Template 2 of 5',
    features: [
      { icon: '👤', text: 'About you' },
      { icon: '📞', text: 'Contact section' },
      { icon: '🏢', text: 'About current company' },
      { icon: '🔗', text: 'Content - Links & files' },
      { icon: '🖼️', text: 'Gallery - Video, image & gif' }
    ]
  }
];

export const TemplateStep = () => {
  const { formData, setFormValues, nextStep, prevStep } = useOnboarding();

  const handleSelect = (templateId: string) => {
    setFormValues({ template: templateId });
    
    // Enhanced logging when a template is selected
    const selectedTemplate = templates.find(t => t.id === templateId);
    console.log(`Template selected: "${selectedTemplate?.title}" (ID: ${templateId})`);
    console.log('Selection timestamp:', new Date().toISOString());
    console.log('Template details:', selectedTemplate);
    
    nextStep();
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 ">
      {/* Cardtree Logo */}
      <div className="relative mb-8 md:absolute md:top-8 md:left-8 flex justify-center md:justify-start">
        <Image
          src="/images/cardtree-icon.png"
          alt="Cardtree Logo"
          width={135}
          height={40}
          style={{ height: 'auto' }}
          className="w-[110px] md:w-[135px]"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900">Choose a template</h2>
        
        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {templates.map((template) => (
            <div key={template.id} className="flex flex-col">
              {/* Template Title */}
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-gray-900 text-center">{template.title}</h3>
                <p className="text-sm text-gray-500 text-center">{template.description}</p>
              </div>
              
              {/* Template Wireframe */}
              <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-4 mx-auto w-full sm:w-[450px] overflow-x-auto">
                <div className="bg-gray-100 rounded-lg flex items-center justify-center">
                  {template.id === 'full-story' ? (
                    <div className="w-full aspect-[4/3] py-2 relative min-w-[300px]">
                      {/* Top section with icon */}
                      <div className="w-full h-[80px] bg-white rounded-lg mb-4 flex items-center justify-center border border-gray-300">
                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden">
                          <Image 
                            src="/images/alien.png" 
                            alt="Alien icon" 
                            width={30} 
                            height={30}
                            className="object-contain" 
                          />
                        </div>
                      </div>
                      
                      {/* Middle section with two columns */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="border border-gray-300 rounded-lg h-14 bg-white"></div>
                        <div className="border border-gray-300 rounded-lg h-14 bg-white"></div>
                      </div>
                      
                      {/* Bottom section with three columns */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="border border-gray-300 rounded-lg h-24 bg-white"></div>
                        <div className="border border-gray-300 rounded-lg h-24 bg-white"></div>
                        <div className="border border-gray-300 rounded-lg h-24 bg-white"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full aspect-[4/3] py-2 relative min-w-[300px]">
                      {/* Top section with icon */}
                      <div className="w-full h-[80px] bg-white rounded-lg mb-4 flex items-center justify-center border border-gray-300">
                        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden">
                          <Image 
                            src="/images/oggy1.png" 
                            alt="Oggy icon" 
                            width={30} 
                            height={30}
                            className="object-contain" 
                          />
                        </div>
                      </div>
                      
                      {/* Middle section with two columns */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="border border-gray-300 rounded-lg h-14 bg-white"></div>
                        <div className="border border-gray-300 rounded-lg h-14 bg-white"></div>
                      </div>
                      
                      {/* Bottom section with two columns */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border border-gray-300 rounded-lg h-24 bg-white"></div>
                        <div className="border border-gray-300 rounded-lg h-24 bg-white"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex mb-5 mt-2 gap-2 justify-center">
                <button 
                  onClick={() => handleSelect(template.id)}
                  className="bg-black text-white rounded-full text-xs font-medium py-2 px-6 hover:bg-gray-900"
                >
                  Use template
                </button>
                <button className="flex items-center justify-center py-2 px-4 border border-gray-200 rounded-full text-xs text-gray-800 hover:bg-gray-50">
                  Preview 
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 text-gray-500">
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              {/* Features List */}
              <div className="space-y-1.5 mx-auto max-w-fit">
                {template.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-xs">
                    <span className="text-blue-500 mr-2 w-4 h-4 flex-shrink-0 flex items-center justify-center">
                      {idx === 0 && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      )}
                      {idx === 1 && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z"></path>
                        </svg>
                      )}
                      {idx === 2 && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 3h18v18H3zM8 12h8"></path>
                          <path d="M12 8v8"></path>
                        </svg>
                      )}
                      {idx === 3 && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"></path>
                        </svg>
                      )}
                      {idx === 4 && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      )}
                    </span>
                    <span className={idx < 3 ? "text-blue-500" : "text-gray-400"}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};