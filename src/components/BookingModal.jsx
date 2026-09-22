import React, { useState, useEffect } from 'react';
import { Clock, Key, StopCircle, MapPin } from 'lucide-react';

export const BookingModal = ({ car, onFinishBooking }) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (totalSeconds) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Стоимость считаем пропорционально секундам (тариф в минуту / 60)
    const currentCost = Math.round((seconds * (car.pricePerMin / 60)));

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <div style={styles.header}>
                    <div style={styles.liveIndicator}>
                        <span style={styles.pulseDot}></span>
                        <span style={styles.headerText}>Активная аренда</span>
                    </div>
                    <span style={styles.carName}>{car.name} ({car.plateNumber})</span>
                </div>

                <div style={styles.statsContainer}>
                    <div style={styles.statBox}>
                        <Clock size={20} color="#2563eb" />
                        <span style={styles.statLabel}>Время в пути</span>
                        <span style={styles.statValue}>{formatTime(seconds)}</span>
                    </div>

                    <div style={styles.statBox}>
                        <span style={styles.currencyIcon}>₸</span>
                        <span style={styles.statLabel}>Текущий чек</span>
                        <span style={styles.statValue}>{currentCost} ₸</span>
                    </div>
                </div>

                <div style={styles.actionsRow}>
                    <button style={styles.actionButton}>
                        <Key size={18} />
                        <span>Открыть двери</span>
                    </button>
                    <button style={styles.actionButton}>
                        <MapPin size={18} />
                        <span>Найти на карте</span>
                    </button>
                </div>

                <button
                    style={styles.finishButton}
                    onClick={() => onFinishBooking(currentCost, seconds)}
                >
                    <StopCircle size={20} />
                    <span>Завершить аренду</span>
                </button>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: 'calc(100% - 32px)',
        maxWidth: '450px',
    },
    modal: {
        backgroundColor: '#1e293b',
        color: '#ffffff',
        borderRadius: '20px',
        padding: '20px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
        border: '1px solid #334155',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
        paddingBottom: '12px',
        borderBottom: '1px solid #334155',
    },
    liveIndicator: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    pulseDot: {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: '#22c55e',
        boxShadow: '0 0 8px #22c55e',
    },
    headerText: {
        fontSize: '14px',
        fontWeight: '600',
        color: '#f8fafc',
    },
    carName: {
        fontSize: '13px',
        color: '#94a3b8',
    },
    statsContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px',
        marginBottom: '16px',
    },
    statBox: {
        backgroundColor: '#0f172a',
        borderRadius: '12px',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
    },
    statLabel: {
        fontSize: '12px',
        color: '#94a3b8',
    },
    statValue: {
        fontSize: '20px',
        fontWeight: '700',
        color: '#ffffff',
    },
    currencyIcon: {
        fontSize: '18px',
        fontWeight: '700',
        color: '#22c55e',
    },
    actionsRow: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
        marginBottom: '12px',
    },
    actionButton: {
        padding: '10px',
        borderRadius: '10px',
        border: '1px solid #475569',
        backgroundColor: 'transparent',
        color: '#f1f5f9',
        fontSize: '13px',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        cursor: 'pointer',
    },
    finishButton: {
        width: '100%',
        padding: '14px',
        borderRadius: '12px',
        border: 'none',
        backgroundColor: '#ef4444',
        color: '#ffffff',
        fontSize: '15px',
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        cursor: 'pointer',
    },
};