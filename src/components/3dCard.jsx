import React, { useState } from 'react';
import './Card3D.css';

const Card3D = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const cardRect = card.getBoundingClientRect();

        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;

        const x = e.clientX - centerX;
        const y = e.clientY - centerY;

        const rotationX = -y / 20;
        const rotationY = x / 20;

        setRotation({ x: rotationX, y: rotationY });
    };

    const handleTouchMove = (e) => {
        const touch = e.touches[0];
        const card = e.currentTarget;
        const cardRect = card.getBoundingClientRect();

        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;

        const x = touch.clientX - centerX;
        const y = touch.clientY - centerY;

        const rotationX = -y / 20;
        const rotationY = x / 20;

        setRotation({ x: rotationX, y: rotationY });
    };

    const resetRotation = () => {
        setRotation({ x: 0, y: 0 });
    };


    const saveVCard = () => {
        const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:IT-AUL
TEL:+79179151112
EMAIL:support@zero-kilometer.ru
URL:https://zero-kilometer.ru
END:VCARD
        `;

        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'contact.vcf';
        link.click();
    };

    return (
        <div
            className="card-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetRotation}
            onTouchMove={handleTouchMove}
            onTouchEnd={resetRotation}
            style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
        >
            <div className="card">
                <div className="card-content">
                    <img src="/logo.svg" alt="logo" className="logo"/>
                    <h3 className="title">Креативные решения</h3>
                    <div className="link--container">
                        <a className="btn" href="https://t.me/it_aul">Tg</a>
                        <a className="btn" href="tel:+79179151112">Tel</a>
                        <a className="btn" href="https://zero-kilometer.ru/">ZK</a>
                        <a className="btn" href="http://t.me/Dremotha">Lid</a>
                    </div>

                    <h3 className="title">Сложных проблем</h3>
                    <div className="vcard-button-container">
                        <button className="vcard-btn" onClick={saveVCard}>
                            Сохранить в vCard
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Card3D;
