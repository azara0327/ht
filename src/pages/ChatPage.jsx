import React, { useState } from "react";
import "./ChatPage.css";

const ChatPage = () => {
    const [activeTab, setActiveTab] = useState("Chats");
    const [activeChat, setActiveChat] = useState(null);

    const tabs = ["Chats", "Groups", "Communities"];
    const conversations = {
        Chats: [
            { id: 1, name: "US office visiting chat", lastMessage: "When is our next meeting?" },
            { id: 2, name: "Annual Conf chat", lastMessage: "Group Dinner at 8 PM" },
        ],
        Groups: [
            { id: 3, name: "Project Team Group", lastMessage: "SCRUM details?" },
            { id: 4, name: "Stakeholder Group", lastMessage: "Board Meeting" },
        ],
        Communities: [
            { id: 5, name: "Fun at Meditab US visit", lastMessage: "Who's up for a pancake?" },
            { id: 6, name: "Conf fun events", lastMessage: "event @04:00 PM" },
        ],
    };

    const messages = [
        { sender: "John Doe", content: "Hey, how are you?" },
        { sender: "You", content: "I'm good, thanks! How about you?" },
        { sender: "John Doe", content: "Doing great. Let's catch up soon!" },
    ];

    return (
        <div className="chat-page">
            {/* Top Navigation */}
            <nav className="top-nav">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`nav-item ${activeTab === tab ? "active" : ""}`}
                        onClick={() => {
                            setActiveTab(tab);
                            setActiveChat(null);
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </nav>

            <div className="chat-container">
                <div className="conversation-list">
                    <h3>{activeTab}</h3>
                    <ul>
                        {conversations[activeTab].map((conv) => (
                            <li
                                key={conv.id}
                                className={activeChat === conv.id ? "active" : ""}
                                onClick={() => setActiveChat(conv.id)}
                            >
                                <h4>{conv.name}</h4>
                                <p>{conv.lastMessage}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="chat-window">
                    {activeChat ? (
                        <div>
                            <h3>Chat</h3>
                            <div className="messages">
                                {messages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={msg.sender === "You" ? "message sent" : "message received"}
                                    >
                                        <p>{msg.content}</p>
                                    </div>
                                ))}
                            </div>
                            <form
                                className="message-form"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert("Message sent!");
                                }}
                            >
                                <input type="text" placeholder="Type a message..." />
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    ) : (
                        <h3>Select a conversation to start chatting</h3>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
