import React, { useState } from 'react';
import Cards from './components/Cards';
import Forms from './components/Forms';  // Fix the import statement

function App() {
  const [users, setUsers] = useState([])

  const handleFromSubmitData = (data)=>{
   setUsers([...users, data])
  }

  const handleRemove = (id) => {
    setUsers(()=>users.filter((item, index)=> index!=id))
  }

  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <div className='container mx-auto'>
        <Cards handleRemove={handleRemove} users={users}/>
        <Forms  handleFromSubmitData={handleFromSubmitData} />  {/* Fix the component name */}
      </div>
    </div>
  );
}

export default App;
