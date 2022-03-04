import './DetailedPCR.scss'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailedPCR = () => {
    const { protocoloID } = useParams();
    const [details, setDetails] = useState();


    useEffect(() => {
        const fetchJSON = async () => {
            const response = await fetch("/protocolos.json");
            let jsoni = await response.json();
            const objIndex = jsoni.findIndex((obj => obj.id === protocoloID))
            setDetails(jsoni[objIndex]);
        };
        fetchJSON();

    }, [protocoloID])


    if (!details) return null;
    return (
        <div className="row container-fluid mx-0 justify-content-center">
            {/* GENERAL DATA CARD ----------------------------------------------------------------------------------------------------------*/}
            <div className="row col-12 col-md-9 fs-1 pb-3 mb-5 detailCard">
                <p className='text-center'>{details.target_microorganism}</p>
                <div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-sm-6 ms-sm-auto text-center propertyOne'>Tipo:</div>
                        <div className='col-12 col-sm-6 ms-sm-auto fs-3 text-center text-sm-start propertyValue'>{details.type_1}</div>
                    </div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-sm-6 ms-sm-auto text-center propertyTwo'>Target:</div>
                        <div className='col-12 col-sm-6 ms-sm-auto fs-3 text-center text-sm-start propertyValue '>{details.target_gene}</div>
                    </div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-sm-6 ms-sm-auto text-center propertyThree'>Tamaño:</div>
                        <div className='col-12 col-sm-6 ms-sm-auto fs-3 text-center text-sm-start propertyValue'>{details.target_size}</div>
                    </div>
                    <div className='row mb-5 justify-content-center'>
                        <div className='col-12 col-sm-6 ms-sm-auto text-center propertyFour'>Ref:</div>
                        <div className='col-12 col-sm-6 ms-sm-auto fs-3 text-center text-sm-start propertyValue'>
                            <a href={details.reference_http}>{details.reference.substring(0, 8 + details.reference.indexOf('al. '))}</a> 
                        </div>
                    </div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-lg-6 my-auto text-center propertyFive'>{details.forward.name}:</div> 
                       <div className='col-12 col-lg-6 my-auto fs-5 text-center text-lg-start propertyValue'>{details.forward.seq}</div>
                    </div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-lg-6 my-auto text-center propertySix'>{details.reverse.name}:</div> 
                         <div className='col-12 col-lg-6 my-auto fs-5 text-center text-lg-start propertyValue'>{details.reverse.seq}</div> 
                    </div>
                    {details.probe ? <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-lg-6 my-auto  my-auto text-center propertySeven'>{details.probe.name}:</div>
                        <div className='col-12 col-lg-6 my-auto  my-auto fs-5 text-center propertyValue'>{details.probe.seq}</div>
                    </div> : null}
                </div>
            </div>
            {/* MASTER MIX--------------------------------------------------------------------------------------------------------------- */}
            <div className="row container-fluid mx-0 justify-content-center">
                <div className='row col-12 col-md-10 col-lg-8 justify-content-center mb-5 masterMixCard'>
                    <div className='text-center cardTitle fs-1 col-12 mt-3'>
                        MASTER MIX
                    </div>
                    <div className='mb-3 text-center'>Primer y sondas a 10uM</div>
                    {/* BUFFER */}
                    <div className=' col-12 row justify-content-evenly mb-3'>
                        <div className='col-5 propertyTitleMix row'>
                            <div className='col-3 titleCircle my-auto'>
                            </div>
                            <div className='col-9 fw-bold fs-2 my-auto'>
                                {details.rxn.buffer.name}
                            </div>
                        </div>
                        <div className='col-7 fs-3 text-center'>
                            {details.rxn.buffer.volume} uL
                        </div>
                    </div>
                    {/* FORWARD*/}
                    <div className='status col-12 row justify-content-evenly mb-3'>
                        <div className='col-5 propertyTitleMix row'>
                            <div className='col-3 titleCircle my-auto'>
                            </div>
                            <div className='col-9 fw-bold fs-2 my-auto'>
                                Forward
                            </div>
                        </div>
                        <div className='col-7 fs-3 text-center'>
                            {details.rxn.forward} uL
                        </div>
                    </div>
                    {/* RERVERSE */}
                    <div className=' col-12 row justify-content-evenly mb-3'>
                        <div className='col-5 propertyTitleMix row'>
                            <div className='col-3 titleCircle my-auto'>
                            </div>
                            <div className='col-9 fw-bold fs-2 my-auto'>
                                Reverse
                            </div>
                        </div>
                        <div className='col-7 fs-3 text-center'>
                            {details.rxn.reverse} uL
                        </div>
                    </div>
                    {/* PROBE */}
                    {details.probe ? <div className=' col-12 row justify-content-evenly mb-3'>
                        <div className='col-5 propertyTitleMix row'>
                            <div className='col-3 titleCircle my-auto'>
                            </div>
                            <div className='col-9 fw-bold fs-2 my-auto'>
                                Probe
                            </div>
                        </div>
                        <div className='col-7 fs-3 text-center'>
                            {details.rxn.probe} uL
                        </div>
                    </div> : null}
                    {/* DNA */}
                    <div className=' col-12 row justify-content-evenly mb-3'>
                        <div className='col-5 propertyTitleMix row'>
                            <div className='col-3 titleCircle my-auto'>
                            </div>
                            <div className='col-9 fw-bold fs-2 my-auto'>
                                DNA
                            </div>
                        </div>
                        <div className='col-7 fs-3 text-center'>
                            {details.rxn.DNA} uL
                        </div>
                    </div>
                    {/* BSA */}
                    {details.BSA ? <div className=' col-12 row justify-content-evenly mb-3'>
                        <div className='col-5 propertyTitleMix row'>
                            <div className='col-3 titleCircle my-auto'>
                            </div>
                            <div className='col-9 fw-bold fs-2 my-auto'>
                                BSA {details.rxn.BSA.conc}
                            </div>
                        </div>
                        <div className='col-7 fs-3 text-center'>
                            {details.rxn.BSA.volumen} uL
                        </div>
                    </div> : null} 
                    {/* H20 */}
                    <div className=' col-12 row justify-content-evenly mb-3'>
                        <div className='col-5 propertyTitleMix row'>
                            <div className='col-3 titleCircle my-auto'>
                            </div>
                            <div className='col-9 fw-bold fs-2 my-auto'>
                                H20
                            </div>
                        </div>
                        <div className='col-7 fs-3 text-center'>
                            {details.rxn.H2O} uL
                        </div>
                    </div>
                    <hr />
                    {/* Total */}
                    <div className=' col-12 row justify-content-evenly mt-3 mb-3'>
                        <div className='col-5 propertyTitleMix row'>
                            <div className='col-3 titleCircle my-auto'>
                            </div>
                            <div className='col-9 fw-bold fs-2 my-auto'>
                                TOTAL
                            </div>
                        </div>
                        <div className='col-7 fs-3 text-center'>
                            {details.rxn.total} uL
                        </div>
                    </div>
                    <div>[primers]-final= {details.forward.primer_conc}</div>
                    {details.probe ? <div>[probe]-final= {details.probe.probe_conc}</div> : null}
                </div>
            </div>


            {/* CICLADO-------------------------------------------------------------------------------------------------------------- */}
            <div className="row container-fluid mx-0 justify-content-center">
                <div className="row col-8 fs-1 pb-3 mb-5 cicleCard">
                    <div className='text-center cardTitle fs-1 col-12 mt-3'>
                        Ciclado
                    </div>
                    <div className='justify-sef-start stepTitles fs-2 ms-5 mb-3'>
                        STEP 1
                    </div>
                    <div className=' col-12 row justify-content-center mb-3'>
                        <div className='col-3 titleCircle my-auto'>
                        </div>
                        <div className='col-9 fs-3 text-center'>
                            {details.cicling.step_one.temperature} | {details.cicling.step_one.time}
                        </div>
                    </div>
                    {/* STEP 2 */}
                    <div className='row'>
                        <div className='justify-sef-start stepTitles fs-2 ms-5 mb-3'>
                            STEP 2
                        </div>
                        <div className='justify-sef-start ciclesTitle fs-2 ms-5 mb-3'>
                            x {details.cicling.step_two.cicles}
                        </div>
                    </div>
                    <div className=' col-12 row justify-content-center mb-3'>
                        <div className='col-3 titleCircle my-auto'>
                        </div>
                        <div className='col-9 fs-3 text-center'>
                            {details.cicling.step_two.step_a.temperature} | {details.cicling.step_two.step_a.time}
                        </div>
                    </div>
                    <div className=' col-12 row justify-content-center mb-3'>
                        <div className='col-3 titleCircle my-auto'>
                        </div>
                        <div className='col-9 fs-3 text-center'>
                            {details.cicling.step_two.step_b.temperature} | {details.cicling.step_two.step_b.time}
                        </div>
                    </div>
                    <div className=' col-12 row justify-content-center mb-3'>
                        <div className='col-3 titleCircle my-auto'>
                        </div>
                        <div className='col-9 fs-3 text-center'>
                            {details.cicling.step_two.step_c.temperature} | {details.cicling.step_two.step_c.time} <i className="fa-solid fa-camera"></i>
                        </div>
                    </div>

                    {details.cicling.step_three ? <><div className='justify-sef-start stepTitles fs-2 ms-5 mb-3'>
                        STEP 3
                    </div><div className=' col-12 row justify-content-center mb-3'>
                            <div className='col-3 titleCircle my-auto'>
                            </div>
                            <div className='col-9 fs-3 text-center'>
                                {details.cicling.step_three.temperature} | {details.cicling.step_three.time}
                            </div>
                        </div></> : null}

                    {details.cicling.melting ? <><div className='justify-sef-start stepTitles fs-2 ms-5 mb-3'>
                        STEP 4
                    </div><div className=' col-12 row justify-content-center mb-3'>
                            <div className='col-3 titleCircle my-auto'>
                            </div>
                            <div className='col-9 fs-3 text-center'>
                                Melting curve
                            </div>
                        </div></> : null}
                    <div className='fs-5 text-center'>Nombre: {details.cicling.name}</div>
                </div>
            </div>
            {details.notes}
        </div>
    )
}