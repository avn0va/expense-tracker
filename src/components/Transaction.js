import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

// Jos positiivinen numero lisää "+" eteen, jos negatiivinen lisää ei mitään, koska tietokanna arvossa on "-" summan edessä mikäli summa on negatiivinen mutta ei mitään jos summa on positiivinen 
  const sign = transaction.amount < 0 ? '' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}{(transaction.amount)}€</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  )
}