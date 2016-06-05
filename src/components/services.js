import React, { Component } from 'react';

const Services = () => {
  return (
    <div>
      <div className='service col-md-12 col-sm-12'>
        <div className='service_left col-md-6 col-sm-12'>
          <h2>HAIR CUT</h2>
            <div className='serviceContent'>
              <p>Men - $14 & up</p>
              <p>Women - $25 & up</p>
              <p>Children - $12 & up</p>
              <p>Bang Trim - $10</p>
            </div>
            <hr />
          <h2>STYLING</h2>
            <div className='serviceContent'>
              <p>Wash - $5</p>
              <p>Conditioning Treatment - $10</p>
              <p>Blowout - $20 & up</p>
              <p>Blowout + Flat Iron - $25 & up</p>
              <p>Upstyle (curl) - $45 & up</p>
            </div>
            <hr />
          <h2>HAIR COLOR</h2>
            <div className='serviceContent'>
              <p>Touch Up - $40 & up</p>
              <p>Partial Highlights - $55 & up</p>
              <p>Full Highlists - $85 & up</p>
              <p>Full Color - $55 & up</p>
              <p>Ombre - $110 & up</p>
              <p>Balayage $110 & up</p>
              <p>Corrective Color - TBD</p>
            </div>
        </div>
        <div className='service_right col-md-6 col-sm-12'>
          <h2>HAIR TEXTURE</h2>
            <div className='serviceContent'>
              <p>Perm / Wave - $75 & up</p>
              <p>Keratin Straightening Therapy - $250 & up</p>
            </div>
            <hr />
          <h2>SPECIALTIES</h2>
            <div className='serviceContent'>
              <p>Make-up - $55 & up</p>
              <p>Bridal Services - TBD</p>
              <p>Eyelash Extensions - TBD</p>
              <p>Hair Extensions -TBD</p>
              <p>Permanent Make-up (Brows, Eyeliner, Lip) - TBD</p>
            </div>
            <hr />
          <h2>WAXING</h2>
            <div className='serviceContent'>
              <p>Eyebrows - $10</p>
              <p>Lip - $8</p>
              <p>Face - $25 & up</p>
            </div>
            <hr />
          <h2>SKINCARE</h2>
            <div className='serviceContent'>
              <p>Microdermabrasion - $70</p>
              <p>Facial - $60 & up</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
