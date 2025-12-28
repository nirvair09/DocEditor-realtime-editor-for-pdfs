# DocEditor - Realtime Collaborative Editor

A powerful, real-time collaborative document editor inspired by Google Docs. This application allows multiple users to edit the same document simultaneously with live synchronization and persistent storage.

## 🚀 Key Features

- **Real-time Collaboration**: See changes from other users instantly using Socket.io.
- **Auto-Save**: Documents are automatically saved to MongoDB every 2.5 seconds.
- **Unique Document Links**: Share a unique URL with others to collaborate on the same document.
- **Rich Text Editing**: Powered by Quill, supporting various formats, headers, lists, and images.
- **Infinite Documents**: Automatically creates a new document ID on the home page.

## 🛠️ Tech Stack

### Frontend
- **React**: Modern UI framework for building the user interface.
- **Quill**: Powerful rich text editor with a "Snow" theme.
- **Socket.io-client**: For low-latency, bidirectional communication.
- **React Router**: Manages document-based routing.
- **UUID**: Generates unique document identifiers.

### Backend
- **Node.js & Express**: Robust server-side runtime and framework.
- **Socket.io**: Enables real-time, event-based communication.
- **MongoDB & Mongoose**: NoSQL database for flexible and persistent document storage.
- **Dotenv**: Manages environment variables securely.

## 📂 Project Structure

```text
DocEditor/
├── client/           # React application
│   ├── src/
│   │   ├── App.js    # Routing logic
│   │   ├── Editor.js # Quill editor & Socket.io logic
│   │   └── styles.css# Main styling
│   └── package.json
└── server/           # Node.js server
    ├── Connection/   # MongoDB connection logic
    ├── Schema/       # Mongoose document schema
    ├── server.js     # Server entry point & Socket.io events
    └── package.json
```

## 🏁 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or Atlas URI)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nirvair09/DocEditor-realtime-editor-for-pdfs.git
   cd DocEditor-realtime-editor-for-pdfs
   ```

2. **Setup Server**:
   ```bash
   cd server
   npm install
   ```
   *Create a `.env` file in the `server` directory:*
   ```env
   MONGO_URL=your_mongodb_connection_string
   ```
   *Start the server:*
   ```bash
   npm start
   ```

3. **Setup Client**:
   ```bash
   cd ../client
   npm install
   npm start
   ```

## 📝 Usage

- When you visit the root URL (`/`), you will be automatically redirected to a new unique document link.
- Copy the URL from your browser and open it in another tab or send it to a friend to see real-time collaboration in action.
- All changes are saved automatically.

## 📄 License

This project is licensed under the [ISC License](LICENSE).
