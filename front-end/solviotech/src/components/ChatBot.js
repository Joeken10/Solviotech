import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";
import { MessageCircle, Send, X } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi, I’m Solvio! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [chatReplies, setChatReplies] = useState([]);
  const messagesEndRef = useRef(null);

  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  
  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const res = await fetch("http://localhost:5000/chatReplies");
        const data = await res.json();
        setChatReplies(data);
      } catch (err) {
        console.error("Failed to load chat replies:", err);
      }
    };
    fetchReplies();
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");

    
    const match =
      chatReplies.find((item) =>
        input.toLowerCase().includes(item.question.toLowerCase())
      ) || null;

    const botResponse = match
      ? match.reply
      : "🤖 Sorry, I’m not sure how to answer that yet.";

    setMessages([
      ...updatedMessages,
      { sender: "bot", text: botResponse },
    ]);
  };

  return (
    <div className="chatbot-container">
      {isOpen ? (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <h4>💬 Chat with Solvio</h4>
            <button onClick={() => setIsOpen(false)} className="close-btn">
              <X size={18} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <MessageCircle size={28} />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
