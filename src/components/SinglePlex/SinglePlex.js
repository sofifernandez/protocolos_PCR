
import { MixReagent } from "../MixReagent/MixReagent";
import { CicleStep } from "../CicleStep/CicleStep";
import './SinglePlex.scss'


export const SinglePlex = ({details}) => {


    if (!details) return null;
    return (
        <div className="row container-fluid mx-0 justify-content-center">
            {/* GENERAL DATA CARD ----------------------------------------------------------------------------------------------------------*/}
            <div className="row col-12 col-md-9 col-xl-8 fs-1 pb-3 mb-5 detailCard">
                <p className='text-center'>{details.target_microorganism}</p>
                <div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-sm-6 ms-sm-auto text-center propertyType'>Tipo:</div>
                        <div className='col-12 col-sm-6 ms-sm-auto fs-3 text-center text-sm-start propertyValue'>{details.type_1}</div>
                    </div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-sm-6 ms-sm-auto text-center propertyTarget'>Target:</div>
                        <div className='col-12 col-sm-6 ms-sm-auto fs-3 text-center text-sm-start propertyValue '>{details.target_gene}</div>
                    </div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-sm-6 ms-sm-auto text-center propertySize'>Tamaño:</div>
                        <div className='col-12 col-sm-6 ms-sm-auto fs-3 text-center text-sm-start propertyValue'>{details.target_size}</div>
                    </div>
                    <div className='row mb-5 justify-content-center'>
                        <div className='col-12 col-sm-6 ms-sm-auto text-center propertyRef'>Ref:</div>
                        <div className='col-12 col-sm-6 ms-sm-auto fs-3 text-center text-sm-start propertyValue'>
                            <a href={details.reference_http}>{details.reference.substring(0, 8 + details.reference.indexOf('al. '))}</a>
                        </div>
                    </div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-lg-6 ms-lg-auto my-auto text-center primerProps'style={{backgroundColor:"#ff5959"}}>{details.forward.name}:</div>
                        <div className='col-12 col-lg-6 ms-lg-auto my-auto fs-5 text-center text-lg-start propertyValue'>{details.forward.seq}</div>
                    </div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-lg-6 ms-lg-auto my-auto text-center primerProps' style={{backgroundColor:"#ffdb59"}}>{details.reverse.name}:</div>
                        <div className='col-12 col-lg-6 ms-lg-auto my-auto fs-5 text-center text-lg-start propertyValue'>{details.reverse.seq}</div>
                    </div>
                    {details.probe ? <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-lg-6 my-auto  my-auto text-center primerProps' style={{backgroundColor:"#a962e1"}}>{details.probe.name}:</div>
                        <div className='col-12 col-lg-6 my-auto  my-auto fs-5 text-center propertyValue'>{details.probe.seq}</div>
                    </div> : null}
                </div>
            </div>

            <div className='row justify-content-center'>
                {/* MASTER MIX--------------------------------------------------------------------------------------------------------------- */}
                <div className="row col-12 col-md-10 col-lg-6 container-fluid mx-0 justify-content-center">
                    <div className='row  justify-content-center mb-5 masterMixCard'>
                        <div className='text-center cardTitle fs-1 col-12 mt-3'>
                            MASTER MIX
                        </div>
                        <div className='mb-3 text-center'>Primer y sondas a 10uM</div>
                        {/* BUFFER */}
                        <MixReagent name={details.rxn.buffer.name} volume={details.rxn.buffer.volume} />
                        {/* FORWARD*/}
                        <MixReagent name={details.forward.name} volume={details.rxn.forward} />
                        {/* RERVERSE */}
                        <MixReagent name={details.reverse.name} volume={details.rxn.reverse} />
                        {/* PROBE */}
                        {details.probe ? <MixReagent name={details.probe.name} volume={details.rxn.probe} /> : null}
                        {/* DNA */}
                        <MixReagent name='DNA' volume={details.rxn.DNA} />
                        {/* BSA */}
                        {details.BSA ? <MixReagent name={`BSA ${details.rxn.BSA.conc}`} volume={details.rxn.BSA.volumen} /> : null}
                        {/* H20 */}
                        <MixReagent name='H20' volume={details.rxn.H2O} />
                        <hr />
                        {/* Total */}
                        <MixReagent name='Total' volume={details.rxn.total} />
                        <div>[{details.forward.name}]-final= {details.forward.primer_conc}</div>
                        <div>[{details.reverse.name}]-final= {details.reverse.primer_conc}</div>
                        {details.probe ? <div>[{details.probe.name}]-final= {details.probe.probe_conc}</div> : null}
                    </div>
                </div>


                {/* CICLADO-------------------------------------------------------------------------------------------------------------- */}
                <div className="row col-12 col-sm-9 col-md-8 col-lg-5 container-fluid mx-0 justify-content-center ">
                    <div className="row fs-1 pb-3 mb-5 cicleCard">
                        <div className='text-center cardTitle fs-1 col-12 mt-3'>
                            Ciclado
                        </div>
                        {/* STEP 1 */}
                        <div className='justify-sef-start stepTitles fs-2 ms-5 mb-3 my-auto'>
                            STEP 1
                        </div>
                        <CicleStep temperature={details.cicling.step_one.temperature} time={details.cicling.step_one.time} />
                        {/* STEP 2 */}
                        <div className='row'>
                            <div className='justify-sef-start stepTitles fs-2 ms-5 mb-3 my-auto'>
                                STEP 2
                            </div>
                            <div className='justify-sef-start ciclesTitle fs-2 ms-5 mb-3 my-auto'>
                                x {details.cicling.step_two.cicles}
                            </div>
                        </div>
                        <CicleStep temperature={details.cicling.step_two.step_a.temperature} time={details.cicling.step_two.step_a.time} />
                        <CicleStep temperature={details.cicling.step_two.step_b.temperature} time={details.cicling.step_two.step_c.time} />
                        <CicleStep temperature={details.cicling.step_two.step_c.temperature} time={details.cicling.step_two.step_c.time} />
                        {details.cicling.step_three ?
                            <>
                                <div className='justify-sef-start stepTitles fs-2 ms-5 mb-3 my-auto'>
                                    STEP 3
                                </div>
                                <CicleStep temperature={details.cicling.step_three.temperature} time={details.cicling.step_three.time }/>
                            </> : null}

                        {details.cicling.melting ? <><div className='justify-sef-start stepTitles fs-2 ms-5 mb-3'>
                            STEP 4
                        </div><div className=' col-12 row justify-content-center mb-3'>
                                <div className='col-3 circleCicle my-auto'>
                                </div>
                                <div className='col-9 fs-3 text-center my-auto'>
                                    Melting curve
                                </div>
                            </div></> : null}
                        <div className='fs-5 text-center'>Nombre: {details.cicling.name}</div>
                    </div>
                </div>
            </div>
            {details.notes}
        </div>
    )
}