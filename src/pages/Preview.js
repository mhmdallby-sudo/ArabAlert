import React, { useState } from 'react';
import './Preview.css';

const Preview = ({ alertSettings, colors, fonts }) => {
  const [isDonationMode, setIsDonationMode] = useState(false);

  const triggerAlert = () => {
    const alertElement = document.querySelector('.alert-preview-box');
    if (alertElement) {
      alertElement.style.animation = 'none';
      setTimeout(() => {
        alertElement.style.animation = '';
      }, 10);
    }
  };

  return (
    <div className="preview-page">
      <h1>معاينة التنبيهات</h1>
      <p className="subtitle">شاهد كيف ستبدو تنبيهاتك في البث المباشر</p>

      <div className="preview-controls">
        <button className="btn btn-primary" onClick={triggerAlert}>
          🔔 عرض التنبيه
        </button>
        <button
          className={`btn ${isDonationMode ? 'btn-secondary' : 'btn-outline'}`}
          onClick={() => setIsDonationMode(!isDonationMode)}
        >
          {isDonationMode ? '🎁 وضع التبرع مفعل' : '🎁 فعل وضع التبرع'}
        </button>
      </div>

      <div className="preview-area">
        <div
          className={`alert-preview-box animation-${alertSettings.animation}`}
          style={{
            background: `linear-gradient(135deg, ${colors.background}, ${colors.secondary})`,
            borderColor: colors.primary,
            fontFamily: fonts.title
          }}
        >
          <h2 style={{
            color: colors.primary,
            fontSize: `${fonts.titleSize}px`,
            fontFamily: fonts.title
          }}>
            {alertSettings.title}
          </h2>
          <p style={{
            color: colors.text,
            fontSize: `${fonts.messageSize}px`,
            fontFamily: fonts.message
          }}>
            {alertSettings.message.replace('{name}', 'أحمد')}
          </p>
          <span style={{ color: colors.accent }} className="close-btn">×</span>
        </div>

        {isDonationMode && (
          <div className="donation-effect">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="donation-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`
                }}
              >
                🪙
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="preview-info">
        <h3>معلومات المعاينة</h3>
        <div className="info-grid">
          <div className="info-item">
            <label>موقع التنبيه:</label>
            <span>{alertSettings.position}</span>
          </div>
          <div className="info-item">
            <label>المدة:</label>
            <span>{alertSettings.duration} ثانية</span>
          </div>
          <div className="info-item">
            <label>نوع الرسم:</label>
            <span>{alertSettings.animation}</span>
          </div>
          <div className="info-item">
            <label>الصوت:</label>
            <span>{alertSettings.sound ? 'مفعل' : 'معطل'}</span>
          </div>
          <div className="info-item">
            <label>اللون الأساسي:</label>
            <div className="color-square" style={{ backgroundColor: colors.primary }}></div>
          </div>
          <div className="info-item">
            <label>خط العنوان:</label>
            <span>{fonts.title}</span>
          </div>
        </div>
      </div>

      <div className="preview-tips">
        <h3>💡 نصائح</h3>
        <ul>
          <li>اختبر التنبيهات على جهازك قبل استخدامها في البث المباشر</li>
          <li>تأكد من أن الألوان واضحة وسهلة القراءة</li>
          <li>استخدم خطوط كبيرة بما يكفي حتى يراها المشاهدون</li>
          <li>جرب مدة التنبيه المختلفة لاختيار الأفضل</li>
          <li>استخدم الأصوات بحذر حتى لا تزعج المشاهدين</li>
        </ul>
      </div>
    </div>
  );
};

export default Preview;