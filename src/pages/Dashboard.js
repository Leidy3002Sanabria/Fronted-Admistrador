import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { Column } from '@ant-design/plots';
const Dashboard = ()=> {
    return(
        <div>
            <h3 className="mb-4">Dashboard</h3>
            <div className="d-flex justify-content-between aling-items-center gap-3">
            
            <div className="d-flex  justify-content-between align-items-end flex-grow-1 bg-white p-3 roundned-3">
                <div>
                    <p className="mb-0">Total</p> 
                    <h4 className="mb-0 sub-title">$100</h4>
                </div>
                <div className="d-flex flex-column align-items-end">
                <h6 classname="green"><BsArrowDownRight />32%</h6>
                    <p className="mb-0">
                    Compare tu April
                    </p>
                </div>
            </div> 
            <div className="d-flex  justify-content-between align-items-end flex-grow-1 bg-white p-3 roundned-3">
                <div>
                    <p className="mb-0">Total</p> 
                    <h4 className="mb-0 sub-title">$100</h4>
                </div>
                <div className="d-flex flex-column align-items-end">
                <h6 classname="red"><BsArrowDownRight />32%</h6>
                    <p className="mb-0">
                    Compare tu April
                    </p>
                </div>
            </div> 
            <div className="d-flex  justify-content-between align-items-end flex-grow-1 bg-white p-3 roundned-3">
                <div>
                    <p className="mb-0">Total</p> 
                    <h4 className="mb-0 sub-title">$100</h4>
                </div> 
                <div className="d-flex flex-column align-items-end">
                    <h6 classname="green"><BsArrowDownRight />32%</h6>
                    <p className="mb-0">
                    Compare tu April
                    </p>
                </div>
            </div>

            </div>
            

        </div>
       
    )
}
export default Dashboard ;