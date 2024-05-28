"use client";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import {useEffect, useState} from "react"

export interface Employee {
  employee_name: string;
  id: number;
  employee_salary: number;
}

export default function Empleado({ params }: { params: { idEmpleado: number } }) {
  const [employee, setEmployee] = useState<Employee>({employee_name: '', id: 0, employee_salary: 0});
  const { idEmpleado } = params;
  useEffect(() => {
    // if ()
    fetch(`https://dummy.restapiexample.com/api/v1/employee/${idEmpleado}`).then((response) => {
      console.log(response);
      return response.json();
    }).then((data) => {
      const employee = data.data;
      setEmployee(employee);
      // console.log(employee);
    });
  
  }, []);
  return (
    <div className='flex items-center justify-center'>
      <div className='w-4/5 py-8 text-black'>
        {employee.employee_name}
        <br/>
        {employee.employee_salary}
      </div>
    </div>
    
  )
}
