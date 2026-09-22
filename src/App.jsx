import React, { useState } from 'react';
import { Header } from './components/Header';
import { CarCard } from './components/CarCard';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [balance, setBalance] = useState(5000);
  const [isBookingActive, setIsBookingActive] = useState(false);
  const [completedTripInfo, setCompletedTripInfo] = useState(null);

  // Данные доступного автомобиля
  const carData = {
    id: 1,
    name: 'Geely Emgrand',
    plateNumber: '777 AAA 09',
    category: 'Комфорт',
    fuel: 85,
    pricePerMin: 45,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
  };

  const handleStartBooking = () => {
    setIsBookingActive(true);
    setCompletedTripInfo(null);
  };

  const handleFinishBooking = (finalCost, totalSeconds) => {
    setIsBookingActive(false);
    setBalance((prev) => Math.max(0, prev - finalCost));
    setCompletedTripInfo({
      cost: finalCost,
      duration: totalSeconds,
    });
  };

  return (
    <div style={styles.container}>
      <Header isBookingActive={isBookingActive} balance={balance} />

      <main style={styles.main}>
        <div style={styles.titleSection}>
          <h1 style={styles.title}>Доступные авто рядом</h1>
          <p style={styles.subtitle}>Выберите подходящий автомобиль и отправляйтесь в путь</p>
        </div>

        {completedTripInfo && (
          <div style={styles.alert}>
            🎉 <strong>Поездка завершена!</strong> Время: {Math.floor(completedTripInfo.duration / 60)} мин. Списано: {completedTripInfo.cost} ₸.
          </div>
        )}

        <CarCard 
          car={carData} 
          isBookingActive={isBookingActive} 
          onStartBooking={handleStartBooking} 
        />
      </main>

      {isBookingActive && (
        <BookingModal 
          car={carData} 
          onFinishBooking={handleFinishBooking} 
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  main: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '32px 16px',
  },
  titleSection: {
    textAlign: 'center',
    marginBottom: '24px',
  },
  title: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#0f172a',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '14px',
    color: '#64748b',
    margin: 0,
  },
  alert: {
    backgroundColor: '#f0fdf4',
    border: '1px solid #bbf7d0',
    color: '#166534',
    padding: '12px 16px',
    borderRadius: '12px',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '14px',
  },
};