import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>To-Do App</h1>
      {/* Komponenten landen hier */}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);