import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>لوحة التحكم</h1>
        <p>مرحباً بك في نظام إدارة التنبيهات ArabAlert</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🔔</div>
          <div className="stat-content">
            <h3>التنبيهات</h3>
            <p>إدارة إعدادات التنبيهات والرسائل</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎨</div>
          <div className="stat-content">
            <h3>الألوان</h3>
            <p>تخصيص الألوان والتصميم</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✍️</div>
          <div className="stat-content">
            <h3>الخطوط</h3>
            <p>اختيار وتخصيص الخطوط</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎁</div>
          <div className="stat-content">
            <h3>التبرعات</h3>
            <p>رسوم متحركة للتبرعات</p>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>المميزات الرئيسية</h2>
        <div className="features-list">
          <div className="feature">
            <span className="feature-number">1</span>
            <div className="feature-content">
              <h3>تنبيهات مخصصة</h3>
              <p>أضف تنبيهات فريدة مع رسائل وألوان مخصصة</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-number">2</span>
            <div className="feature-content">
              <h3>إدارة الصور والفيديو</h3>
              <p>استخدم صور وفيديوهات متحركة في التنبيهات</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-number">3</span>
            <div className="feature-content">
              <h3>رسوم متحركة</h3>
              <p>إضافة تأثيرات بصرية مذهلة عند التبرعات</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-number">4</span>
            <div className="feature-content">
              <h3>معاينة مباشرة</h3>
              <p>شاهد التغييرات فوراً قبل النشر</p>
            </div>
          </div>
        </div>
      </div>

      <div className="quick-start">
        <h2>البدء السريع</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">الخطوة 1</div>
            <p>اذهب إلى قسم إعدادات التنبيهات</p>
          </div>
          <div className="step">
            <div className="step-number">الخطوة 2</div>
            <p>خصص الألوان والخطوط حسب رغبتك</p>
          </div>
          <div className="step">
            <div className="step-number">الخطوة 3</div>
            <p>أضف رسوم متحركة للتبرعات</p>
          </div>
          <div className="step">
            <div className="step-number">الخطوة 4</div>
            <p>استخدم المعاينة لاختبار كل شيء</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;