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
import { Button } from 'antd';
import styles from './Counter.module.css'
//import { Tabs } from 'antd';

//const { TabPane } = Tabs;

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

<div className="flex p-6 bg-white rounded-xl shadow-md items-center space-x-4 mt-10">
  <div className="flex-none w-44 relative">
    <img src="/kids-jumpsuit.jpg" alt className="absolute inset-0 w-full h-full object-cover rounded-lg" />
  </div>
  <form className="flex-auto pl-6">
    <div className="flex flex-wrap items-baseline">
      <h1 className="w-full flex-none font-semibold mb-2.5">
        Kids Jumpsuit
      </h1>
      <div className="text-4xl leading-7 font-bold text-purple-600">
        $39.00
      </div>
      <div className="text-sm font-medium text-gray-400 ml-3">
        In stock
      </div>
    </div>
    <div className="flex items-baseline my-8">
      <div className="space-x-2 flex text-sm font-medium">
        <label>
          <input className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-700 text-white" name="size" type="radio" defaultValue="xs" defaultChecked />
          XS
        </label>
        <label>
          <input className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" defaultValue="s" />
          S
        </label>
        <label>
          <input className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" defaultValue="m" />
          M
        </label>
        <label>
          <input className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" defaultValue="l" />
          L
        </label>
        <label>
          <input className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" defaultValue="xl" />
          XL
        </label>
      </div>
      <div className="ml-3 text-sm text-gray-500 underline">Size Guide</div>
    </div>
    <div className="flex space-x-3 mb-4 text-sm font-semibold">
      <div className="flex-auto flex space-x-3">
        <button className="w-1/2 flex items-center justify-center rounded-full bg-purple-700 text-white" type="submit">Buy now</button>
        <button className="w-1/2 flex items-center justify-center rounded-full bg-purple-50 text-purple-700" type="button">Add to bag</button>
      </div>
      <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-purple-700" type="button" aria-label="like">
        <svg width={20} height={20} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p className="text-sm text-gray-500">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>



      <ul className="space-y-4">
  <li>
  <div className="w-10 h-3 bg-gradient-to-br from-blue-500 to-purple-600"></div>
  </li>
  <li>
  <div className="from-purple-400 via-pink-500 bg-gradient-to-r h-4 w-60 block"></div>
  </li>
  <li>
  
  <div className="from-blue-600 to-purple-500 bg-gradient-to-r h-4 w-40 block"></div>
  </li>
  <li>
    <div className="bg-gradient-to-l from-blue-500 to-transparent h-4 w-120 block" />
  </li>
</ul>

      <Button className="btn btn-green cursor-pointer" onClick={() => dispatch(increment())} type="primary">Primary Button</Button>
      

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