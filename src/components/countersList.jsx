import React, {useState} from 'react'
import Counter from './counter'

const CounterList = () => {

  const initialState = [
    {id:0 , value:0, name: 'Зубочистка', price: 0.41}, 
    {id:1 , value:2, name: 'Ложка', price: 1.2}, 
    {id:2 , value:5, name: 'Вилка', price: 2.3}, 
    {id:3 , value:7, name: 'Тарелка', price: 4.4},
    {id:4 , value:4, name: 'Кастрюля', price: 12}, 
    {id:5 , value:3, name: 'Сковорода', price: 15}, 
    {id:6 , value:1, name: 'Половник', price: 5.4},  
    {id:7 , value:10, name: 'Комбайн', price: 34}
  ]
 
  const setTotalPrice = (state) => state.map(pos => {
    const {value, price} = pos;
    const totalPrice = value * price;
    return {...pos, totalPrice};
  })
 
  const [counters, setCounter] = useState( setTotalPrice(initialState) ) 
 
  const handleDelete = (id) => { 
    const newCounters = counters.filter(count => count.id !==  id) 
    setCounter(newCounters)
  }

  const handleReset = () => {
    setCounter(setTotalPrice(initialState)) 
  }

  const handleIncrement = (id) => {  
    const updatedCounter = counters.map(count => { 
      if (count['id'] === id) { 
        count.totalPrice = (count.value +=1) * count.price
      }
      return count
    }) 
    setCounter(updatedCounter) 
  }

  const handleDicrement = (id) => {
    const updatedCounter = counters.map(count => {
      if (count['id'] === id && count.value > 0){
        count.totalPrice = (count.value -=1) * count.price 
      }
      return count
    })
    setCounter(updatedCounter)
  }

  const getTotalCost = () => {
    const sum = counters.reduce((summ, {totalPrice}) =>  summ + totalPrice, 0)
    return sum.toFixed(2)
  }

  const setStyle = (align) => {
    if (align === 'start'){
      return 'align-middle text-start'
    }
    if (align === 'center') {
      return 'align-middle text-center'
    } 
    return 'align-middle' 
  }
 
  return <div className="container">
    <div className="row">
    {counters.length
      ? <table className="table">
        <thead>
          <tr>
            <th className={setStyle('start')} scope="col"> Продукт</th>
            <th className={setStyle('start')} scope="col"> Стоимость</th>
            <th className={setStyle('center')} scope="col"> Уменьшить</th>
            <th className={setStyle('center')} scope="col"> Количество</th>
            <th className={setStyle('center')} scope="col"> Увеличть</th>
            <th className={setStyle('center')} scope="col"> Действие</th>
          </tr>
        </thead>
        <tbody>
          {counters.map(props => <Counter 
              key={props.id} 
              {...props}
              onDelete={() => handleDelete(props.id)}
              onIncrement={handleIncrement}
              onDicrement={handleDicrement}
            /> )} 
        </tbody>
      </table>
      : null
    }
    <div className="container">
      <span> <b> Всего продуктов {counters.length} </b> | </span> 
      <span>Итого: {getTotalCost()} eur</span>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2"> Reset </button>
    </div>
    </div> 
  </div>
}

export default CounterList