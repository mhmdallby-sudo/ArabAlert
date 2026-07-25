import React from 'react';
import './ColorManager.css';

const ColorManager = ({ colors, setColors }) => {
  const handleColorChange = (key, value) => {
    setColors(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const colorOptions = [
    { key: 'primary', label: 'اللون الأساسي' },
    { key: 'secondary', label: 'اللون الثانوي' },
    { key: 'background', label: 'خلفية التنبيه' },
    { key: 'text', label: 'لون النص' },
    { key: 'accent', label: 'لون التمييز' }
  ];

  return (
    <div className="color-manager">
      <h1>إدارة الألوان</h1>
      <p className="subtitle">خصص الألوان لإنشاء مظهر فريد</p>

      <div className="colors-grid">
        {colorOptions.map(option => (
          <div key={option.key} className="color-item">
            <label>{option.label}</label>
            <div className="color-input-wrapper">
              <input
                type="color"
                value={colors[option.key]}
                onChange={(e) => handleColorChange(option.key, e.target.value)}
                className="color-picker"
              />
              <div
                className="color-preview"
                style={{ backgroundColor: colors[option.key] }}
              />
              <input
                type="text"
                value={colors[option.key]}
                onChange={(e) => handleColorChange(option.key, e.target.value)}
                className="color-code"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="color-preview-section">
        <h3>معاينة الألوان</h3>
        <div
          className="preview-alert"
          style={{
            background: `linear-gradient(135deg, ${colors.background}, ${colors.secondary})`,
            borderColor: colors.primary
          }}
        >
          <h2 style={{ color: colors.primary }}>نموذج التنبيه</h2>
          <p style={{ color: colors.text }}>هذا نموذج لكيف ستبدو ألوانك المختارة</p>
          <span style={{ color: colors.accent }} className="accent-text">✨ تميز بألوانك الفريدة</span>
        </div>
      </div>

      <div className="color-presets">
        <h3>نماذج مسبقة</h3>
        <div className="presets-grid">
          <button
            className="preset-btn"
            onClick={() => setColors({
              primary: '#ff006e',
              secondary: '#8338ec',
              background: '#1a1a2e',
              text: '#ffffff',
              accent: '#ffbe0b'
            })}
          >
            <div className="preset-colors">
              <div style={{ background: '#ff006e' }}></div>
              <div style={{ background: '#8338ec' }}></div>
              <div style={{ background: '#ffbe0b' }}></div>
            </div>
            <span>الوردي والبنفسجي</span>
          </button>
          <button
            className="preset-btn"
            onClick={() => setColors({
              primary: '#00d9ff',
              secondary: '#0099ff',
              background: '#001a33',
              text: '#ffffff',
              accent: '#00ff88'
            })}
          >
            <div className="preset-colors">
              <div style={{ background: '#00d9ff' }}></div>
              <div style={{ background: '#0099ff' }}></div>
              <div style={{ background: '#00ff88' }}></div>
            </div>
            <span>السماوي والأخضر</span>
          </button>
          <button
            className="preset-btn"
            onClick={() => setColors({
              primary: '#ff4444',
              secondary: '#ffaa00',
              background: '#2a0000',
              text: '#ffffff',
              accent: '#ffff00'
            })}
          >
            <div className="preset-colors">
              <div style={{ background: '#ff4444' }}></div>
              <div style={{ background: '#ffaa00' }}></div>
              <div style={{ background: '#ffff00' }}></div>
            </div>
            <span>الأحمر والأصفر</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorManager;