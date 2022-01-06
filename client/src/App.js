import {useState}  from  'react'
import './App.css';
import Axios from 'axios'

function App() {
  const [name,setName] =  useState("")
  const [age,setAge] = useState(0)
  const [country,setCountry]= useState("")
  const [position,setPosition] = useState("")
  const [wage,setWage] =  useState(0)
  const [newWage,setNewWage]= useState(0)
  const [employeeList,setEmplyeeList] = useState([])

  const addEmployee = ()=>{
    Axios.post("http://localhost:3001/create",{
      name: name,
      age : age,
      country : country,
      position: position,
      wage : wage
    }).then(()=>{
      setEmplyeeList(...employeeList,{name:name , age:age,country:country,position:position,wage:wage})
    })
  }

const getEmployees = ()=>{
  Axios.get("http://localhost:3001/employees").then((response)=>{
    setEmplyeeList(response.data)
  })
}

const updateEmployeeWage =  (id)=>{
  Axios.put(`http://localhost:3001/update/${id}`,{wage:new wage,id:id}).then(
    response=>{
    setEmployeeList(
      emplyeeList.map(val=>{
         return val.id == id  ? {id: val.id,name :val.name,country:val.country,age:val.age,position :val.position,wage:newWage} : val;

      })
    )
  })
}
const deleteEmployeeList= (id)=>{
   Axios.delete

}
return (
    <div className="App">
     
    </div>
  );
}

export default App;
