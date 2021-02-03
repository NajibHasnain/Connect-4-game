import React from "react";

const EmployeeDetailsComponent = ({ employees }) => {
  const { employee_name, employee_salary } = employees || {};
  const empDetail = `${employee_name},  $${employee_salary}`;
  return (
    <li>
      <span>{empDetail}</span>
    </li>
  );
};

export default EmployeeDetailsComponent;
