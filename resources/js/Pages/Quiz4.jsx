import React from 'react';

export default function Quiz4({ books }) {
    return (
        <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', color: '#ff6699' }}>✨ รายการหนังสือของพี่นานะ (Quiz 4) ✨</h1>
            
            <table border="1" cellPadding="12" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <thead>
                    <tr style={{ backgroundColor: '#ffe6f0', color: '#333' }}>
                        <th>ID</th>
                        <th>ชื่อหนังสือ (Title)</th>
                        <th>ผู้แต่ง (Author)</th>
                        <th>หมวดหมู่ (Category)</th>
                        <th>ราคา (Price)</th>
                        <th>จำนวน (Stock)</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id} style={{ textAlign: 'center', backgroundColor: '#fff' }}>
                            <td>{book.id}</td>
                            <td style={{ textAlign: 'left' }}>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.category}</td>
                            <td>{book.price} ฿</td>
                            <td>{book.stock} เล่ม</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}