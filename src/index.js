/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import './index.css'

export default function Modal ({
  children = null,
  showModal = false,
  closeModal,
  backgroundColor = 'white',
  scroll = false,
  rounded = 4,
  padding = 10,
  smooth = true,
  width = 600
}) {
  const [visible, setVisible] = useState(false)
  const [fadeDirection, setFadeDirection] = useState(false)

  const modalContentStyle = {
    backgroundColor,
    borderRadius: rounded + 'px',
    padding: padding + 'px'
  }

  useEffect(() => {
    if (showModal) {
      setVisible(true)
      setFadeDirection(true)
      document.body.style.overflow = 'hidden'
    } else if (!showModal && visible) {
      setFadeDirection(false)
      const timer = setTimeout(() => {
        setVisible(false)
      }, smooth ? 300 : 0)

      return () => clearTimeout(timer)
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showModal, visible])

  useEffect(() => {
    if (showModal && !scroll) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showModal])

  const modalFrameAnimationStyle = {
    animation: smooth ? (fadeDirection ? 'fadeIn 0.3s' : 'fadeOut 0.3s') : ''
  }

  const modalFrameDisplay = {
    display: visible ? 'flex' : 'none'
  }

  return (
    <>
    <div className='modalFrame modalBg' style={{ ...modalFrameAnimationStyle, ...modalFrameDisplay }} onClick={() => {
      closeModal()
    }}></div>
    <div className='modalFrame noClick' style={{ ...modalFrameAnimationStyle, ...modalFrameDisplay }}>
      <div className='modalContent' style={{ ...modalContentStyle, ...{ width: width + 'px', maxWidth: '100vw' } }}>
        {!children
          ? (
            <div>
              <div className='headerFrame'>
                <div className='iconFrame' onClick={() => {
                  closeModal()
                }}>
                  <svg fill="none" viewBox="0 0 15 15" height="100%" width="100%">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className='bodyFrame'>
                <p>Lorem  ipsum dolor</p>
              </div>
            </div>
            )
          : children}
      </div>
    </div>
    </>
  )
}
