import { ExternalLink, Github } from 'lucide-react';

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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="relative overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 p-6 mb-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-1">
        {/* Gradient accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="flex items-start gap-4">
          {/* Icon container */}
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
              <Github className="w-5 h-5 text-white" />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {title}
              </h3>
              <ExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 flex-shrink-0 mt-0.5 transition-colors" />
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
              {description}
            </p>
          </div>
        </div>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-indigo-50/0 dark:from-blue-950/0 dark:to-indigo-950/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/50 dark:group-hover:from-blue-950/20 dark:group-hover:to-indigo-950/20 transition-all duration-300 pointer-events-none rounded-xl" />
      </div>
    </a>
  );
}
