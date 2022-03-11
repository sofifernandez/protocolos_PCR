import { MixReagent } from "../MixReagent/MixReagent";
import { CicleStep } from "../CicleStep/CicleStep";
import './Nested.scss'


export const Nested = ({ details }) => {


    if (!details) return null;
    return (
        <div className="row container-fluid mx-0 justify-content-center">
            {/* GENERAL DATA CARD ----------------------------------------------------------------------------------------------------------*/}
            <div className="row col-12 col-md-9 col-lg-6 fs-1 pb-3 mb-5 detailCard">
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
                    <div className="heroline"></div>
                    <div className="text-center font-weight-bold ronda">RONDA 1:</div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-lg-6 ms-lg-auto my-auto text-center primerProps' style={{ backgroundColor: "#FFDB59" }}>{details.forward_1.name}:</div>
                        <div className='col-12 col-lg-6 ms-lg-auto my-auto fs-5 text-center text-lg-start propertyValue'>{details.forward_1.seq}</div>
                    </div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-lg-6 ms-lg-auto my-auto text-center primerProps' style={{ backgroundColor: "#FFDB59" }}>{details.reverse_1.name}:</div>
                        <div className='col-12 col-lg-6 ms-lg-auto my-auto fs-5 text-center text-lg-start propertyValue'>{details.reverse_1.seq}</div>
                    </div>
                    <div className="heroline"></div>
                    <div className="text-center ronda">RONDA 2:</div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-lg-6 ms-lg-auto my-auto text-center primerProps' style={{ backgroundColor: "#A962E1" }}>{details.forward_2.name}:</div>
                        <div className='col-12 col-lg-6 ms-lg-auto my-auto fs-5 text-center text-lg-start propertyValue'>{details.forward_2.seq}</div>
                    </div>
                    <div className='row mb-2 justify-content-center'>
                        <div className='col-12 col-lg-6 ms-lg-auto my-auto text-center primerProps' style={{ backgroundColor: "#A962E1" }}>{details.reverse_2.name}:</div>
                        <div className='col-12 col-lg-6 ms-lg-auto my-auto fs-5 text-center text-lg-start propertyValue'>{details.reverse_2.seq}</div>
                    </div>

                </div>
            </div>

            {/* ----RONDA 1---------------------------------------------------------------------------------------------------------- */}
            <div className='row justify-content-center mb-5 ronda1'>
                <div className="text-center justify-self-center fs-1">RONDA 1</div>
                {/* MASTER MIX ------------------------------------------------*/}
                <div className="row col-12 col-md-10 col-lg-6 container-fluid mx-0 justify-content-center">
                    <div className='row  justify-content-center mb-5 masterMixCard'>
                        <div className='text-center cardTitle fs-1 col-12 mt-3'>
                            MASTER MIX
                        </div>
                        <div className='mb-3 text-center'>Primer y sondas a 10uM</div>
                        {/* BUFFER */}
                        <MixReagent name={details.rxn_1.buffer.name} volume={details.rxn_1.buffer.volume} />
                        {/* FORWARD*/}
                        <MixReagent name={details.forward_1.name} volume={details.rxn_1.forward_1} />
                        {/* RERVERSE */}
                        <MixReagent name={details.reverse_1.name} volume={details.rxn_1.reverse_1} />
                        {/* PROBE */}
                        {details.probe ? <MixReagent name={details.probe.name} volume={details.rxn_1.probe} /> : null}
                        {/* DNA */}
                        <MixReagent name='DNA' volume={details.rxn_1.DNA} />
                        {/* BSA */}
                        {details.BSA ? <MixReagent name={`BSA ${details.rxn_1.BSA.conc}`} volume={details.rxn_1.BSA.volumen} /> : null}
                        {/* H20 */}
                        <MixReagent name='H20' volume={details.rxn_1.H2O} />
                        <hr />
                        {/* Total */}
                        <MixReagent name='Total' volume={details.rxn_1.total} />
                        <div>[primers]-final= {details.forward_1.primer_conc}</div>
                        {details.probe ? <div>[probe]-final= {details.probe.probe_conc}</div> : null}
                    </div>
                </div>


                {/* CICLADO-------------------------------------------------------------------------------------------------------------- */}
                <div className="row col-8 col-lg-5 container-fluid mx-0 justify-content-center ">
                    <div className="row fs-1 pb-3 mb-5 cicleCard">
                        <div className='text-center cardTitle fs-1 col-12 mt-3'>
                            Ciclado
                        </div>
                        {/* STEP 1 */}
                        <div className='justify-sef-start stepTitles fs-2 ms-5 mb-3 my-auto'>
                            STEP 1
                        </div>
                        <CicleStep temperature={details.cicling_1.step_one.temperature} time={details.cicling_1.step_one.time} />
                        {/* STEP 2 */}
                        <div className='row'>
                            <div className='justify-sef-start stepTitles fs-2 ms-5 mb-3 my-auto'>
                                STEP 2
                            </div>
                            <div className='justify-sef-start ciclesTitle fs-2 ms-5 mb-3 my-auto'>
                                x {details.cicling_1.step_two.cicles}
                            </div>
                        </div>
                        <CicleStep temperature={details.cicling_1.step_two.step_a.temperature} time={details.cicling_1.step_two.step_a.time} />
                        <CicleStep temperature={details.cicling_1.step_two.step_b.temperature} time={details.cicling_1.step_two.step_c.time} />
                        <CicleStep temperature={details.cicling_1.step_two.step_c.temperature} time={details.cicling_1.step_two.step_c.time} />
                        {details.cicling_1.step_three ?
                            <>
                                <div className='justify-sef-start stepTitles fs-2 ms-5 mb-3 my-auto'>
                                    STEP 3
                                </div>
                                <CicleStep temperature={details.cicling_1.step_three.temperature} time={details.cicling_1.step_three.time} />
                            </> : null}

                        {details.cicling_1.melting ? <><div className='justify-sef-start stepTitles fs-2 ms-5 mb-3'>
                            STEP 4
                        </div><div className=' col-12 row justify-content-center mb-3'>
                                <div className='col-3 circleCicle my-auto'>
                                </div>
                                <div className='col-9 fs-3 text-center my-auto'>
                                    Melting curve
                                </div>
                            </div></> : null}
                        <div className='fs-5 text-center'>Nombre: {details.cicling_1.name}</div>
                    </div>
                </div>
            </div>

            {/* ----RONDA 2---------------------------------------------------------------------------------------------------------- */}
            <div className='row justify-content-center mb-5 ronda2'>
                <div className="text-center justify-self-center fs-1">RONDA 2</div>
                {/* MASTER MIX 2 ------------------------------------------------*/}
                <div className="row col-12 col-md-10 col-lg-6 container-fluid mx-0 justify-content-center">
                    <div className='row  justify-content-center mb-5 masterMixCard'>
                        <div className='text-center cardTitle fs-1 col-12 mt-3'>
                            MASTER MIX
                        </div>
                        <div className='mb-3 text-center'>Primer y sondas a 10uM</div>
                        {/* BUFFER */}
                        <MixReagent name={details.rxn_2.buffer.name} volume={details.rxn_2.buffer.volume} />
                        {/* forward_2*/}
                        <MixReagent name={details.forward_2.name} volume={details.rxn_2.forward_2} />
                        {/* RERVERSE */}
                        <MixReagent name={details.reverse_2.name} volume={details.rxn_2.reverse_2} />
                        {/* PROBE */}
                        {details.probe ? <MixReagent name={details.probe.name} volume={details.rxn_2.probe} /> : null}
                        {/* DNA */}
                        <MixReagent name='DNA' volume={details.rxn_2.DNA} />
                        {/* BSA */}
                        {details.BSA ? <MixReagent name={`BSA ${details.rxn_2.BSA.conc}`} volume={details.rxn_2.BSA.volumen} /> : null}
                        {/* H20 */}
                        <MixReagent name='H20' volume={details.rxn_2.H2O} />
                        <hr />
                        {/* Total */}
                        <MixReagent name='Total' volume={details.rxn_2.total} />
                        <div>[{details.forward_1.name}]-final= {details.forward_1.primer_conc}</div>
                        <div>[{details.reverse_1.name}]-final= {details.reverse_1.primer_conc}</div>
                        <div>[{details.forward_2.name}]-final= {details.forward_2.primer_conc}</div>
                        <div>[{details.reverse_2.name}]-final= {details.reverse_2.primer_conc}</div>
                        {details.probe ? <div>[probe]-final= {details.probe.probe_conc}</div> : null}
                    </div>
                </div>


                {/* CICLADO- 2------------------------------------------------------------------------------------------------------------- */}
                <div className="row col-8 col-lg-5 container-fluid mx-0 justify-content-center ">
                    <div className="row fs-1 pb-3 mb-5 cicleCard">
                        <div className='text-center cardTitle fs-1 col-12 mt-3'>
                            Ciclado
                        </div>
                        {/* STEP 1 */}
                        <div className='justify-sef-start stepTitles fs-2 ms-5 mb-3 my-auto'>
                            STEP 1
                        </div>
                        <CicleStep temperature={details.cicling_2.step_one.temperature} time={details.cicling_2.step_one.time} />
                        {/* STEP 2 */}
                        <div className='row'>
                            <div className='justify-sef-start stepTitles fs-2 ms-5 mb-3 my-auto'>
                                STEP 2
                            </div>
                            <div className='justify-sef-start ciclesTitle fs-2 ms-5 mb-3 my-auto'>
                                x {details.cicling_2.step_two.cicles}
                            </div>
                        </div>
                        <CicleStep temperature={details.cicling_2.step_two.step_a.temperature} time={details.cicling_2.step_two.step_a.time} />
                        <CicleStep temperature={details.cicling_2.step_two.step_b.temperature} time={details.cicling_2.step_two.step_c.time} />
                        <CicleStep temperature={details.cicling_2.step_two.step_c.temperature} time={details.cicling_2.step_two.step_c.time} />
                        {details.cicling_2.step_three ?
                            <>
                                <div className='justify-sef-start stepTitles fs-2 ms-5 mb-3 my-auto'>
                                    STEP 3
                                </div>
                                <CicleStep temperature={details.cicling_2.step_three.temperature} time={details.cicling_2.step_three.time} />
                            </> : null}

                        {details.cicling_2.melting ? <><div className='justify-sef-start stepTitles fs-2 ms-5 mb-3'>
                            STEP 4
                        </div><div className=' col-12 row justify-content-center mb-3'>
                                <div className='col-3 circleCicle my-auto'>
                                </div>
                                <div className='col-9 fs-3 text-center my-auto'>
                                    Melting curve
                                </div>
                            </div></> : null}
                        <div className='fs-5 text-center'>Nombre: {details.cicling_2.name}</div>
                    </div>
                </div>
            </div>
            {details.notes}
        </div>
    )
}