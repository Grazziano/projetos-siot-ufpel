import logo from '../assets/imgs/Escudo Colorido UFPEL_10042014.png';

export default function Header() {
  return (
    <div className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6">
          <div className="w-24 h-24 flex-shrink-0">
            <img
              src={logo}
              alt="Logo UFPel"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Repositórios de Pesquisa - UFPel
            </h1>
            <p className="text-lg text-gray-600 font-medium">
              Laboratório de Sistemas Ubíquos e Paralelos (LUPS)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
