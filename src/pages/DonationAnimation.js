import React from 'react';
import './DonationAnimation.css';

const DonationAnimation = ({ donation, setDonation }) => {
  const handleChange = (key, value) => {
    setDonation(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const animationTypes = [
    { value: 'coins', label: 'عملات معدنية' },
    { value: 'hearts', label: 'قلوب' },
    { value: 'stars', label: 'نجوم' },
    { value: 'confetti', label: 'ألعاب نارية' },
    { value: 'fireworks', label: 'الألعاب النارية' },
    { value: 'rain', label: 'مطر' }
  ];

  const speeds = ['بطيء', 'عادي', 'سريع'];

  return (
    <div className="donation-animation">
      <h1>رسوم التبرعات المتحركة</h1>
      <p className="subtitle">خصص التأثيرات البصرية للتبرعات</p>

      <div className="animation-settings">
        <div className="setting-group">
          <label>نوع الرسم المتحرك</label>
          <div className="animation-options">
            {animationTypes.map(type => (
              <button
                key={type.value}
                className={`animation-btn ${donation.animationType === type.value ? 'active' : ''}`}
                onClick={() => handleChange('animationType', type.value)}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <div className="setting-group">
          <label>السرعة</label>
          <select
            value={donation.speed}
            onChange={(e) => handleChange('speed', e.target.value)}
            className="speed-select"
          >
            {speeds.map((speed, idx) => (
              <option key={idx} value={speed}>{speed}</option>
            ))}
          </select>
        </div>

        <div className="setting-group">
          <label>عدد الجزيئات</label>
          <input
            type="range"
            min="5"
            max="100"
            value={donation.particleCount}
            onChange={(e) => handleChange('particleCount', parseInt(e.target.value))}
            className="particle-slider"
          />
          <span className="particle-value">{donation.particleCount} جزيء</span>
        </div>

        <div className="setting-group">
          <label>الصوت</label>
          <select
            value={donation.sound ? 'on' : 'off'}
            onChange={(e) => handleChange('sound', e.target.value === 'on')}
            className="sound-select"
          >
            <option value="on">تشغيل</option>
            <option value="off">إيقاف</option>
          </select>
        </div>
      </div>

      <div className="animation-preview">
        <h3>معاينة الرسم المتحرك</h3>
        <div className="preview-container">
          <div className={`animation-demo animation-${donation.animationType}`}>
            <div className="particles">
              {Array.from({ length: Math.min(donation.particleCount, 20) }).map((_, i) => (
                <div key={i} className="particle" style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`
                }}>
                  {donation.animationType === 'coins' && '🪙'}
                  {donation.animationType === 'hearts' && '❤️'}
                  {donation.animationType === 'stars' && '⭐'}
                  {donation.animationType === 'confetti' && '🎉'}
                  {donation.animationType === 'fireworks' && '🎆'}
                  {donation.animationType === 'rain' && '💧'}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="preview-info">السرعة: {donation.speed}</p>
      </div>
    </div>
  );
};

export default DonationAnimation;