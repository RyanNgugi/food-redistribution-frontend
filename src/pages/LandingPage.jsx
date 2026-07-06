import { useState } from 'react'

function LandingPage() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', color: '#283618', backgroundColor: '#fefae0' }}>

      {/* Hero Section */}
      <div style={{
        backgroundImage: 'url(/src/assets/janilson-furtado-QADhoo32VrA-unsplash.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '40px 20px'
      }}>
        <div style={{ backgroundColor: 'rgba(40,54,24,0.7)', padding: '50px 40px', borderRadius: '12px', maxWidth: '700px' }}>
          <h1 style={{ fontSize: '52px', margin: '0 0 15px 0', lineHeight: '1.2', color: '#fefae0' }}>
            Fighting Food Waste.<br />Feeding Kenya.
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '30px', color: '#dda15e' }}>
            WasteNot KE connects restaurants, events and households with charities and farms across Kenya to redistribute surplus food.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/register" style={{ backgroundColor: '#dda15e', color: '#283618', padding: '14px 30px', borderRadius: '6px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }}>
              Join WasteNot KE
            </a>
            <a href="/listings" style={{ backgroundColor: '#fefae0', color: '#606c38', padding: '14px 30px', borderRadius: '6px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }}>
              Browse Listings
            </a>
          </div>
        </div>
      </div>

      {/* Who Are We */}
      <div style={{ padding: '80px 40px', backgroundColor: '#fefae0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
        <div style={{ maxWidth: '500px' }}>
          <p style={{ color: '#dda15e', fontWeight: '600', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>Who We Are</p>
          <h2 style={{ fontSize: '36px', color: '#606c38', margin: '10px 0 20px 0' }}>A Platform Built for Kenya's Food Crisis</h2>
          <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#555' }}>
            WasteNot KE is a web-based food redistribution platform that bridges the gap between food abundance and food poverty across Kenya. Every day, restaurants, hotels, and event organizers discard tonnes of surplus food while millions of Kenyans go hungry.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#555', marginTop: '15px' }}>
            We believe no food should go to waste when someone needs it. Our platform makes it easy for donors to post surplus food, and for charities and farms to claim it — all in one place.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=700"
            alt="Food distribution"
            style={{ width: '500px', maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
          />
        </div>
      </div>

      {/* Make An Impact */}
      <div style={{ padding: '80px 40px', backgroundColor: '#606c38', textAlign: 'center' }}>
        <p style={{ color: '#dda15e', fontWeight: '600', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>Make An Impact</p>
        <h2 style={{ fontSize: '36px', color: '#fefae0', margin: '10px 0 15px 0' }}>How You Can Help</h2>
        <p style={{ fontSize: '17px', color: '#d4d4aa', maxWidth: '600px', margin: '0 auto 50px auto', lineHeight: '1.8' }}>
          Whether you have food to give or need to receive it, WasteNot KE gives you the tools to make a real difference in your community.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {[
            {
              title: 'Donate Food',
              desc: 'Restaurants and event organizers post their surplus food instead of throwing it away',
              bg: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60',
              more: 'As a donor you simply log in, upload a photo of your surplus food, describe it, select the quantity and classify it as edible or inedible. Edible food goes directly to charities feeding vulnerable communities across Kenya. Inedible organic waste is directed to farms for composting or animal feed. This reduces your waste disposal costs, helps your community and keeps food out of landfills. It takes less than 5 minutes to post a listing.'
            },
            {
              title: 'Feed Communities',
              desc: 'Charities and NGOs claim edible food and distribute it to vulnerable communities across Kenya',
              bg: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=60', // Adjusted fully production-ready resource for children sharing nutritious food
              more: 'As a charity or NGO you can browse all available edible food listings in real time, filter by type or location and claim what your organization needs. Once you claim a listing you contact the donor directly to arrange pickup. This gives your organization free access to nutritious food that would otherwise go to waste, helping you serve more people without increasing your budget.'
            },
            {
              title: 'Support Farms',
              desc: 'Farms receive inedible organic waste for composting and animal feed, reducing landfill pressure',
              bg: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=60',
              more: 'As a farm you can browse listings classified as inedible organic waste such as vegetable peels, fruit scraps and other non-consumable food matter. This waste becomes valuable input for your composting or animal feed operations at no cost. It reduces your input costs, improves soil health and supports a circular food economy that benefits all of Kenya.'
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: '#fefae0',
                borderRadius: '12px',
                padding: '35px 25px',
                maxWidth: '260px',
                boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                textAlign: 'left',
                backgroundImage: `linear-gradient(rgba(254, 250, 224, 0.65), rgba(254, 250, 224, 0.7)), url(${item.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              onClick={() => setExpanded(expanded === item.title ? null : item.title)}
            >
              <h3 style={{ color: '#606c38', marginBottom: '10px', textAlign: 'center', marginTop: '15px' }}>{item.title}</h3>
              <p style={{ color: '#222', fontSize: '15px', lineHeight: '1.7', textAlign: 'center', fontWeight: '500' }}>{item.desc}</p>
              {expanded === item.title && (
                <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #606c38' }}>
                  <p style={{ color: '#283618', fontSize: '14px', lineHeight: '1.8', fontWeight: '400' }}>{item.more}</p>
                </div>
              )}
              <p style={{ color: '#606c38', fontSize: '13px', fontWeight: '600', textAlign: 'center', marginTop: '12px' }}>
                {expanded === item.title ? 'Show less ▲' : 'Learn more ▼'}
              </p>
            </div>
          ))}
        </div>
        <a href="/register" style={{ display: 'inline-block', backgroundColor: '#dda15e', color: '#283618', padding: '12px 30px', borderRadius: '6px', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold' }}>
          Learn More — Get Started
        </a>
      </div>

      {/* How To Get Started */}
      <div style={{ padding: '80px 40px', backgroundColor: '#fefae0', textAlign: 'center' }}>
        <p style={{ color: '#dda15e', fontWeight: '600', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>Get Started</p>
        <h2 style={{ fontSize: '36px', color: '#606c38', margin: '10px 0 15px 0' }}>Simple Steps to Join</h2>
        <p style={{ fontSize: '17px', color: '#555', maxWidth: '600px', margin: '0 auto 50px auto', lineHeight: '1.8' }}>
          Getting started with WasteNot KE takes less than 5 minutes. Here is how:
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {[
            { step: '1', title: 'Create an Account', desc: 'Sign up as a Donor, Charity, or Farm. It is completely free.' },
            { step: '2', title: 'Post or Browse', desc: 'Donors post surplus food listings. Recipients browse and filter available food.' },
            { step: '3', title: 'Claim and Collect', desc: 'Recipients claim a listing and contact the donor directly to arrange pickup.' },
            { step: '4', title: 'Make an Impact', desc: 'Food reaches those who need it instead of ending up in a landfill.' },
          ].map((item) => (
            <div key={item.step} style={{ backgroundColor: '#e9edd0', borderRadius: '12px', padding: '30px 20px', maxWidth: '200px' }}>
              <div style={{ backgroundColor: '#dda15e', color: '#283618', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 'bold', margin: '0 auto 15px auto' }}>
                {item.step}
              </div>
              <h3 style={{ color: '#606c38', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.7' }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <a href="/register" style={{ display: 'inline-block', marginTop: '40px', backgroundColor: '#dda15e', color: '#283618', padding: '14px 35px', borderRadius: '6px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }}>
          Get Started Today
        </a>
      </div>

      {/* Benefits To Kenya */}
      <div style={{
        backgroundImage: 'url(/src/assets/smiljana-peters-0lr3tn2uVQg-unsplash.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        textAlign: 'center',
        padding: '80px 40px'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(40,54,24,0.85)' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#dda15e', fontWeight: '600', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>Impact</p>
          <h2 style={{ fontSize: '36px', margin: '10px 0 15px 0', color: '#fefae0' }}>Why Kenya Needs WasteNot KE</h2>
          <p style={{ fontSize: '17px', color: '#d4d4aa', maxWidth: '600px', margin: '0 auto 50px auto', lineHeight: '1.8' }}>
            Kenya faces a dual crisis of food waste and food insecurity. WasteNot KE tackles both simultaneously, creating a more sustainable and equitable food system across the country.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap', marginBottom: '50px' }}>
            {[
              { stat: '36%', desc: 'Of Kenyans are food insecure' },
              { stat: '1.3B', desc: 'Tonnes of food wasted globally each year' },
              { stat: '64%', desc: 'Of Kenya recoverable waste is food' },
              { stat: '58%', desc: 'Of municipal solid waste in Kenya is organic' },
            ].map((item) => (
              <div key={item.stat}>
                <h1 style={{ fontSize: '52px', margin: 0, color: '#dda15e' }}>{item.stat}</h1>
                <p style={{ color: '#d4d4aa', fontSize: '16px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#fefae0' }}>
              By redirecting surplus food to charities and farms, WasteNot KE reduces landfill pressure, cuts greenhouse gas emissions, improves food security, and supports small scale agricultural productivity across Kenya.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#283618', borderTop: '1px solid #606c38', padding: '50px 40px 20px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '30px', maxWidth: '1000px', margin: '0 auto 40px auto' }}>
          <div style={{ maxWidth: '300px' }}>
            <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 'bold', fontSize: '28px', color: '#fefae0' }}>
              WasteN<span style={{ color: '#dda15e' }}>♻</span>t
            </span>
            <p style={{ color: '#d4d4aa', marginTop: '12px', lineHeight: '1.7', fontSize: '14px' }}>
              Making Kenya's food system more sustainable, one listing at a time.
            </p>
          </div>
          <div>
            <h4 style={{ color: '#fefae0', marginBottom: '15px', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="/listings" style={{ color: '#d4d4aa', textDecoration: 'none', fontSize: '14px' }}>Browse Listings</a>
              <a href="/donor-dashboard" style={{ color: '#d4d4aa', textDecoration: 'none', fontSize: '14px' }}>Post Food</a>
              <a href="/register" style={{ color: '#d4d4aa', textDecoration: 'none', fontSize: '14px' }}>Join Us</a>
              <a href="/login" style={{ color: '#d4d4aa', textDecoration: 'none', fontSize: '14px' }}>Login</a>
            </div>
          </div>
          <div>
            <h4 style={{ color: '#fefae0', marginBottom: '15px', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="/privacy-policy" style={{ color: '#d4d4aa', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</a>
              <a href="/privacy-policy" style={{ color: '#d4d4aa', textDecoration: 'none', fontSize: '14px' }}>Cookie Policy</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #606c38', paddingTop: '20px', textAlign: 'center' }}>
          <p style={{ color: '#888', fontSize: '13px', margin: 0 }}>© 2026 WasteNot KE. All rights reserved.</p>
        </div>
      </div>

    </div>
  )
}

export default LandingPage