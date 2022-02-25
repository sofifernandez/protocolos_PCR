
import './CardPCR.scss'

export const CardPCR = ({card}) => {
   
    if (!card) return null;
    return (
        <div className='row col-10 mx-auto col-md-6 col-lg-5 justify-content-center'>
            {/* -------------------------------------------------------------------------- */
            /*                                    CARD                                    */
            /* -------------------------------------------------------------------------- */}
            <div className='mainCard  justify-content-center row mb-5'>
                <div className='text-center cardName fs-3 col-12 my-3'>
                    {card.target_microorganism}
                </div>
                {/* CARD GENE */}
                <div className='species col-12 row justify-content-evenly mb-3'>
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
                <div className='status col-12 row justify-content-evenly mb-3'>
                    <div className='col-7 propertyTitle row'>
                        <div className='col-6 typeTitleCircle my-auto'>
                        </div>
                        <div className='col-6 fs-4 my-auto'>
                            Tipo
                        </div>
                    </div>
                    <div className='col-4 fs-4'>
                        {card.type_1}
                    </div>
                </div>
                {/* CARD REF */}
                <div className='species col-12 row justify-content-evenly mb-3'>
                    <div className='col-7 propertyTitle row'>
                        <div className='col-6 refTitleCircle my-auto'>
                        </div>
                        <div className='col-6 fs-4 my-auto'>
                            Referencia
                        </div>
                    </div>
                    <div className='col-4 fs-6' >
                        <a href={card.reference_http}>{card.reference.substring(0, 8+ card.reference.indexOf('al. '))}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}