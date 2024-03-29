import './MixReagent.scss'

export const MixReagent = ({name, volume}) => {
    return (

        <div className=' col-12 row justify-content-evenly mb-3 px-0'>
            <div className='col-10 col-sm-7 col-lg-7  propertyTitleMix row'>
                <div className='col-3 titleCircle my-auto'>
                </div>
                <div className='col-9 fw-bold fs-3 my-auto text-break'>
                    {name}
                </div>
            </div>
            <div className='col-6 col-sm-5 col-lg-5  fs-3 text-center my-auto'>
                {volume} uL
            </div>
        </div>
    )
}