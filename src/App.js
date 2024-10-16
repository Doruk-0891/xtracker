import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 style={{
        backgroundColor: '#d8d5d5',
        margin: '0',
        textAlign: 'center',
        padding: '1rem 0' 
      }}>xTracker</h1>
      
      <Outlet />
      
    </div>
  );
}

export default App;
