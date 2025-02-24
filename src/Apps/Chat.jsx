import React, { useState } from "react";

// Chatbot response generator for MERN-based Project Management Tool
const generateBotResponse = (message) => {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("hi") || lowerMessage.includes("hello")) {
    return "Hello! How can I assist you with the Project Management Tool?";
  }
  if (lowerMessage.includes("project details")) {
    return "This is a MERN-based Project Management Tool designed to help teams plan, assign tasks, and track progress efficiently.";
  }
  if (lowerMessage.includes("features")) {
    return "Key features include Task Assignment, Team Collaboration, Real-time Chat, Progress Tracking, and Notifications.";
  }
  if (lowerMessage.includes("tech stack") || lowerMessage.includes("technologies")) {
    return "The project uses MongoDB (Database), Express.js (Backend), React.js (Frontend), and Node.js (Server).";
  }
  if (lowerMessage.includes("authentication")) {
    return "The tool uses JWT authentication and Firebase for secure user login.";
  }
  if (lowerMessage.includes("assign tasks")) {
    return "To assign tasks: Navigate to Dashboard > Select Project > Click 'Add Task' > Enter details and assign a team member.";
  }
  if (lowerMessage.includes("track progress")) {
    return "Progress is tracked through Kanban boards, Gantt charts, and task status updates.";
  }
  if (lowerMessage.includes("collaboration")) {
    return "Team members can collaborate via real-time chat, shared task boards, and discussion forums.";
  }
  if (lowerMessage.includes("deployment")) {
    return "The tool is deployed using Vercel for the frontend and Render for the backend, with MongoDB Atlas for database hosting.";
  }
  if (lowerMessage.includes("bye")) {
    return "Goodbye! Let me know if you need more details about the project.";
  }

  return "I'm here to help with project-related queries. Try asking about features, tech stack, or deployment!";
};

// Component for displaying messages
const ChatTile = ({ messages }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg h-96 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-2">Project Management Chat</h2>
      <div className="space-y-2">
        {messages.map((chat, index) => (
          <div
            key={index}
            className={`p-2 rounded-md ${
              chat.user === "You" ? "bg-blue-100 text-right" : "bg-gray-100"
            }`}
          >
            <strong>{chat.user}:</strong> {chat.message}
          </div>
        ))}
      </div>
    </div>
  );
};

// Main ChatApp component
const ChatApp = () => {
  const [messages, setMessages] = useState([
    { user: "Bot", message: "Welcome! Ask me anything about the Project Management Tool." }
  ]);
  const [newMessage, setNewMessage] = useState("");

  // Function to handle sending a message
  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage = { user: "You", message: newMessage };
    setMessages((prev) => [...prev, userMessage]);

    // Generate bot reply after a short delay
    setTimeout(() => {
      const botMessage = {
        user: "Bot",
        message: generateBotResponse(newMessage)
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setNewMessage(""); // Clear input field
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <ChatTile messages={messages} />
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          className="flex-grow p-2 border rounded-md"
          placeholder="Ask about the project..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatApp;