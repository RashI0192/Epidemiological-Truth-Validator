import React, { useState } from "react";
import "./App.css";
import ChatHistory from "./component/ChatHistory";
import Loading from "./component/Loading";
import chatbotImage from './assests/chatbot.png'; // Import the image

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = process.env.REACT_APP_HUGGINGFACE_API_KEY; // Load from .env
  const genAI = new HuggingFaceGenerativeAI(apiKey); 
  const model = genAI.getGenerativeModel({ model: "google/flan-t5-base" });

  const handleUserInput = (e) => setUserInput(e.target.value);

  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    setIsLoading(true);
    try {
      const prompt = ` Always greet the user and ask them to provide a query related to **monkeypox** or **COVID-19** .
    Hello! I'm here to help you with news analysis related to **monkeypox** and **COVID-19**. 
    If your query isn't related to either of these topics, I won't be able to assist.

    I will analyze news articles and classify the information as either **misinformation** or **correct information**. I will also classify it as **good information**, **misleading**, or **questionable** (ternary classification). After providing the classification, I'll give a clear explanation of why I made that decision. 

    If the content is about **COVID-19**, I will mention that the accuracy of the information is **97%**. If it's related to **monkeypox**, I will evaluate it based on the latest data available.

    Response Format:
    - **Binary Class**: The classification result (either "Misinformation" or "Correct Information")
    - **Binary Explanation**: A brief explanation of why the content is classified as "Misinformation" or "Correct Information"
    - **Ternary Class**: The classification result (either "Good Information", "Misleading", or "Questionable")
    - **Ternary Explanation**: A brief explanation of why the content is classified as "Good Information", "Misleading", or "Questionable"
    - **Additional Notes**: Provide the accuracy of the classification (e.g., "The information seems correct with an accuracy of 93%"). If it's related to **COVID-19**, mention "97% accuracy."
    - **Additional Information**: Using your knowledge, provide deeper context or details relevant to the statement.

    Example 1: If the content is related to **COVID-19**:
        - "Binary Class: Misinformation"
        - "Binary Explanation: This information was proven false by multiple scientific studies."
        - "Ternary Class: Misleading"
        - "Ternary Explanation: The claim contradicts established facts regarding COVID-19."
        - "Additional Notes: The information seems correct with an accuracy of 97%. COVID-19 was shown to have no link to this claim."
        - "Additional Information: Based on the latest research, it's important to clarify that..."

    Example 2: If the content is related to **Monkeypox**:
        - "Binary Class: Correct Information"
        - "Binary Explanation: This information is verified and aligns with current health guidelines."
        - "Ternary Class: Good Information"
        - "Ternary Explanation: The content is supported by credible sources and factual evidence."
        - "Additional Notes: The information seems correct with an accuracy of 93%."
        - "Additional Information: As of the latest reports, monkeypox continues to be monitored for potential public health impacts..."

    **Important**: If your query isn't related to **COVID-19** or **Monkeypox**, I won't be able to provide an answer.

    User Query: ${userInput}
`;

      
      



      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      setChatHistory([
        ...chatHistory,
        { type: "user", message: userInput },
        { type: "bot", message: response.text() },
      ]);
    } catch (error) {
      console.error("Error sending message", error);
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  const clearChat = () => setChatHistory([]);

  return (
    <div className="App">
      <div className="chat-container flex flex-col">
        {/* Chatbot Header */}
        <div className="App-header">
          <h1 className="text-3xl font-bold text-center mb-6">Chatbot</h1>
          <img src={chatbotImage} alt="Chatbot Logo" />
        </div>

        {/* Chat Messages (Scrollable) */}
        <div className="flex-grow overflow-y-auto px-4 h-[400px]">
          <ChatHistory chatHistory={chatHistory} />
        </div>

        <Loading isLoading={isLoading} />

        {/* Input and Buttons */}
        <div className="p-4 bg-white">
          <div className="flex space-x-3">
            <input
              type="text"
              className="flex-grow p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              value={userInput}
              onChange={handleUserInput}
            />
            <button
              className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
              onClick={sendMessage}
              disabled={isLoading}
            >
              Send
            </button>
          </div>

          <button
            className="mt-4 w-full px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            onClick={clearChat}
          >
            Clear Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;