import Image from 'next/image';
import ProfileCard, { ProfileData } from './ProfileCard';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';

// Types
interface PreviewPanelProps {
  userData: ProfileData;
  contactData?: ProfileData;
  showContactInfo?: boolean;
}

// Feature card components
const BrochureCard = () => (
  <div className="bg-white rounded-xl p-3 shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300 ">
    <div className="flex flex-col space-y-1.5">
      <h4 className="text-xs font-medium text-gray-900 truncate">Product brochure - one page PDF</h4>
      <p className="text-[9px] text-gray-500 truncate">About us and services</p>
    </div>
    
    <div className="mt-2 rounded-lg overflow-hidden h-[86px] bg-gradient-to-r from-blue-50 to-blue-100 relative">
      {/* Brochure preview image that tilts slightly on hover */}
      <div className="absolute right-0 top-0 h-full w-3/4 transform group-hover:-rotate-1 group-hover:scale-105 transition-transform duration-300 origin-bottom-right">
        <Image 
          src="/images/company.jpg" 
          alt="Brochure" 
          fill
          className="object-cover"
        />
        
        {/* Decorative angle line */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-blue-200 to-blue-400"></div>
      </div>
      
      {/* Circular indicator */}
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
        <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 text-xs font-medium border border-gray-100 group-hover:shadow transition-shadow duration-300">
          <span>1</span>
        </div>
      </div>
      
      {/* Decorative dots */}
      <div className="absolute left-3 bottom-3 flex space-x-1">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-300 opacity-70"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-blue-300 opacity-40"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-blue-300 opacity-20"></div>
      </div>
    </div>
    
    {/* Download indicator */}
    <div className="mt-2 flex items-center justify-end">
      <div className="flex items-center text-[8px] text-blue-500 font-medium">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Download PDF
      </div>
    </div>
  </div>
);

const DomainExpertiseCard = () => {
  // Define domain expertise items
  const domainItems = [
    { name: 'SaaS', icon: 'cloud' },
    { name: 'Cloud communication', icon: 'phone' },
    { name: 'Real Estate', icon: 'home' },
    { name: 'Banking Service', icon: 'bank' }
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm overflow-hidden">
      <h4 className="text-sm font-medium mb-3 text-gray-900">Market domain expertise</h4>
      
      {/* Scrolling container with overflow hidden */}
      <div className="relative overflow-hidden">
        {/* Scrolling content with animation */}
        <div className="animate-scroll-horizontal flex gap-3">
          {/* First set of items */}
          {domainItems.map((domain, index) => (
            <div key={`first-${index}`} className="min-w-[95px] flex-shrink-0 flex flex-col items-center p-3 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center mb-1.5">
                {domain.icon === 'cloud' && (
                  <svg width="20" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {domain.icon === 'phone' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {domain.icon === 'home' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12h6v10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {domain.icon === 'bank' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 22h18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 3h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17a2 2 0 100-4 2 2 0 000 4z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <p className="text-gray-900 text-[10px] text-center">
                {domain.name === "Cloud communication" ? (
                  <>
                    Cloud<br />communication
                  </>
                ) : (
                  domain.name
                )}
              </p>
            </div>
          ))}
          
          {/* Duplicate set for continuous scrolling */}
          {domainItems.map((domain, index) => (
            <div key={`second-${index}`} className="min-w-[95px] flex-shrink-0 flex flex-col items-center p-3 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center mb-1.5">
                {domain.icon === 'cloud' && (
                  <svg width="20" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {domain.icon === 'phone' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {domain.icon === 'home' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12h6v10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {domain.icon === 'bank' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 22h18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 3h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17a2 2 0 100-4 2 2 0 000 4z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <p className="text-gray-900 text-[10px] text-center">
                {domain.name === "Cloud communication" ? (
                  <>
                    Cloud<br />communication
                  </>
                ) : (
                  domain.name
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TechStackCard = () => {
  // Define tech stack items - keep it to just two like in the image
  const techStacks = [
    { name: 'HubSpot', icon: 'hubspot.png', bgColor: 'bg-orange-50' },
    { name: 'SalesForce', icon: 'salesforce.png', bgColor: 'bg-blue-50' },
    { name: 'GitHub', icon: 'github.png', bgColor: 'bg-gray-50' },
    { name: 'React', icon: 'react.png', bgColor: 'bg-blue-100' },
    { name: 'AWS', icon: 'aws-icon.png', bgColor: 'bg-yellow-50' },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm overflow-hidden h-full w-full">
      <h4 className="text-xs font-medium mb-1 text-gray-900">Tech stack expertise</h4>
      <p className="text-[9px] text-gray-500 mb-2">Tech + deploy for my customers</p>
      
      {/* Carousel container with fixed height and overflow hidden */}
      <div className="relative h-28 overflow-hidden">
        {/* Scrolling content container */}
        <div className="animate-scroll-vertical absolute top-0 left-0 w-full">
          {/* First set of items */}
          <div className="grid grid-cols-1 gap-y-3 justify-items-center">
            {techStacks.map((tech, index) => (
              <div key={`first-${index}`} className="flex flex-col items-center">
                <div className="w-[60px] h-[60px] flex items-center justify-center bg-white rounded-lg border border-gray-100 p-3 mb-1">
                  <Image 
                    src={`/images/${tech.icon}`} 
                    alt={tech.name} 
                    width={35} 
                    height={35} 
                    className="object-contain" 
                  />
                </div>
                <p className="text-[9px] text-gray-500 text-center mt-1">{tech.name}</p>
              </div>
            ))}
          </div>
          
          {/* Duplicate set of items for seamless looping */}
          <div className="grid grid-cols-1 gap-y-4 mt-6 justify-items-center">
            {techStacks.map((tech, index) => (
              <div key={`second-${index}`} className="flex flex-col items-center">
                <div className="w-[60px] h-[60px] flex items-center justify-center bg-white rounded-lg border border-gray-100 p-3 mb-1">
                  <Image 
                    src={`/images/${tech.icon}`} 
                    alt={tech.name} 
                    width={35} 
                    height={35} 
                    className="object-contain" 
                  />
                </div>
                <p className="text-[9px] text-gray-500 text-center mt-1">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoCard = () => (
  <div className="bg-white rounded-xl p-4 shadow-sm overflow-hidden h-full flex flex-col w-full">
    <div className="mb-auto">
      <h4 className="text-xs font-medium mb-1 text-gray-900">Product Walkthrough - 5 minutes demo video</h4>
      <p className="text-[9px] text-gray-500">Learn the basics of Acme Invoice and get started quickly.</p>
    </div>
    <div className="rounded-lg overflow-hidden flex items-center justify-center mt-4 py-2">
      <div className="relative w-full max-w-[260px] aspect-video flex items-center justify-center">
        <Image 
          src="/images/youtube.png" 
          alt="YouTube video player showing product walkthrough" 
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>
);

// Calendar card component
const CalendarCard = () => (
  <div className="bg-white rounded-xl p-4 shadow-sm overflow-hidden h-full flex flex-col w-full">
    <div className="mb-4">
      <h4 className="text-xs font-medium text-gray-900 mb-1">Book my calendar</h4>
      <p className="text-[9px] text-gray-500">At your convenience</p>
    </div>
    <div className="flex flex-col items-center ">
      <div className="w-12 h-12 flex self-start justify-center  ">
        <Image
          src="/images/calendy.png"
          alt="Calendly"
          width={70}
          height={70}
          className="object-contain"
        />
      </div>
      
      {/* Calendar dots */}
      <div className="grid grid-cols-5 gap-2 w-full max-w-[180px] mt-5">
        {/* First row */}
        {Array(5).fill(0).map((_, index) => (
          <div key={`row1-${index}`} className="w-5 h-5 rounded-full bg-gray-200"></div>
        ))}
        {/* Second row */}
        {Array(5).fill(0).map((_, index) => (
          <div key={`row2-${index}`} className="w-5 h-5 rounded-full bg-gray-200"></div>
        ))}
      </div>
    </div>
  </div>
);

// Client Logos Carousel Component
const ClientLogosCarousel = ({ logos }: { logos: { name: string; src: string }[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    dragFree: true,
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  });

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return;
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex py-2">
          {logos.map((client, index) => (
            <div key={index} className="flex-[0_0_25%] min-w-0 px-2">
              <div className="flex flex-col items-center">
                <div className="h-16 sm:h-20 flex items-center justify-center">
                  <Image 
                    src={client.src} 
                    alt={client.name} 
                    width={120} 
                    height={60} 
                    className="object-contain h-12 sm:h-16"
                    priority
                  />
                </div>
                <p className="text-[9px] sm:text-[10px] text-gray-500 mt-1 text-center">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main component
export const PreviewPanel = ({ userData, contactData, showContactInfo = false }: PreviewPanelProps) => {
  // Define client logos
  const clientLogos = [
    { name: 'Snowflake', src: '/images/snowflake.png' },
    { name: 'Exotel', src: '/images/Exotel.png' },
    { name: 'Luru', src: '/images/luru.png' },
    { name: 'Freshworks', src: '/images/Freshworks-vector-logo.png' },
  ];

  // Combine userData and contactData if both are provided
  const mergedData = {
    ...userData,
    ...(contactData || {})
  };

  return (
    <div className="overflow-hidden flex flex-col gap-3 rounded-xl w-full">
      {/* Profile Card Section */}
      <div className="p-3 sm:p-5">
        <ProfileCard userData={mergedData} showContactInfo={showContactInfo} />
      </div>
      
      {/* Client Logos Section */}
      <div className="px-3 sm:px-5 pb-3 sm:pb-4 w-full">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden ">
          <div className="p-3 sm:p-4">
            <h5 className="text-xs font-medium text-gray-700 mb-2">Esteemed clients and partners</h5>
              <ClientLogosCarousel   logos={clientLogos} />
            </div>
        </div>
      </div>
      
      {/* Feature Cards Grid */}
      <div className="px-3 sm:px-5 pb-4 sm:pb-5 w-full">
        {/* First row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <BrochureCard />
          <DomainExpertiseCard />
        </div>
        
        {/* Second row - Tech Stack takes 4/12, Video+Calendar takes 8/12 */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div className="sm:col-span-4">
            <TechStackCard />
          </div>
          <div className="sm:col-span-8 grid grid-cols-2 gap-4">
            <VideoCard />
            <CalendarCard />
          </div>
        </div>
      </div>
    </div>
  );
}; 