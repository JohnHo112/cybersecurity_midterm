import React, { useState } from 'react';

const MessagesPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      const newMessage = {
        id: Math.random().toString(36).substr(2, 9), // Generate a random ID for the message
        username: "username",
        avatar: "user_avatar_url",
        text: message
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleDelete = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  return (
    <div style={{margin: 30}}>
      <br></br>
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl block ">Your message</h1>
        <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." value={message} onChange={handleMessageChange}></input>
        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
            Send
          </button>
        </div>
      </form>

      <div>
        {messages.map((msg) => (
          <div key={msg.id} className="mt-4 p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center mb-2">
              <img src={msg.avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
              <span className="ml-2 font-semibold">{msg.username}</span>
            </div>
            <div>{msg.text}</div>
            <button onClick={() => handleDelete(msg.id)} className="mt-2 text-red-600 hover:text-red-800">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessagesPage;
