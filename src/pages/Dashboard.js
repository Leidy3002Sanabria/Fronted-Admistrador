import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
const data = [
  { type: "1-3秒", value: 0.16 },
  { type: "4-10秒", value: 0.125 },
  { type: "11-30秒", value: 0.24 },
  { type: "31-60秒", value: 0.19 },
  { type: "1-3分", value: 0.22 },
  { type: "3-10分", value: 0.05 },
  { type: "10-30分", value: 0.01 },
  { type: "30+分", value: 0.015 },
];
const Dashboard = () => {
  const config = {
    data,
    xField: "type",
    yField: "value",
    style: {
      fill: ({ type }) => {
      
        return "#524CC1";
      },
    },
    label: {
      text: (originData) => {
        const val = parseFloat(originData.value);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
        return "";
      },
      offset: 10,
    },
    legend: false,
  };
  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex  justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="mb-0">Total</p>
            <h4 className="mb-0 sub-title">$100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowDownRight />
              32%
            </h6>
            <p className="mb-0">Compare tu April</p>
          </div>
        </div>
        <div className="d-flex  justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="mb-0">Total</p>
            <h4 className="mb-0 sub-title">$100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <BsArrowDownRight />
              32%
            </h6>
            <p className="mb-0">Compare tu April</p>
          </div>
        </div>
        <div className="d-flex  justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="mb-0">Total</p>
            <h4 className="mb-0 sub-title">$100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowDownRight />
              32%
            </h6>
            <p className="mb-0">Compare tu April</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="mb-4">Ingresos estáticos</h3>
        <div>
          <Column {...config} />;
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
