import React from 'react'
import Button from '../common/Button'
import './heroSection.css'

export const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
        <div className="flex absolute-center hero-claim-label">
            <div>
                pay credit card bill. earn guaranteed ₹200 back.
            </div>
            <div className="claim-anchor">
                claim now
            </div>
        </div>
        <div className="flex absolute-center flex-col hero-section max-width">
            <div className="hero-heading">
                rewards for paying credit card bills.
            </div>
            <div className="hero-subheading">
                Join 7.5M+ memebers who win rewards and cashbacks everyday
            </div>
            <Button buttonText="Download CRED" />
        </div>
    </div>
  )
}
