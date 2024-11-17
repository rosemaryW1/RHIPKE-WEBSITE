import React from 'react';

import homeArrow from '../assets/home-arrow.png';
import homeBigspark from '../assets/home-bigspark.png';
import homeMaskedDoctors from '../assets/home-maskeddoctors.jpg';
import update1 from '../assets/home-latestupdate1.png';
import update2 from '../assets/home-latestupdates2.png';
import update3 from '../assets/home-latestupdate3.png';
import update4 from '../assets/home-latestupdate4.png';
import homePhones from '../assets/home-phones.png';

function Home() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      {/* Hero Section with Phone Images */}
      <section style={{
          padding: '4rem 2rem',
          background: '#f8f9fa'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ width: '40%' }}>
              <img src={homePhones} alt="Phone Mockups" style={{ maxWidth: '100%' }} />
            </div>
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
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>+500</h2>
            <p>User satisfaction</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>+40</h2>
            <p>Project completed</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>+1</h2>
            <p>years in existence</p>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      <section style={{ padding: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Strategy Section */}
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}> 
                <img 
                  src={homeArrow} 
                  alt="Strategy and Optimization" 
                  style={{ 
                    width: '30%',
                    borderRadius: '8px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    color: '#ff0000', 
                    marginBottom: '1rem',
                    textAlign: 'left'  
                  }}>
                    01. Strategy and Optimization
                  </h3>
                  <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                    At RHIPFactory, we specialize in developing comprehensive strategic solutions 
                    that drive business growth. Our team of experts analyzes market trends, 
                    identifies opportunities, and creates optimized pathways for success. 
                    We focus on delivering measurable results through data-driven strategies 
                    and innovative approaches to business challenges.
                  </p>
                  <button style={{
                    backgroundColor: '#002C54',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '4px',
                    marginTop: '1rem'
                  }}>
                    Read More
                  </button>
                </div>
              </div>
            </div>

          {/* Technology Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#ff0000', marginBottom: '1rem' }}>
              02. Technology and Innovation
            </h3>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <p>Leveraging cutting-edge technology, we create innovative solutions 
                    that transform businesses. Our team combines technical expertise 
                    with creative thinking to deliver state-of-the-art applications 
                    and systems that drive digital transformation and growth.</p>
                <button style={{
                  backgroundColor: '#002C54',
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
                src={homeBigspark} 
                alt="Technology and Innovation" 
                style={{ 
                  width: '30%', 
                  borderRadius: '8px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Manufacturing Section */}
          <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}> 
                <img 
                  src={homeMaskedDoctors} 
                  alt="Groundbreaking infrastructure" 
                  style={{ 
                    width: '30%',
                    borderRadius: '8px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    color: '#ff0000', 
                    marginBottom: '1rem',
                    textAlign: 'left'  
                  }}>
                    03. Groundbreaking Infrastructure
                  </h3>
                  <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                    At RHIPFactory, we specialize in developing comprehensive strategic solutions 
                    that drive business growth. Our team of experts analyzes market trends, 
                    identifies opportunities, and creates optimized pathways for success. 
                    We focus on delivering measurable results through data-driven strategies 
                    and innovative approaches to business challenges.
                  </p>
                  <button style={{
                    backgroundColor: '#002C54',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '4px',
                    marginTop: '1rem'
                  }}>
                    Read More
                  </button>
                </div>
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
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img 
                  src={update1}
                  alt="Update 1"
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1rem' }}>
                  <h4 style={{color: '#ff0000'}}>BuildHealth4Africa Hackathon</h4>
                  <p>Short description for Update 1...</p>
                </div>
              </div>
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img 
                  src={update2}
                  alt="Innovation in Africa"
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1rem' }}>
                  <h4 style={{color: '#ff0000'}}>Innovation in Africa</h4>
                  <p>Short description for Update 2...</p>
                </div>
              </div>
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img 
                  src={update3}
                  alt="Update 3"
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1rem' }}>
                  <h4 style={{color: '#ff0000'}}>Connected Africa Summit 2024</h4>
                  <p>Short description for Update 3...</p>
                </div>
              </div>
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img 
                  src={update4}
                  alt="Update 4"
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1rem' }}>
                  <h4 style={{color: '#ff0000'}}>Connected Africa Summit 2024</h4>
                  <p>Short description for Update 4...</p>
                </div>
              </div>
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