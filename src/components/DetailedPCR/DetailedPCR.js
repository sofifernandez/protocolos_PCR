import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SinglePlex } from "../SinglePlex/SinglePlex"
import { Nested } from "../Nested/Nested"
import { MultiPlex } from "../MultiPlex/MultiPlex";



export const DetailedPCR = () => {
    const { protocoloID } = useParams();
    const [details, setDetails] = useState();

    useEffect(() => {
        const fetchJSON = async () => {
            const singleplex = await fetch("/protocolos.json").then(data => data.json());
            const multiplex = await fetch("/multiplex.json").then(data => data.json());
            const nested = await fetch("/nested.json").then(data => data.json());
            const array = [].concat(singleplex, multiplex, nested);
            const objIndex = array.findIndex((obj => obj.id === protocoloID))
            setDetails(array[objIndex]);
        };
        fetchJSON();
    }, [protocoloID])


    if (!details) return null;
    return (
        <div>
            {details.type_2 === "singleplex" ? <SinglePlex details={details} /> : null}
            {details.type_2 === "nested" ? <Nested details={details} /> : null}
            {details.type_2 === "multiplex" ? <MultiPlex details={details} /> : null}
        </div>)
}