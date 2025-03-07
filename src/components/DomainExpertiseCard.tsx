interface DomainExpertiseProps {
  title?: string;
  domains?: {
    name: string;
    icon: string;
  }[];
}

const DomainExpertiseCard = ({ 
  title = "Market domain expertise",
  domains = [
    { name: "SaaS", icon: "/icons/cloud.svg" },
    { name: "Cloud communication", icon: "/icons/phone.svg" }
  ]
}: DomainExpertiseProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm w-full overflow-hidden p-4">
      <h3 className="text-gray-900 font-medium text-sm mb-3">{title}</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {domains.map((domain, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-3 flex flex-col items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center mb-1.5">
              {domain.name === "SaaS" && (
                <svg width="20" height="16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 9.00002C22 13.4183 18.4183 17 14 17H10C5.58172 17 2 13.4183 2 9.00002C2 4.58173 5.58172 1 10 1H14C18.4183 1 22 4.58173 22 9.00002Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 21C8.10457 21 9 20.1046 9 19C9 17.8954 8.10457 17 7 17C5.89543 17 5 17.8954 5 19C5 20.1046 5.89543 21 7 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {domain.name === "Cloud communication" && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <p className="text-gray-900 text-[10px] text-center">
              {domain.name === "Cloud communication" ? (
                <>
                  Cloud<br />communication
                </>
              ) : domain.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainExpertiseCard; 