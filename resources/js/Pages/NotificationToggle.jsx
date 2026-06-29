import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function NotificationToggle({ initialStatus = false }) {
    // 1. ประกาศ React State เพื่อเก็บสถานะเปิด/ปิดสวิตช์แจ้งเตือน
    const [isEnabled, setIsEnabled] = useState(initialStatus);

    // 2. ฟังก์ชันเมื่อกดคลิกเปลี่ยนสถานะ
    const handleToggle = () => {
        const nextStatus = !isEnabled;
        
        // อัปเดตสถานะใน React ทันทีเพื่อให้ UI แสดงผลเปลี่ยนสี/ขยับปุ่มทันที (Re-render)
        setIsEnabled(nextStatus);

        // 3. ส่งข้อมูลสถานะปัจจุบันผ่าน Inertia ไปบันทึกฝั่ง Laravel 12 Backend
        router.post('/profile/notifications', {
            is_enabled: nextStatus
        }, {
            preserveScroll: true, // ป้องกันไม่ให้หน้าเว็บเด้งกลับไปด้านบน
        });
    };

    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', maxWidth: '400px', margin: '20px auto' }}>
            <h3 style={{ margin: '0 0 15px 0', fontFamily: 'sans-serif' }}>🔔 ตั้งค่าการแจ้งเตือน</h3>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'between' }}>
                <span style={{ fontSize: '16px' }}>
                    สถานะปัจจุบัน: <strong>{isEnabled ? 'เปิดใช้งาน' : 'ปิดใช้งาน'}</strong>
                </span>

                {/* ปุ่มสวิตช์จำลองที่เปลี่ยนสีและสไตล์ตามค่าของ State (isEnabled) */}
                <button 
                    onClick={handleToggle}
                    style={{
                        marginLeft: '20px',
                        padding: '10px 20px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        borderRadius: '20px',
                        border: 'none',
                        color: '#fff',
                        backgroundColor: isEnabled ? '#22c55e' : '#ef4444', // เปลี่ยนสีตาม State
                        transition: 'background-color 0.3s ease'
                    }}
                >
                    {isEnabled ? 'กดเพื่อปิด' : 'กดเพื่อเปิด'}
                </button>
            </div>
        </div>
    );
}