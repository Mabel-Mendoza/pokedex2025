export const HeroPanel = (
    {
        photoId = "120"
    }
) => {
    return (
        <div className="w-full h-[75vh] overflow-hidden relative max-w-screen">
            <picture className="w-full h-full">

                {/* Imagen para pantallas grandes */}
                <source 
                    srcSet="https://images.pexels.com/photos/9661252/pexels-photo-9661252.jpeg" 
                    media="(min-width:1025px)" 
                />

                {/* Imagen para pantallas medianas */}
                <source 
                    srcSet="https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg" 
                    media="(min-width:720px)" 
                />

                {/* Imagen para móviles */}
                <img 
                    className="w-full h-full object-cover"
                    src="https://images.pexels.com/photos/7708407/pexels-photo-7708407.jpeg"
                    alt="Hero Panel Images"
                />

            </picture>

            
        </div>
    );
}
