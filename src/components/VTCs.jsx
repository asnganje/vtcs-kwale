import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import { getAllVTCs } from "../redux/thunks/centresThunk";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const tableData = [
    {id: nanoid(), text:"No."},
    {id: nanoid(), text:"VTC Name"},
    {id: nanoid(), text:"Ward"},
    {id: nanoid(), text:"Email"},
    {id: nanoid(), text:"Phone"}
]

const VTCs = () => {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getAllVTCs())
    }, [])

    const navigate = useNavigate()
    const redirectHandler = ()=> {
        navigate('/createvtc')
    }
    
    const [loading, setLoading] = useState(true)


    const {data} = useSelector((store)=> store.vtc)

    useEffect(()=> {
        if(data && data.length > 0)
        setLoading(false)
    }, [data])

    if (loading) {
        return <p>Loading...</p>
    }

    const renderedVTCRows = data.map((el, i)=> {
        return(
            <tr key={el._id}>
                <td>{i+1}</td>
                <td>{el.name}</td>
                <td>{el.ward}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
            </tr>
        )
    })

    const tableHeaders = tableData.map((head)=> {
        return(
            <td key={head.id}>{head.text}</td>
        )
    })

    return(
        <section className="relative h-screen">
            <Header />
            <h1 className="text-center mt-[2%]">LIST OF VOCATIONAL TRAINING CENTRES IN THE COUNTY</h1>
            <table className="mx-[25%] w-[50%] mt-[5%] bg-white border border-gray-300 shadow-md">
                <thead>
                    <tr className="font-bold font-mono text-2xl">
                        {tableHeaders}
                    </tr>
                </thead>
                <tbody>
                    {renderedVTCRows}
                </tbody>
            </table>
            <button onClick={redirectHandler} className="absolute bottom-[20%] right-[20%] p-2 bg-blue-500 font-mono text-xl text-white m-5 rounded-md">Add a VTC</button>

            <Footer />
        </section>
    )
}

export default VTCs;