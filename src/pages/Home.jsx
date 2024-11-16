import React from 'react';

function Home() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      {/* Hero Section with Phone Images */}
      <section style={{ 
        padding: '4rem 2rem',
        background: '#f8f9fa'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ width: '50%' }}>
              <h1 style={{ 
                color: '#000',
                fontSize: '2.5rem',
                marginBottom: '1rem'
              }}>
                Where <br />
                innovation meets <br />
                tomorrow
              </h1>
              <button style={{
                backgroundColor: '#ff0000',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Learn More
              </button>
            </div>
            <div style={{ width: '50%' }}>
              <img src="/api/placeholder/400/600" alt="Phone Mockups" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '2rem' }}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: '4rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>+500</h2>
            <p>End to End Solutions</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>+40</h2>
            <p>Project Examples</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>+1</h2>
            <p>Innovation Hub</p>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      <section style={{ padding: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Strategy Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#ff0000', marginBottom: '1rem' }}>
              01. Strategy and Optimization
            </h3>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <p>Comprehensive analysis and strategic planning for optimal results...</p>
                <button style={{
                  backgroundColor: '#ff0000',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '4px',
                  marginTop: '1rem'
                }}>
                  Read More
                </button>
              </div>
              <img 
                src="/api/placeholder/400/300" 
                alt="Strategy" 
                style={{ width: '50%', borderRadius: '8px' }}
              />
            </div>
          </div>

          {/* Technology Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#ff0000', marginBottom: '1rem' }}>
              02. Technology and Innovation
            </h3>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <p>Cutting-edge technological solutions for modern challenges...</p>
                <button style={{
                  backgroundColor: '#ff0000',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '4px',
                  marginTop: '1rem'
                }}>
                  Read More
                </button>
              </div>
              <img 
                src="/api/placeholder/400/300" 
                alt="Technology" 
                style={{ width: '50%', borderRadius: '8px' }}
              />
            </div>
          </div>

          {/* Manufacturing Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#ff0000', marginBottom: '1rem' }}>
              03. Manufacturing Infrastructure
            </h3>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <p>Advanced manufacturing solutions for industrial needs...</p>
                <button style={{
                  backgroundColor: '#ff0000',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '4px',
                  marginTop: '1rem'
                }}>
                  Read More
                </button>
              </div>
              <img 
                src="/api/placeholder/400/300" 
                alt="Manufacturing" 
                style={{ width: '50%', borderRadius: '8px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section style={{ 
        padding: '2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '2rem' }}>Latest Updates</h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem'
          }}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} style={{ 
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img 
                  src={`/api/placeholder/300/200`} 
                  alt={`Update ${item}`}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1rem' }}>
                  <h4>Update Title</h4>
                  <p>Short description...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ 
        padding: '2rem',
        backgroundColor: '#eee'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Subscribe to our newsletter</h2>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <input 
              type="email" 
              placeholder="Enter your email"
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                border: '1px solid #ddd',
                width: '300px'
              }}
            />
            <button style={{
              backgroundColor: '#ff0000',
              color: 'white',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '4px'
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;