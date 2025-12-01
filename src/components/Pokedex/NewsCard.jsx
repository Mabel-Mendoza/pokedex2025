// components/NewsCard.jsx
export const NewsCard = ({ title, date, image, excerpt }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h3 className="font-semibold text-xl mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-500 text-sm mb-2">{date}</p>
                <p className="text-gray-700">{excerpt}</p>
            </div>
        </div>
    );
}
