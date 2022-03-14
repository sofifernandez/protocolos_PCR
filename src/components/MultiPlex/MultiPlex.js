import React from 'react';
import { MixReagent } from "../MixReagent/MixReagent";
import { CicleStep } from "../CicleStep/CicleStep";
import './MultiPlex.scss'


export const MultiPlex = ({ details }) => {


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
                    <div className='row mb-3 justify-content-center'>
                        <div className='col-12 col-sm-6 ms-sm-auto text-center propertyRef'>Ref:</div>
                        <div className='col-12 col-sm-6 ms-sm-auto fs-3 text-center text-sm-start propertyValue'>
                            <a href={details.reference_http}>{details.reference.substring(0, 8 + details.reference.indexOf('al. '))}</a>
                        </div>
                    </div>
                    {details.groups.map(grupo =>
                        <div key={grupo.target}>
                            <div className="heroline"></div>
                            <div className="text-center fs-3 targetMiltiplex">{grupo.target}: { grupo.size}</div>
                            <div className='row mb-2 justify-content-center'>
                                <div className='col-12 col-lg-6 my-auto text-center primerProps' style={{ backgroundColor: "#E964BB" }}>{grupo.forward.name}:</div>
                                <div className='col-12 col-lg-6 my-auto fs-5 text-center text-lg-start propertyValue'>{grupo.forward.seq}</div>
                            </div>
                            <div className='row mb-2 justify-content-center'>
                                <div className='col-12 col-lg-6 my-auto text-center primerProps' style={{ backgroundColor: "#FFDB59" }}>{grupo.reverse.name}:</div>
                                <div className='col-12 col-lg-6 my-auto fs-5 text-center text-lg-start propertyValue'>{grupo.reverse.seq}</div>
                            </div>
                        </div>
                    )}
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
                        {/* FORWARD/RERVERSE*/}
                        {details.groups.map(grupo =>
                            <React.Fragment key={grupo.target}>
                                <MixReagent  name={grupo.forward.name} volume={grupo.forward.volume} />
                                <MixReagent name={grupo.reverse.name} volume={grupo.reverse.volume} />
                                {grupo.probe ? <MixReagent name={grupo.probe.name} volume={grupo.probe.volume} /> : null}
                            </React.Fragment>
                        )}
                        {/* DNA */}
                        <MixReagent name='DNA' volume={details.rxn.DNA} />
                        {/* BSA */}
                        {details.BSA ? <MixReagent name={`BSA ${details.rxn.BSA.conc}`} volume={details.rxn.BSA.volumen} /> : null}
                        {/* H20 */}
                        <MixReagent name='H20' volume={details.rxn.H2O} />
                        <hr />
                        {/* Total */}
                        <MixReagent name='Total' volume={details.rxn.total} />
                        {details.groups.map(grupo =>
                            <React.Fragment key={grupo.target}><div key={grupo.target}>[{grupo.forward.name}]-final= {grupo.forward.primer_conc}</div>
                                <div>[{grupo.reverse.name}]-final= {grupo.reverse.primer_conc}</div>
                                {grupo.probe ? <div>[{grupo.probe.name}]-final= {grupo.probe.probe_conc}</div> : null}
                            </React.Fragment>
                        )}

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
                                <CicleStep temperature={details.cicling.step_three.temperature} time={details.cicling.step_three.time} />
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