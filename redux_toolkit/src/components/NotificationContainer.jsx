import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeNotification } from '../store/notificationSlice';

export default function NotificationContainer() {
  const notifications = useSelector(state => state.notifications);
  const dispatch = useDispatch();

  return (
    <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
      {notifications.map(n => (
        <Toast key={n.id} notification={n} onClose={() => dispatch(removeNotification(n.id))} />
      ))}
    </div>
  );
}

function Toast({ notification, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={{ background: '#333', color: '#fff', padding: '10px', marginBottom: '5px', borderRadius: '4px' }}>
      {notification.message}
    </div>
  );
}