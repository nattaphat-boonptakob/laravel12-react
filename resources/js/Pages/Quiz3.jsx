import React, { useState } from 'react';
import { Head } from '@inertiajs/react';

export default function Quiz3() {
    // 1. กำหนด State ให้กับ 3 เมนู
    const [padThai, setPadThai] = useState(0);
    const [krapow, setKrapow] = useState(0);
    const [somTum, setSomTum] = useState(0);

    // 2. คำนวณคะแนนรวมทั้งหมด
    const totalVotes = padThai + krapow + somTum;

    // 3. ฟังก์ชันหาเมนูที่คะแนนนำอยู่
    const getWinner = () => {
        if (totalVotes === 0) return 'ยังไม่มีใครโหวตเลยจ้า 🥺';
        const maxVote = Math.max(padThai, krapow, somTum);
        let winners = [];
        if (padThai === maxVote) winners.push('ผัดไทยกุ้งสด 🍝');
        if (krapow === maxVote) winners.push('ข้าวกะเพราหมูกรอบ 🍛');
        if (somTum === maxVote) winners.push('ส้มตำไก่ย่าง 🌶️');
        return winners.join(' และ ');
    };

    // 4. ฟังก์ชันรีเซ็ตคะแนน
    const resetVotes = () => {
        setPadThai(0);
        setKrapow(0);
        setSomTum(0);
    };

    return (
        <div className="min-h-screen bg-pink-50 py-10 font-sans">
            <Head title="Lunch Voting" />
            
            <div className="max-w-4xl mx-auto px-4">
                {/* ส่วนหัวของเว็บ */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 text-center border-t-8 border-pink-400">
                    <h1 className="text-4xl font-extrabold mb-4 text-pink-500 tracking-wide">
                        วันนี้กินอะไรดี? 🤔💭
                    </h1>
                    <p className="text-gray-500 text-lg">ระบบโหวตเมนูอาหารกลางวันแบบ Real-time</p>
                </div>

                {/* ส่วนแสดงสรุปผลโหวต */}
                <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-2xl p-6 mb-8 shadow-md flex justify-between items-center border border-pink-200">
                    <div>
                        <p className="text-gray-700 font-semibold mb-1">👑 เมนูที่นำอยู่ตอนนี้:</p>
                        <p className="text-2xl font-bold text-pink-600">{getWinner()}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-700 font-semibold mb-1">📊 ผู้โหวตทั้งหมด</p>
                        <p className="text-3xl font-black text-orange-500">{totalVotes} <span className="text-lg">คน</span></p>
                    </div>
                </div>

                {/* การ์ดเมนูอาหาร */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* เมนู 1 */}
                    <div className="bg-white border-2 border-pink-100 p-6 rounded-2xl shadow-sm text-center hover:shadow-xl transition-shadow">
                        <div className="text-6xl mb-4">🍝</div>
                        <h2 className="text-xl font-bold mb-2 text-gray-800">ผัดไทยกุ้งสด</h2>
                        <p className="text-3xl font-black text-pink-500 mb-4">{padThai}</p>
                        <button
                            onClick={() => setPadThai(padThai + 1)}
                            className="w-full bg-pink-400 text-white font-semibold py-3 rounded-xl hover:bg-pink-500 active:scale-95 transition-all"
                        >
                            +1 โหวต
                        </button>
                    </div>

                    {/* เมนู 2 */}
                    <div className="bg-white border-2 border-orange-100 p-6 rounded-2xl shadow-sm text-center hover:shadow-xl transition-shadow">
                        <div className="text-6xl mb-4">🍛</div>
                        <h2 className="text-xl font-bold mb-2 text-gray-800">ข้าวกะเพราหมูกรอบ</h2>
                        <p className="text-3xl font-black text-orange-500 mb-4">{krapow}</p>
                        <button
                            onClick={() => setKrapow(krapow + 1)}
                            className="w-full bg-orange-400 text-white font-semibold py-3 rounded-xl hover:bg-orange-500 active:scale-95 transition-all"
                        >
                            +1 โหวต
                        </button>
                    </div>

                    {/* เมนู 3 */}
                    <div className="bg-white border-2 border-red-100 p-6 rounded-2xl shadow-sm text-center hover:shadow-xl transition-shadow">
                        <div className="text-6xl mb-4">🌶️</div>
                        <h2 className="text-xl font-bold mb-2 text-gray-800">ส้มตำไก่ย่าง</h2>
                        <p className="text-3xl font-black text-red-500 mb-4">{somTum}</p>
                        <button
                            onClick={() => setSomTum(somTum + 1)}
                            className="w-full bg-red-400 text-white font-semibold py-3 rounded-xl hover:bg-red-500 active:scale-95 transition-all"
                        >
                            +1 โหวต
                        </button>
                    </div>
                </div>

                {/* ปุ่มรีเซ็ต */}
                <div className="text-center">
                    <button
                        onClick={resetVotes}
                        className="bg-gray-200 text-gray-600 px-8 py-3 rounded-full font-bold hover:bg-gray-300 transition-colors shadow-sm"
                    >
                        🔄 ล้างคะแนนโหวตทั้งหมด
                    </button>
                </div>
            </div>
        </div>
    );
}