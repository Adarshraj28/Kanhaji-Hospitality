"use client";

import { useState } from "react";

interface ClientLogoCardProps {
  client: {
    name: string;
    logo: string;
  };
}

export default function ClientLogoCard({ client }: ClientLogoCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="h-20 md:h-24 rounded-lg bg-white border border-[#f3efe7] flex items-center justify-center p-3 md:p-4 hover:shadow-md hover:border-[#e0d4c4] transition-all duration-300 group">
      {hasError ? (
        <span className="text-xs font-semibold text-[#c4b8a8] text-center leading-tight">
          {client.name}
        </span>
      ) : (
        <img
          src={client.logo}
          alt={client.name}
          className="max-h-10 md:max-h-12 max-w-[80%] object-contain opacity-100 transition-all duration-300"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
