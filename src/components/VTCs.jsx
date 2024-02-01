import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import { getAllVTCs, removeVTC } from "../redux/thunks/centresThunk";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const tableData = [
    {id: nanoid(), text:"No."},
    {id: nanoid(), text:"VTC Name"},
    {id: nanoid(), text:"Ward"},
    {id: nanoid(), text:"Email"},
    {id: nanoid(), text:"Phone"},
    {id: nanoid(), text:"Action"}
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

    const removeHandler = (vtc) => {
        dispatch(removeVTC(vtc)).then(()=> {
            dispatch(getAllVTCs())
        })
    }

    const renderedVTCRows = data.map((el, i)=> {
        return(
            <tr key={el._id} className="text-xl font-thin ">
                <td>{i+1}</td>
                <td>{el.name}</td>
                <td>{el.ward}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
                <td><button className="bg-red-500 p-1 w-[80%] m-[8%] text-white rounded-md" onClick={()=>removeHandler(el)}>Delete</button></td>
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
            <div className="flex justify-between">
                <h1 className="mt-[2%] text-2xl font-bold">LIST OF VOCATIONAL TRAINING CENTRES IN THE COUNTY</h1>
                <button onClick={redirectHandler} className="p-2 bg-blue-500 font-mono text-2xl text-white m-5 rounded-md">Add a VTC</button>
            </div>
            <table className="mx-[5%] w-[50%] mt-[5%] shadow-md">
                <thead>
                    <tr className="font-bold text-white font-mono text-2xl bg-purple-500 rounded-md border shadow-lg">
                        {tableHeaders}
                    </tr>
                </thead>
                <tbody className="space-y-5">
                    {renderedVTCRows}
                </tbody>
            </table>
            <Footer />
        </section>
    )
}

export default VTCs;