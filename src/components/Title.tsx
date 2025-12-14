import type { LucideIcon } from "lucide-react";

interface TitleProps {
  icon: LucideIcon;
  title: string;
}

export default function Title({ icon, title }: TitleProps) {
  const Icon = icon;
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
      <span className="mr-3 text-blue-600 dark:text-blue-400">
        <Icon className="w-7 h-7" />
      </span>
      {title}
    </h2>
  );
}
