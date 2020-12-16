import React from 'react';

import './dialog.less';
import { t } from '@/i18n';
import { observer } from 'mobx-react';
import { useRoomStore, useUIStore, useBreakoutRoomStore } from '@/hooks';
import { useHistory, useLocation } from 'react-router-dom';

function RoomDialog({ onConfirm, onClose, dialogId, dialogMessage }) {
  const uiStore = useUIStore();

  const handleClose = async () => {
    await onClose(dialogMessage.type);
    uiStore.removeDialog(dialogId);
  };

  const handleConfirm = async () => {
    await onConfirm(dialogMessage.type);
    uiStore.removeDialog(dialogId);
  };

  return <div>对话框</div>;
}

const DialogContainer = observer(() => {
  const roomStore = useRoomStore();
  const breakoutRoomStore = useBreakoutRoomStore();
  const uiStore = useUIStore();
  const history = useHistory();

  const location = useLocation();

  const onClose = async (type) => {
    if (type === 'apply') {
      await roomStore.teacherRejectApply();
    }
  };

  const onConfirm = async (type) => {
    if (type === 'exitRoom') {
      if (location.pathname.match(/breakout/)) {
        await breakoutRoomStore.leave();
      } else {
        await roomStore.leave();
      }
      history.push('/');
    } else if (type === 'apply') {
      // p2p message accept coVideo
      // 老师同意学生连麦申请
      await roomStore.teacherAcceptApply();
    } else if (type === 'uploadLog') {
      // globalStore.removeDialog()
    }
    return;
  };

  return (
    <>
      {uiStore.dialogs.map((dialog) => (
        <RoomDialog
          key={dialog.id}
          dialogId={dialog.id}
          dialogMessage={dialog.dialog}
          onClose={onClose}
          onConfirm={onConfirm}
        />
      ))}
    </>
  );
});

export default DialogContainer;
