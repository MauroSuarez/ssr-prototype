import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from "react-i18next"
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
  countSelector
} from './counterSlice'
import '../../i18n'
import styles from './Counter.module.css'

export function Counter() {
  const counter = useSelector(countSelector);
  const { t } = useTranslation();
  useEffect(() => {
    // capture vars .env public
    console.log(process.env.NEXT_PUBLIC_APP_DROP_CONSOLE, 'counter');
  });
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-10">
        <div className="flex-shrink-0">
        <img className="chat-notification-logo" src="https://www.kindpng.com/picc/m/593-5932974_15-chat-bubble-icons-by-creativevip-on-envato.png" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
      <h2>{t('page1.Mauro')}</h2>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  )
}

Counter.getStaticProps = async (ctx) => {
  console.log(process.env.NEXT_PUBLIC_APP_DROP_CONSOLE, 'dfasdfasdfcounter');
  return {  }
}