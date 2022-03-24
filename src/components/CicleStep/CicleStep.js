import './CicleStep.scss'

export const CicleStep = ({temperature, time}) => {
    return (
        <div className=' col-12 row justify-content-center mb-3'>
            <div className='col-3 circleCicle my-auto'>
            </div>
            <div className='col-9 fs-3 text-center my-auto'>
                {temperature} --{'>'} {time}
            </div>
        </div>
    )
}