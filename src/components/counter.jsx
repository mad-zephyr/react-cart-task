import React from "react" 

const Counter = (props) => {
  const {value, price,  name, onDelete, id, onIncrement, onDicrement} = props 
 
  const x = 'Empty'  

  const formatValue = () => {
    if (value <= 0) { return  x } else { return value }
  }

  const getCoast = () => {
    if (value >= 0) {
      return  (price * value).toFixed(2)
    }
    return 0
  }

  const getBadgesClasses = () => {
    let classes = 'badge m-2 '
    return classes += value <= 0 ? 'bg-warning' : 'bg-primary'
  }
 
  const handleIcrement = (id) => {
    onIncrement(id) 
  }

  const handleDicrement = (id) => { 
    onDicrement(id) 
  }
  
  return (
    <tr>
      <th className='align-middle'>{name}</th>
      <th className='align-middle'>{getCoast()} eur</th>
      <th className='align-middle text-center'><button onClick={() => handleDicrement(id)} className="btn btn-primary btn-sm m-2" > -1 </button> </th>
      <th className='align-middle text-center'><span className={getBadgesClasses()+ ' fs-6'}> {formatValue()} </span></th>
      <th className='align-middle text-center'><button onClick={() => handleIcrement(id)} className="btn btn-primary btn-sm m-2" > +1 </button></th>
      <th className='align-middle text-center' ><button onClick={onDelete} className="btn btn-danger btn-sm m-1">Delete</button></th>
    </tr>
  ) 
}

export default Counter