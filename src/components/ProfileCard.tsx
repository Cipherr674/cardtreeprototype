import Image from 'next/image';

// Types
export interface ProfileData {
  firstName?: string;
  lastName?: string;
  title?: string;
  company?: string;
  location?: string;
  email?: string;
  phone?: string;
}

interface ProfileCardProps {
  userData: ProfileData;
  showContactInfo?: boolean;
}

// Component for the digital card profile preview
const ProfileCard = ({ userData, showContactInfo = false }: ProfileCardProps) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm max-w-[450px] w-full mx-auto p-5">
    <div className="flex">
      {/* Left side with profile info */}
      <div className="w-1/2 flex flex-col  justify-start">
        <div className="relative w-[85px] h-[85px] rounded-full overflow-hidden bg-gray-100 mb-2">
          <Image 
            src="/images/hudson.png" 
            alt="Profile" 
            fill
            className="object-cover border-1 border-blue-500 rounded-full"
          />
        </div>
        <div className="w-full flex flex-col items-start">
          <h3 className="font-semibold text-gray-900 text-sm">
            {userData.firstName || 'Stanley'} {userData.lastName || 'Hudson'}
          </h3>
          <p className="text-gray-600 text-[11px]">{userData.title || 'Sales Leader'}</p>
          <p className="text-gray-600 text-[11px] mb-1">{userData.company || 'Carrot Corp'}</p>
        </div>
        
        {/* Carrot icon with blue background */}
        <div className="self-start ">
          <div className="w-14 h-7 bg-white-200 border-1 border-white-500 rounded-md  flex items-center justify-center  ">
            <Image
              src="/images/carrot.png" 
              alt="Carrot Corp" 
              width={16}
              height={16}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Right side with QR code and buttons */}
      <div className="w-1/2">
        <div className="bg-blue-50 rounded-xl p-3 flex flex-col items-center">
          <div className="text-[10px] text-gray-500 mb-1">Contact with me</div>
          <div className="w-[75px] h-[75px] bg-white rounded-lg flex items-center justify-center p-1 mb-1.5">
            <Image 
              src="/images/qrcode.png" 
              alt="QR Code" 
              width={65} 
              height={65}
              className="w-full h-full"
            />
          </div>
          <p className="text-[10px] text-blue-500 mb-4 text-center">Scan me card</p>
          
          {/* Action buttons */}
          <div className="flex justify-center gap-2 max-w-full overflow-hidden">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500 sm:w-3.5 sm:h-3.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500 sm:w-3.5 sm:h-3.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500 sm:w-3.5 sm:h-3.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500 sm:w-3.5 sm:h-3.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileCard;