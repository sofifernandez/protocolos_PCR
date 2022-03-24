import {  NavLink } from "react-router-dom";
import './CardPCR.scss'

export const CardPCR = ({card}) => {
   
    if (!card) return null;
    return (
        <div className='row col-12 col-sm-10 col-md-6 col-lg-5 justify-content-center mx-auto px-0'>
            {/* -------------------------------------------------------------------------- */
            /*                                    CARD                                    */
            /* -------------------------------------------------------------------------- */}
            <div className='mainCard justify-content-center row mb-5'>
                <NavLink to={`/protocolo/${card.id}`}><div className='text-center cardName fs-3 col-12 my-3'>
                    {card.target_microorganism}
                </div></NavLink>
                {/* CARD GENE */}
                <div className='col-12 row justify-content-evenly mb-3 px-0'>
                    <div className='col-7 propertyTitle row'>
                        <div className='col-6 targetTitleCircle my-auto'>
                        </div>
                        <div className='col-6 fs-4 my-auto'>
                            Target
                        </div>
                    </div>
                    <div className='col-4 fs-4'>
                        {card.target_gene}
                    </div>
                </div>
                {/* CARD TYPE */}
                <div className='col-12 row justify-content-evenly mb-3 px-0'>
                    <div className='col-7 propertyTitle row'>
                        <div className='col-6 typeTitleCircle my-auto'>
                        </div>
                        <div className='col-6 fs-4 my-auto'>
                            Tipo
                        </div>
                    </div>
                    <div className='col-4 fs-4'>
                        {card.type_1}-{card.type_2}
                    </div>
                </div>
                {/* CARD REF */}
                <div className='col-12 row justify-content-evenly mb-3 px-0'>
                    <div className='col-7 propertyTitle row'>
                        <div className='col-6 refTitleCircle my-auto'>
                        </div>
                        <div className='col-6 fs-4 my-auto'>
                            Referencia
                        </div>
                    </div>
                    <div className='col-4 fs-6 my-auto' >
                        <a href={card.reference_http}>{card.reference.substring(0, 8+ card.reference.indexOf('al. '))}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}