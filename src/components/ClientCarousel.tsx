import Image from 'next/image';

interface ClientLogo {
  name: string;
  src: string;
}

interface ClientCarouselProps {
  logos: ClientLogo[];
}

export const ClientCarousel = ({ logos }: ClientCarouselProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {logos.map((client, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full h-10 sm:h-32 flex items-center justify-center bg-white rounded-lg border border-gray-100 p-4">
              <Image 
                src={client.src} 
                alt={client.name} 
                width={150}
                height={30}
                className="object-contain "
                priority
              />
            </div>
            <p className="text-[9px] sm:text-[10px] text-gray-500 mt-1">{client.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 