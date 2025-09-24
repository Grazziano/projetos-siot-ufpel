import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <span className="mr-2">
          <Mail />
        </span>
        Contato e Colaboração
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Para informações adicionais ou sugestões de colaboração, entre em
        contato com os pesquisadores responsáveis por cada repositório, ou com a
        coordenação da <strong className="text-blue-600">UFPel</strong>.
      </p>
    </div>
  );
}
