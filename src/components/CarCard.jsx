import React from 'react';
import { Car, Wallet, User } from 'lucide-react';

export const Header = ({ isBookingActive, balance = 5000 }) => {
    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <Car size={28} color="#2563eb" />
                <span style={styles.logoText}>DriveNow</span>
            </div>

            <div style={styles.rightSection}>
                <div style={styles.statusBadge(isBookingActive)}>
                    <span style={styles.statusDot(isBookingActive)}></span>
                    {isBookingActive ? 'В поездке' : 'Свободен'}
                </div>

                <div style={styles.balanceTag}>
                    <Wallet size={18} color="#16a34a" />
                    <span>{balance.toLocaleString()} ₸</span>
                </div>

                <div style={styles.userProfile}>
                    <User size={20} color="#4b5563" />
                </div>
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 24px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    logoText: {
        fontSize: '20px',
        fontWeight: '700',
        color: '#111827',
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
    },
    statusBadge: (active) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: '500',
        backgroundColor: active ? '#fef2f2' : '#f0fdf4',
        color: active ? '#dc2626' : '#16a34a',
    }),
    statusDot: (active) => ({
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: active ? '#dc2626' : '#16a34a',
    }),
    balanceTag: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        backgroundColor: '#f3f4f6',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '600',
        color: '#1f2937',
    },
    userProfile: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: '#e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'content',
        cursor: 'pointer',
    },
};