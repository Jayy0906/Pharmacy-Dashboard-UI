// components/ui/Avatar.tsx
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}

export default function Avatar({ src, alt, size = "md" }: AvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <Image
      className={`rounded-full object-cover ${sizeClasses[size]}`}
      src={src}
      alt={alt}
      width={32}
      height={32}
      quality={100}
    />
  );
}
