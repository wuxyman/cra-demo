import React, { useState } from 'react';
import CustomIcon from '@/components/icon';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { t } from '../i18n.js';
import { useUIStore, useRoomStore, useAppStore } from '@/hooks';
import { UIStore } from '@/stores/app';
import { GlobalStorage } from '@/utils/custom-storage';
import { EduManager } from '@/sdk/education/manager';

const defaultState = {
  roomName: '',
  roomType: 0,
  role: '',
  userName: '',
};

const roomTypes = UIStore.roomTypes;

function HomePage() {
  document.title = t(`home.short_title.title`);

  const classes = useStyles();

  const history = useHistory();

  const uiStore = useUIStore();

  const appStore = useAppStore();

  const handleSetting = (evt) => {
    history.push({ pathname: '/setting' });
  };

  const [lock, setLock] = useState(false);

  const handleUpload = async (evt) => {
    try {
      setLock(true);
      const id = await EduManager.uploadLog('0');
      uiStore.showDialog({
        type: 'feedLog',
        message: `id: ${id}`,
      });
      setLock(false);
    } catch (err) {
      uiStore.addToast(t('upload_log_failed'));
      setLock(false);
    }
  };

  const [session, setSessionInfo] = useState(defaultState);

  const [required, setRequired] = useState({});

  const handleSubmit = () => {
    if (!session.roomName) {
      setRequired({ ...required, roomName: t('home.missing_room_name') });
      return;
    }

    if (!session.userName) {
      setRequired({ ...required, userName: t('home.missing_your_name') });
      return;
    }

    if (!session.role) {
      setRequired({ ...required, role: t('home.missing_role') });
      return;
    }

    if (!roomTypes[session.roomType]) return;
    appStore.setRoomInfo({
      ...session,
      roomType: roomTypes[session.roomType].value,
    });
    const path = roomTypes[session.roomType].path;

    if (session.role === 'assistant') {
      history.push(`/breakout-class/assistant/courses`);
    } else {
      history.push(`/classroom/${path}`);
    }
    // history.push(`/classroom/${path}`)
  };

  return (
    <div className={`flex-container`}>
      <Button onClick={handleSubmit}>{t('home.room_join')}</Button>
    </div>
  );
}
export default React.memo(HomePage);
