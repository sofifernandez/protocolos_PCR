import { useState, useEffect } from "react";
import { CardPCR } from '../CardPCR/CardPCR'
import './Home.scss'


export const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('protocolos.json')
            .then(res => res.json()
                .then(data => setCards(data)))
    }, [])

    if (!cards) return null;
    return (
        <div className="row justify-content-center">
            <div className='characterTittle col-6 fs-1 text-center'>
                ~BACTERIAS~
            </div>
            <div className="mt-4 mb-5 container-fluid row justify-content-center">
                {cards.length ? cards.filter(pcr => pcr.target_group === "Bacteria").map((card) => (<CardPCR card={card} key={card.id} />))
                    : "Loading..."}
            </div>

             <div className='characterTittle col-6 fs-1 text-center'>
                ~EUCARIOTAS~
            </div>
            <div className="mt-4 mb-5 container-fluid row justify-content-center">
                {cards.length ? cards.filter(pcr => pcr.target_group === "Eucariota").map((card) => (<CardPCR card={card} key={card.id} />))
                    : "Loading..."}
            </div>
        </div>
            
    )
}