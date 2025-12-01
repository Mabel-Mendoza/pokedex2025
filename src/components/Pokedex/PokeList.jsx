import { Card } from "./Card";
import { Button } from "../Button";
import { usePokemonService } from "../../hooks/usePokemonService";
import { useEffect, useState } from "react";

export const PokeList =()=> {
    const {
        getPokemonList,
        getPokemonId,
        getPokemonImgUrl
    } = usePokemonService();

    const [page, setPage] = useState(1);
    const [data, setData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const resData = await getPokemonList(page, 50);
            setData(resData);
        }
        loadData();
    }, [page, setData]);

    if (!data) {
        return <div>No se ha cargado aún</div>
    }

    return (
        <>
            <section className="flex flex-col items-center gap-4 max-w-325 mx-auto bg-blue-100">
                {/* */}
                <div className="bg-yellow-100 text-yellow-900 rounded-md p-3 text-center shadow-md w-full">
                    <h3 className="font-semibold text-lg">¡Bienvenido a la Pokédex!</h3>
                    <p className="text-sm">Aquí encontrarás todo tipo de Pokémon, desde los más comunes hasta los legendarios. ¡Explora y diviértete!</p>
                </div>

                {/* Cartas de Pokémon */}
                <div className="flex flex-wrap gap-4">
                    {
                        data.results.map(pokemon => {
                            const id = getPokemonId(pokemon.url);
                            const imgUrl = getPokemonImgUrl(id);
                            return (
                                <Card
                                    key={id}
                                    id={id}
                                    name={pokemon.name}
                                    defaultImgUri={imgUrl}
                                />
                            )
                        })
                    }
                </div>
            </section>

            {/* Paginación */}
            <div className="flex items-center justify-center gap-8 mt-4">
                {page !== 1 && (
                    <Button 
                        className="bg-yellow-100 text-yellow-900 hover:bg-yellow-200" 
                        onClick={()=>{setPage(page-1)}}
                    >
                        Anterior
                    </Button>
                )}
                <span>Mostrando página {page} de {Math.ceil(data.count / 50)}</span>
                {page !== Math.ceil(data.count / 50) && (
                    <Button 
                        className="bg-yellow-100 text-yellow-900 hover:bg-yellow-200" 
                        onClick={()=>{setPage(page+1)}}
                    >
                        Siguiente
                    </Button>
                )}
            </div>
        </>
    )
}
