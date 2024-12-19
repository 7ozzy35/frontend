import React from 'react';
import './App.css';
import personLogo from './logo/personlogo.png';
import hospitalLogo from './logo/hospital.png';
import { useNavigate } from 'react-router-dom';
import Person from './Person.js';

function App() {
  
  const navigate = useNavigate();

  const handlePersonelClick = () => {
    console.log("Personel girişi tıklandı");
    navigate('/person'); // Person.tsx sayfasına yönlendirme yapılıyor
  };

  const handleHastaClick = () => {
    alert("Hasta girişine yönlendiriliyorsunuz...");
    
    console.log("Hasta girişi tıklandı");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', flexDirection: 'row', gap: '200px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src={personLogo} 
              alt="Personel Logo" 
              onClick={handlePersonelClick}
              style={{
                width: '300px',
                height: '300px',
                cursor: 'pointer',
                backgroundColor: '#61dafb',
                borderRadius: '20px',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <p style={{ marginTop: '20px', fontSize: '28px' }}>Personel Girişi</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={hospitalLogo}
              alt="Hasta Logo"
              onClick={handleHastaClick}
              style={{
                width: '300px',
                height: '300px',
                cursor: 'pointer',
                backgroundColor: '#61dafb',
                borderRadius: '20px',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <p style={{ marginTop: '20px', fontSize: '28px' }}>Hasta Girişi</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
