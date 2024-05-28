"use client";

import { Employee } from "@/app/page";
import { UserIcon } from "../Icons/UserIcon";

export default function Cards(props:{ employeeList: Employee[]}) {
    const {employeeList} = props;
    // console.log(employeeList);
    
    return (
    <div className='grid grid-cols-4 gap-4 bg-inherit'>
        {
            employeeList.map((employee, index) => {
                return (
                    <div key={`employee-${index}`} className="flex flex-col rounded bg-white p-6">
                        <div className="flex justify-center">
                            <div className="rounded-full bg-gray-200 w-24 h-24 flex justify-center items-center">
                                <UserIcon width={40} height={40} />
                            </div>
                        
                        </div>
                        <div>
                        {employee.employee_name}
                        </div>
                        <div>
                        {employee.employee_salary}
                        </div>
                        
                    </div>
                )
            })
        }
      <div >

      </div>
    </div>
  )
}
