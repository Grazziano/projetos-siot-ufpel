import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CornerDownRight } from 'lucide-react';

type AlertProps = {
  variant?: string;
  title: string;
  href: string;
  description: string;
  children?: React.ReactNode;
};

export default function AlertComponent({
  title,
  href,
  description,
}: AlertProps) {
  return (
    <a href={href} target="_blank" key={title}>
      <Alert className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 hover:border-blue-700 dark:hover:border-blue-300 transition-colors bg-blue-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <CornerDownRight className="text-blue-500 dark:text-blue-400 mr-2 mt-1" />
        <AlertTitle className="text-lg font-semibold text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 transition-colors">
          {title}
        </AlertTitle>
        <AlertDescription className="text-gray-600 dark:text-gray-300 leading-relaxed ml-6">
          {description}
        </AlertDescription>
      </Alert>
    </a>
  );
}
