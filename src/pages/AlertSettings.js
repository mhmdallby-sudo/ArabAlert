import React from 'react';
import './AlertSettings.css';

const AlertSettings = ({ alertSettings, setAlertSettings }) => {
  const handleChange = (key, value) => {
    setAlertSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="alert-settings">
      <h1>إعدادات التنبيهات</h1>
      
      <div className="settings-grid">
        <div className="setting-group">
          <label>عنوان التنبيه</label>
          <input
            type="text"
            value={alertSettings.title}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="أدخل عنوان التنبيه"
          />
        </div>

        <div className="setting-group">
          <label>رسالة التنبيه</label>
          <textarea
            value={alertSettings.message}
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder="أدخل رسالة التنبيه (استخدم {name} لاسم المتبرع)"
            rows="3"
          />
        </div>

        <div className="setting-group">
          <label>مدة التنبيه (ثانية)</label>
          <input
            type="number"
            value={alertSettings.duration}
            onChange={(e) => handleChange('duration', parseInt(e.target.value))}
            min="1"
            max="60"
          />
        </div>

        <div className="setting-group">
          <label>الصوت</label>
          <select
            value={alertSettings.sound ? 'on' : 'off'}
            onChange={(e) => handleChange('sound', e.target.value === 'on')}
          >
            <option value="on">تشغيل</option>
            <option value="off">إيقاف</option>
          </select>
        </div>

        <div className="setting-group">
          <label>نوع الرسم المتحرك</label>
          <select
            value={alertSettings.animation}
            onChange={(e) => handleChange('animation', e.target.value)}
          >
            <option value="popIn">انبثاق</option>
            <option value="slideIn">انزلاق</option>
            <option value="bounce">ارتداد</option>
            <option value="glow">توهج</option>
          </select>
        </div>

        <div className="setting-group">
          <label>موقع التنبيه</label>
          <select
            value={alertSettings.position}
            onChange={(e) => handleChange('position', e.target.value)}
          >
            <option value="top-right">أعلى يمين</option>
            <option value="top-left">أعلى يسار</option>
            <option value="bottom-right">أسفل يمين</option>
            <option value="bottom-left">أسفل يسار</option>
            <option value="center">الوسط</option>
          </select>
        </div>
      </div>

      <div className="preview-box">
        <h3>معاينة التنبيه</h3>
        <div className={`alert-preview animation-${alertSettings.animation}`}>
          <h2>{alertSettings.title}</h2>
          <p>{alertSettings.message.replace('{name}', 'أحمد')}</p>
        </div>
      </div>
    </div>
  );
};

export default AlertSettings;