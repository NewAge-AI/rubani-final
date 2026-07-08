import Image from "next/image";

interface RubaniMarkProps {
  className?: string;
}

interface RubaniIconProps {
  className?: string;
}

export function RubaniMark({
  className = "h-8 w-auto shrink-0",
}: RubaniMarkProps) {
  return (
    <Image
      alt="Rubani Logo"
      className={`${className} dark:grayscale dark:invert`}
      height={512}
      unoptimized
      src="/brand/rubani-icon.svg"
      width={512}
    />
  );
}

export function RubaniIcon({
  className = "size-7 shrink-0",
}: RubaniIconProps) {
  return (
    <Image
      alt="Rubani Icon"
      className={`${className} dark:grayscale dark:invert`}
      height={512}
      unoptimized
      src="/brand/rubani-icon.svg"
      width={512}
    />
  );
}
