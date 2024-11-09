'use client';

import { useState } from 'react';
import './styles.css';
import StackVisualizer from './StackVisualizer';

export default function Home() {
  const [stack, setStack] = useState([]); // Stack state
  const [log, setLog] = useState([]); // Operation log
  const [inputValue, setInputValue] = useState(''); // Input value
  const [mode, setMode] = useState('LIFO'); // Track current mode (FIFO or LIFO)

  // Toggle between FIFO and LIFO modes
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'LIFO' ? 'FIFO' : 'LIFO'));
  };

  // Handle pushing a value onto the stack
  const handlePush = () => {
    if (inputValue) {
      setStack((prevStack) => [...prevStack, inputValue]);
      addLog(`Pushed ${inputValue}`);
      setInputValue(''); // Clear input after push
    }
  };

  // Handle popping a value from the stack based on mode
  const handlePop = () => {
    if (stack.length === 0) return;

    const removed = mode === 'LIFO' ? stack[stack.length - 1] : stack[0];
    const newStack = mode === 'LIFO' ? stack.slice(0, -1) : stack.slice(1);

    setStack(newStack);
    addLog(`Popped ${removed}`);
  };

  // Handle clearing the stack
  const handleClear = () => {
    setStack([]);
    addLog('Cleared Stack');
  };

  // Add a log entry
  const addLog = (message) => {
    setLog((prevLog) => [...prevLog, message]);
  };

  return (
    <div className="container">
      {/* Left Sidebar: Operation Log */}
      <div className="log-sidebar">
        <h3>Operation Log</h3>
        <ul>
          {log.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>

      {/* Center: Stack Controls */}
      <div className="controls">
        <div className="controls-header">
          <h3>Stack Operation</h3>
          <button onClick={toggleMode} className="mode-toggle">
            Toggle Mode (Current: {mode})
          </button>
        </div>
        <div>
          <input 
            type="number" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Enter value"
          />
          <button onClick={handlePush}>Push</button>
          <button onClick={handlePop}>Pop</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>

      {/* Right Sidebar: 3D Stack Visualization */}
      <div className="visualizer">
        <StackVisualizer stack={stack} />
      </div>
    </div>
  );
}
