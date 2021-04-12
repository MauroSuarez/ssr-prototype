import Head from 'next/head'
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div class="chat-notification">
        <div class="chat-notification-logo-wrapper">
          <img class="chat-notification-logo" src="https://www.kindpng.com/picc/m/593-5932974_15-chat-bubble-icons-by-creativevip-on-envato.png" alt="ChitChat Logo"></img>
        </div>
        <div class="chat-notification-content">
          <h4 class="chat-notification-title">ChitChat</h4>
          <p class="chat-notification-message">You have a new message!</p>
        </div>
      </div>
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-10">
        <div class="flex-shrink-0">
        <img class="chat-notification-logo" src="https://www.kindpng.com/picc/m/593-5932974_15-chat-bubble-icons-by-creativevip-on-envato.png" alt="ChitChat Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-gray-500">You have a new message!</p>
        </div>
      </div>
      <div className="container flex mx-auto">
      <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
      <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
          Click me
        </button>

        <button class="btn btn-green">
          Button
        </button>
        </div>
    </>
  )
}
