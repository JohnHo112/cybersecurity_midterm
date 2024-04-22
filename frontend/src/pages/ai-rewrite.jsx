import React, { useState, useEffect } from 'react';
import services from "../services";


const AiPage = (props) => {
  const [message, setMessage] = useState('');
  const [rewriteMessage, setRewriteMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      const newMessage = {
        sentence: message,
      };
      try {
        const data = await services.ai.rewrite(newMessage);
        setRewriteMessage(data);

      } catch (error) {
        console.error("Error submit:", error);
      }
    } else {
      alert("Type some message.");
    }
  };

  return (
    <div style={{margin: 30}}>
      <br></br>
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl block ">Rewrite message</h1>
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
      <br />
      <h1 className="text-2xl block ">AI rewrite message:</h1>
      <h2 className="text-2xl block ">{rewriteMessage}</h2>
    </div>
  );
}

export default AiPage;
