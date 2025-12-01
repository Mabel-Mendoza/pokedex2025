import { HeroPanel } from "../components/HeroPanel";

export const About = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Hero */}
            <HeroPanel photoId="120" />

            {/* Sección de título */}
            <div className="text-center mt-8 px-4 max-w-3xl">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Acerca de Nosotros</h1>
                <p className="text-gray-600 text-lg">
                    Somos un equipo apasionado por el mundo de los Pokémon, dedicados a ofrecer la mejor experiencia a todos los entrenadores. 
                    Nuestra Pokédex digital está diseñada para que encuentres información detallada de cada criatura, desde los más comunes hasta los legendarios.
                </p>
            </div>

            {/* Sección de valores o equipo */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-5xl">
                {/* Card 1 */}
                <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
                    <h3 className="font-semibold text-xl mb-2">Nuestra Misión</h3>
                    <p className="text-gray-700">
                        Hacer que todos los entrenadores tengan acceso rápido y fácil a información completa de Pokémon.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
                    <h3 className="font-semibold text-xl mb-2">Nuestra Visión</h3>
                    <p className="text-gray-700">
                        Ser la Pokédex digital más completa y divertida para entrenadores de todo el mundo.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
                    <h3 className="font-semibold text-xl mb-2">Nuestros Valores</h3>
                    <p className="text-gray-700">
                        Pasión, compromiso y diversión son la base de todo lo que hacemos.
                    </p>
                </div>
            </div>

            {/* Imagen representativa */}
            <div className="mt-12 mb-16">
                <img 
                    src="https://images.pexels.com/photos/243698/pexels-photo-243698.jpeg" 
                    alt="Equipo de trabajo" 
                    className="rounded-lg shadow-lg max-w-full"
                />
            </div>
        </div>
    );
}
