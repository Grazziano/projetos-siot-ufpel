import { Hammer } from 'lucide-react';
import { Badge } from './ui/badge';
import Title from './Title';

export default function Technologies() {
  const tecks = [
    { name: 'MongoDB', link: 'https://www.mongodb.com/' },
    { name: 'NestJS', link: 'https://nestjs.com/' },
    { name: 'React.js', link: 'https://react.dev/' },
    { name: 'Flutter', link: 'https://flutter.dev/' },
    { name: 'ETL', link: 'https://www.ibm.com/br-pt/think/topics/etl' },
    { name: 'Node.js', link: 'https://nodejs.org/pt' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-lg p-6 md:p-8 mb-8">
      <Title icon={Hammer} title="Tecnologias Utilizadas" />

      <div className="flex flex-wrap gap-3">
        {tecks.map((tech) => (
          <Badge
            key={tech.name}
            variant="outline"
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-50 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
            asChild
          >
            <a href={tech.link} target="_blank">
              {tech.name}
            </a>
          </Badge>
        ))}
      </div>
    </div>
  );
}
