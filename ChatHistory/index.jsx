import React from "react";
import ReactMarkdown from "react-markdown";

const ChatHistory = ({ chatHistory }) => {
  return (
    <div className="flex flex-col space-y-4 overflow-y-auto h-[400px] px-4"> 
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`flex items-start py-3 px-5 rounded-lg max-w-[80%] 
            ${message.type === "user" ? "ml-auto bg-gray-100 text-gray-800" : "mr-auto bg-blue-100 text-blue-800"}`}
        >
          {message.type === "user" ? (
            <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex justify-center items-center mr-3">
              <span className="font-semibold text-sm">👤</span>
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full bg-blue-400 text-white flex justify-center items-center mr-3">
              <span className="font-semibold text-sm">🤖</span>
            </div>
          )}

          <div className="flex-grow">
            <ReactMarkdown>{message.message}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
