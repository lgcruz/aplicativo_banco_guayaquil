// "use client";
import Image from 'next/image'
import {useEffect, useState} from "react"

export interface Employee {
  employee_name: string;
  id: number;
  employee_salary: number;
}

export default async function Home() {
  // const [employees, setEmployees] = useState([])
  // useEffect(() => {
    var employeesList: Employee[] = [
      // { employee_name: "", id:0, employee_salary:0}
    ];
    const response = await fetch("https://dummy.restapiexample.com/api/v1/employees")
    // .then((response) => {
      // console.log(response);
    const data = await response.json();
    // }).then((data) => {
    employeesList = data.data;
      // console.log(data.data);
    // });
  
  // }, []);
  return (
    <div className='flex items-center justify-center'>
      <div className='w-4/5 py-8 '>
        

      </div>
    </div>
    
  )
}
