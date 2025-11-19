import React, { useEffect, useState } from 'react';

const Table = () => {
    const [first, setfirst] = useState('');
    const [first1, setfirst1] = useState('');
    const [first2, setfirst2] = useState('');
    const [dd, setdd] = useState([]);

    useEffect(() => {
        stable();
    }, []);
const send = async () => {
    const a = { first, first1, first2 };

    const rr = await fetch("http://localhost:9000/table", {
        method: "post",
        body: JSON.stringify(a),
        headers: {
            'Content-type': "application/json; charset=UTF-8"
        }
    });

    const result = await rr.json();
    if (result.statuscode === 1) {
        alert("data sent");
        stable();
        setfirst('');
        setfirst1('');
        setfirst2('');
    } else {
        alert("data not sent");
    }
};

const stable = async () => {
    const show = await fetch("http://localhost:9000/st", {
        method: "get",
    });

    const rr = await show.json();
    if (rr.statuscode === 1) {
        setdd(rr.data);
    }
};

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <div style={{ 
                backgroundColor: '#f5f5f5', 
                padding: '20px', 
                borderRadius: '8px', 
                marginBottom: '30px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{ marginTop: '0', color: '#333' }}>Student Form</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '15px' }}>
                    <input 
                        type='text' 
                        onChange={(e) => setfirst(e.target.value)} 
                        value={first} 
                        placeholder="Name"
                        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                    <input 
                        type='text' 
                        onChange={(e) => setfirst1(e.target.value)} 
                        value={first1} 
                        placeholder="Class"
                        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                    <input 
                        type='text' 
                        onChange={(e) => setfirst2(e.target.value)} 
                        value={first2} 
                        placeholder="Roll Number"
                        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                        onClick={send}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        Add Student
                    </button>
                </div>
            </div>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                gap: '20px'
            }}>
                {dd.map((c) => (
                    <div key={c._id} style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        overflow: 'hidden'
                    }}>
                        <div style={{ padding: '15px' }}>
                            <h3 style={{ margin: '0 0 10px', color: '#333' }}>{c.f}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <span style={{ color: '#666' }}>Class: {c.s}</span>
                                <span style={{ color: '#666' }}>Roll: {c.t}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;