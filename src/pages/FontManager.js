import React from 'react';
import './FontManager.css';

const FontManager = ({ fonts, setFonts }) => {
  const handleChange = (key, value) => {
    setFonts(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const fontFamilies = ['Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana', 'Tahoma', 'Comic Sans MS'];

  return (
    <div className="font-manager">
      <h1>إدارة الخطوط</h1>
      <p className="subtitle">اختر الخطوط المناسبة لتنبيهاتك</p>

      <div className="fonts-grid">
        <div className="font-group">
          <h3>خط العنوان</h3>
          <select
            value={fonts.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="font-select"
          >
            {fontFamilies.map(font => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
          <div className="font-size-control">
            <label>حجم الخط</label>
            <input
              type="range"
              min="16"
              max="48"
              value={fonts.titleSize}
              onChange={(e) => handleChange('titleSize', parseInt(e.target.value))}
              className="font-slider"
            />
            <span className="size-value">{fonts.titleSize}px</span>
          </div>
          <div
            className="font-preview"
            style={{
              fontFamily: fonts.title,
              fontSize: `${fonts.titleSize}px`
            }}
          >
            معاينة العنوان
          </div>
        </div>

        <div className="font-group">
          <h3>خط الرسالة</h3>
          <select
            value={fonts.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className="font-select"
          >
            {fontFamilies.map(font => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
          <div className="font-size-control">
            <label>حجم الخط</label>
            <input
              type="range"
              min="12"
              max="32"
              value={fonts.messageSize}
              onChange={(e) => handleChange('messageSize', parseInt(e.target.value))}
              className="font-slider"
            />
            <span className="size-value">{fonts.messageSize}px</span>
          </div>
          <div
            className="font-preview"
            style={{
              fontFamily: fonts.message,
              fontSize: `${fonts.messageSize}px`
            }}
          >
            معاينة الرسالة
          </div>
        </div>
      </div>

      <div className="font-combined-preview">
        <h3>معاينة مدمجة</h3>
        <div className="combined-alert">
          <h2 style={{ fontFamily: fonts.title, fontSize: `${fonts.titleSize}px` }}>
            تبرع جديد!
          </h2>
          <p style={{ fontFamily: fonts.message, fontSize: `${fonts.messageSize}px` }}>
            شكراً على تبرعك السخي
          </p>
        </div>
      </div>
    </div>
  );
};

export default FontManager;