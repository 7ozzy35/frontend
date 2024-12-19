import React, { useState } from 'react';

function Person() {
  // Giriş formu state'leri
  const [personelNo, setPersonelNo] = useState('');
  const [tcKimlik, setTcKimlik] = useState('');
  const [sifre, setSifre] = useState('');
  const [hastane, setHastane] = useState('');

  // Kayıt formu state'leri
  const [yeniAd, setYeniAd] = useState('');
  const [yeniSoyad, setYeniSoyad] = useState('');
  const [yeniTcKimlik, setYeniTcKimlik] = useState('');
  const [yeniSifre, setYeniSifre] = useState('');
  const [yeniHastane, setYeniHastane] = useState('');
  const [yeniMeslek, setYeniMeslek] = useState('');
  const [yeniBrans, setYeniBrans] = useState('');
  const [kayitFormuAcik, setKayitFormuAcik] = useState(false);

  // Güncelleme formu state'leri
  const [guncelleFormuAcik, setGuncelleFormuAcik] = useState(false);
  const [guncelAd, setGuncelAd] = useState('');
  const [guncelSoyad, setGuncelSoyad] = useState('');
  const [guncelTcKimlik, setGuncelTcKimlik] = useState('');
  const [guncelSifre, setGuncelSifre] = useState('');
  const [guncelHastane, setGuncelHastane] = useState('');

  const handleGiris = () => {
    console.log('Personel No:', personelNo);
    console.log('TC Kimlik No:', tcKimlik);
    console.log('Şifre:', sifre);
    console.log('Hastane:', hastane);
  };

  const handleKayit = () => {
    console.log('Ad:', yeniAd);
    console.log('Soyad:', yeniSoyad);
    console.log('TC Kimlik No:', yeniTcKimlik);
    console.log('Şifre:', yeniSifre);
    console.log('Hastane:', yeniHastane);
    console.log('Meslek:', yeniMeslek);
    console.log('Branş:', yeniBrans);
    setKayitFormuAcik(false);
  };

  const handleGuncelle = () => {
    console.log('Güncel Ad:', guncelAd);
    console.log('Güncel Soyad:', guncelSoyad);
    console.log('Güncel TC Kimlik No:', guncelTcKimlik);
    console.log('Güncel Şifre:', guncelSifre);
    console.log('Güncel Hastane:', guncelHastane);
    setGuncelleFormuAcik(false);
  };

  return (
    <div style={{ 
      position: 'relative',
      backgroundColor: '#282c34',
      minHeight: '100vh',
      padding: '20px'
    }}>
      {/* Personel Kayıt ve Güncelleme Butonları */}
      <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setKayitFormuAcik(true)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#61dafb',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            color: 'black',
            fontWeight: 'bold'
          }}
        >
          Personel Kaydı +
        </button>
        <button
          onClick={() => setGuncelleFormuAcik(true)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#61dafb',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            color: 'black',
            fontWeight: 'bold'
          }}
        >
          Personel Güncelle
        </button>
      </div>

      {/* Giriş Formu */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Personel Girişi</h1>
          
          <div style={{ marginTop: '20px' }}>
            <input
              type="number"
              placeholder="Personel Numarası"
              value={personelNo}
              onChange={(e) => setPersonelNo(e.target.value)}
              style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="TC Kimlik Numarası"
              value={tcKimlik}
              onChange={(e) => setTcKimlik(e.target.value)}
              style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
            />
          </div>

         

          <div>
            <input
              type="password" 
              placeholder="Şifre"
              value={sifre}
              onChange={(e) => setSifre(e.target.value)}
              style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Hastane"
              value={hastane}
              onChange={(e) => setHastane(e.target.value)}
              style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
            />
          </div>

          <button 
            onClick={handleGiris}
            style={{
              padding: '10px 20px',
              backgroundColor: '#61dafb',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Giriş Yap
          </button>
        </div>
      </div>

      {/* Kayıt Formu Modal */}
      {kayitFormuAcik && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{ 
            backgroundColor: '#282c34',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            position: 'relative'
          }}>
            <button
              onClick={() => setKayitFormuAcik(false)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
            <h1 style={{ color: 'white' }}>Personel Kaydı</h1>
            
            <div style={{ marginTop: '20px' }}>
              <input
                type="text"
                placeholder="Ad"
                value={yeniAd}
                onChange={(e) => setYeniAd(e.target.value)}
                style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Soyad"
                value={yeniSoyad}
                onChange={(e) => setYeniSoyad(e.target.value)}
                style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
              />
            </div>

            <div>
              <input
                type="number"
                placeholder="TC Kimlik Numarası"
                value={yeniTcKimlik}
                onChange={(e) => setYeniTcKimlik(e.target.value)}
                style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Şifre"
                value={yeniSifre}
                onChange={(e) => setYeniSifre(e.target.value)}
                style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Hastane"
                value={yeniHastane}
                onChange={(e) => setYeniHastane(e.target.value)}
                style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Meslek"
                value={yeniMeslek}
                onChange={(e) => setYeniMeslek(e.target.value)}
                style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Branş"
                value={yeniBrans}
                onChange={(e) => setYeniBrans(e.target.value)}
                style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
              />
            </div>

            <button 
              onClick={handleKayit}
              style={{
                padding: '10px 20px',
                backgroundColor: '#61dafb',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Kayıt Ol
            </button>
          </div>
        </div>
      )}

      {/* Güncelleme Formu Modal */}
      {guncelleFormuAcik && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{ 
            backgroundColor: '#282c34',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            position: 'relative'
          }}>
            <button
              onClick={() => setGuncelleFormuAcik(false)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
            <h1 style={{ color: 'white' }}>Personel Güncelle</h1>
            
            <div style={{ marginTop: '20px' }}>
              <input
                type="text"
                placeholder="Ad"
                value={guncelAd}
                onChange={(e) => setGuncelAd(e.target.value)}
                style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Soyad"
                value={guncelSoyad}
                onChange={(e) => setGuncelSoyad(e.target.value)}
                style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
              />
            </div>

            <div>
              <input
                type="number"
                placeholder="TC Kimlik Numarası"
                value={guncelTcKimlik}
                onChange={(e) => setGuncelTcKimlik(e.target.value)}
                style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Şifre"
                value={guncelSifre}
                onChange={(e) => setGuncelSifre(e.target.value)}
                style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Hastane"
                value={guncelHastane}
                onChange={(e) => setGuncelHastane(e.target.value)}
                style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
              />
            </div>

            <button 
              onClick={handleGuncelle}
              style={{
                padding: '10px 20px',
                backgroundColor: '#61dafb',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Person;
