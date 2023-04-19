import React from 'react';
import StudentList2 from './StudentList2';

function Students() {
    // const students = ["Ganesh", "ram", "Prem", "Zain"];
    // const Numbers = [2,4,6,8];
    // const result = Numbers.map(Num => <h1> {Num = Num * 2}</h1> )

    const students = [
        {
            name : "Yogesh",
            age : 23
        },
        {
            name : "Satish",
            age : 24
        },
        {
            name : "Mitesh",
            age : 25
        }
    ]
  return (
    <div>
    {students.map(std => <StudentList2 std={std} />)}
      {/* {students.map(std => <h1>{std}</h1>)} */}
      {/* {Numbers.map(Num => <h1> {Num = Num * 2}</h1> )} */}
      {/* {result} */}
    </div>
  )
}

export default Students
