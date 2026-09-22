import React from 'react';
import { Fuel, ShieldCheck, Zap } from 'lucide-react';

export const CarCard = ({ car, isBookingActive, onStartBooking }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img 
          src={car.image || 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80'} 
          alt={car.name} 
          style={styles.image}
        />
        <span style={styles.badge}>{car.category}</span>
      </div>

      <div style={styles.content}>
        <div style={styles.headerRow}>
          <div>
            <h2 style={styles.carName}>{car.name}</h2>
            <p style={styles.plateNumber}>{car.plateNumber}</p>
          </div>
          <div style={styles.priceTag}>
            <span style={styles.price}>{car.pricePerMin} ₸</span>
            <span style={styles.perMin}>/мин</span>
          </div>
        </div>

        <div style={styles.infoRow}>
          <div style={styles.infoItem}>
            <Fuel size={16} color="#2563eb" />
            <span>Топливо: {car.fuel}%</span>
          </div>
          <div style={styles.infoItem}>
            <ShieldCheck size={16} color="#16a34a" />
            <span>Страховка CASCO</span>
          </div>
        </div>

        <button 
          style={styles.button(isBookingActive)} 
          onClick={onStartBooking}
          disabled={isBookingActive}
        >
          <Zap size={18} />
          {isBookingActive ? 'Автомобиль забронирован' : 'Забронировать'}
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e5e7eb',
    maxWidth: '400px',
    margin: '20px auto',
  },
  imageContainer: {
    position: 'relative',
    height: '200px',
    backgroundColor: '#f3f4f6',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  badge: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '4px 10px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '600',
  },
  content: {
    padding: '20px',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px',
  },
  carName: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#111827',
    margin: 0,
  },
  plateNumber: {
    fontSize: '13px',
    color: '#6b7280',
    margin: '4px 0 0 0',
    fontWeight: '500',
  },
  priceTag: {
    textAlign: 'right',
  },
  price: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#2563eb',
  },
  perMin: {
    fontSize: '12px',
    color: '#6b7280',
  },
  infoRow: {
    display: 'flex',
    gap: '16px',
    marginBottom: '20px',
    paddingBottom: '16px',
    borderBottom: '1px solid #f3f4f6',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: '#374151',
  },
  button: (disabled) => ({
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: disabled ? '#9ca3af' : '#2563eb',
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.2s',
  }),
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