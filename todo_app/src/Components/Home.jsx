import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'

const Home = () => {
  const[user,setUser]=useState([])
  const [filterOption, setFilterOption] = useState('all');
  useEffect(()=>{
      const fetchdata=async()=>{
          try{
              const response=await axios.get('http://localhost:4000/todo/view')
              setUser(response.data)
          }catch(error){
              console.error('error')
          }
      };
      fetchdata();
  },[]);
  const deleteTodo=async(id)=>{
    await axios.delete(`http://localhost:4000/todo/delete/${id}`)
    .then((response)=>{
        alert("deleted"); 
          window.location.reload();
    })
    .catch((error)=>{
        console.error(error)
    })
}
const filteredUser = user.filter((todo) => {
  if (filterOption === 'all') {
    return true;
  } else if (filterOption === 'completed') {
    return todo.status;
  } else if (filterOption === 'incomplete') {
    return !todo.status;
  }
  return true;
});
  return (
    <div>
      <Navbar/>
      <div style={{ margin: '10px' }}>
        <button style={{ backgroundColor: '#9957c7', color: 'white', margin: '10px' , border: 'none'}}onClick={() => setFilterOption('all')}>All Tasks</button>
        <button  style={{ backgroundColor: '#9957c7', color: 'white', margin: '10px',border: 'none' }} onClick={() => setFilterOption('completed')}>Completed</button>
        <button  style={{ backgroundColor: '#9957c7', color: 'white', margin: '10px',border: 'none' }} onClick={() => setFilterOption('incomplete')}>Incomplete</button>
      </div>
      <TableContainer component={Paper} sx={{ width: '90%', margin: '5%' }}>
 <Table className="table-style" sx={{ minWidth: 1000 }} aria-label="simple table">
   <TableHead className="table-head"sx={{ backgroundColor: '#9957c7', color: 'white' }}>
     <TableRow>
       <TableCell align="center"sx={{ border: '1px solid #dddddd', fontWeight: 'bold' }}>Todo</TableCell>
       <TableCell align="center"sx={{ border: '1px solid #dddddd', fontWeight: 'bold' }}>Status</TableCell>
       <TableCell align="center"sx={{ border: '1px solid #dddddd', fontWeight: 'bold' }}>Delete</TableCell>
       {/* <TableCell align="center"sx={{ border: '1px solid #dddddd' , fontWeight: 'bold'}}>Batch</TableCell> */}

     </TableRow>
   </TableHead>
   <TableBody>
  {filteredUser.map((todo, index) => (
    <TableRow key={index}>
      <TableCell align='center' sx={{ border: '1px solid #dddddd' }}>
        <span
          style={{
            textDecoration: todo.status ? 'line-through' : 'none',
            color: todo.status ? '#A9A9A9' : 'black',
          }}
        >
          {todo.description}
        </span>
      </TableCell>

      <TableCell align='center' sx={{ border: '1px solid #dddddd' }}>
        <input
          type="checkbox"
          disabled={todo.status}
        />
      </TableCell>
      <TableCell align='center' sx={{ border: '1px solid #dddddd' }}>
        <button onClick={() => { deleteTodo(todo._id) }}>Delete</button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

 </Table>
</TableContainer>
    </div>
  )
}

export default Home
