import { useState, useEffect } from "react";
import { CardPCR } from '../CardPCR/CardPCR'
import './Home.scss'


export const Home = () => {
    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState()


    useEffect(() => {
        async function fetchMyAPI() {
            const simplePCR = await fetch('protocolos.json').then(res => res.json())
            const multiplexPCR = await fetch('multiplex.json').then(res => res.json())
            const nestedPCR= await fetch('nested.json').then(res => res.json())
            setCards(simplePCR.concat(multiplexPCR, nestedPCR))
        }
        fetchMyAPI()
    }, [])

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    console.log(cards)
    if (!cards) return null;
    return (
        <div className="row justify-content-center container-fluid mx-auto px-auto">

            {/* SEARCHBOX----------------------------------------------------------- */}
            <div className="row mb-5 justify-content-center">
                <div className=" col-10 col-sm-8 col-md-5 searchBox">
                    <input className="col-10" type="text" name="busqueda" id="" placeholder="Buscar" onChange={handleChange} />
                    <div className="header-tag-circle pinkCircle">
                    </div>
                </div>
            </div>

            {/* CARDS------------------------------------------------------------- */}
            {!search ?
                <>
                    <div className='characterTittle col-8 col-sm-6 fs-1 text-center'>
                        ~BACTERIAS~
                    </div>
                    <div className="mt-4 mb-5 container-fluid row justify-content-center">
                        {cards.length ? cards.filter(pcr => pcr.target_group === "Bacteria").map((card) => (<CardPCR card={card} key={card.id} />))
                            : "Loading..."}
                    </div>
                    <div className='characterTittle col-8 col-sm-6 fs-1 text-center'>
                        ~EUCARIOTAS~
                    </div>
                    <div className="mt-4 mb-5 container-fluid row justify-content-center">
                        {cards.length ? cards.filter(pcr => pcr.target_group === "Eucariota").map((card) => (<CardPCR card={card} key={card.id} />))
                            : "Loading..."}
                    </div>
                    <div className='characterTittle col-8 col-sm-6 fs-1 text-center'>
                        ~VIRUS~
                    </div>
                    <div className="mt-4 mb-5 container-fluid row justify-content-center">
                        {cards.length ? cards.filter(pcr => pcr.target_group === "Virus").map((card) => (<CardPCR card={card} key={card.id} />))
                            : "Loading..."}
                    </div>
                    <div className='characterTittle col-8 col-sm-6 fs-1 text-center'>
                        ~Múltiples~
                    </div>
                    <div className="mt-4 mb-5 container-fluid row justify-content-center">
                        {cards.length ? cards.filter(pcr => pcr.type_2 === "multiplex").map((card) => (<CardPCR card={card} key={card.id} />))
                            : "Loading..."}
                    </div>
                    <div className='characterTittle col-8 col-sm-6 fs-1 text-center'>
                        ~Hospederos~
                    </div>
                    <div className="mt-4 mb-5 container-fluid row justify-content-center">
                        {cards.length ? cards.filter(pcr => pcr.target_group === "Host").map((card) => (<CardPCR card={card} key={card.id} />))
                            : "Loading..."}
                    </div>
                </>

                :

                <div className="mt-4 mb-5 container-fluid row justify-content-center">
                    {cards.filter(pcr => pcr.target_microorganism.toLowerCase().includes(search.toLowerCase()) || pcr.target_gene.toLowerCase().includes(search.toLowerCase())).map((card) => (<CardPCR card={card} key={card.id} />))}
                </div>}
        </div>

    )
}