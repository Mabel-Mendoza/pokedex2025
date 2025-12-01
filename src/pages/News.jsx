import { HeroPanel } from "../components/HeroPanel";
import { NewsCard } from "../components/NewsCard";

export const News = () => {
    // Datos estáticos de ejemplo
    const posts = [
        {
            title: "Nuevos Pokémon descubiertos en la región Galar",
            date: "30 de Noviembre, 2025",
            image: "https://images.pexels.com/photos/9560283/pexels-photo-9560283.jpeg",
            excerpt: "Explora los nuevos Pokémon que han aparecido recientemente en la región de Galar. ¡Prepárate para atraparlos a todos!"
        },
        {
            title: "Evento especial: Días de la Evolución",
            date: "25 de Noviembre, 2025",
            image: "https://images.pexels.com/photos/9343494/pexels-photo-9343494.jpeg",
            excerpt: "Durante este evento, los Pokémon evolucionarán más rápido. No te pierdas los retos y recompensas especiales."
        },
        {
            title: "Guía de tipos: Cómo vencer a Pokémon legendarios",
            date: "20 de Noviembre, 2025",
            image: "https://images.pexels.com/photos/9560277/pexels-photo-9560277.jpeg",
            excerpt: "Aprende estrategias efectivas para enfrentarte a Pokémon legendarios y completar tu Pokédex con éxito."
        },
    ];

    return (
        <div className="flex flex-col items-center">
            {/* Hero */}
            <HeroPanel photoId="130" />

            {/* Título */}
            <div className="text-center mt-8 px-4 max-w-3xl">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Noticias Pokémon</h1>
                <p className="text-gray-600 text-lg">
                    Mantente al día con las últimas novedades del mundo Pokémon. Aquí encontrarás eventos, nuevas especies y consejos para entrenadores.
                </p>
            </div>

            {/* Posts */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl">
                {posts.map((post, index) => (
                    <NewsCard
                        key={index}
                        title={post.title}
                        date={post.date}
                        image={post.image}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>
        </div>
    );
}
