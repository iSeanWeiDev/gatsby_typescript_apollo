import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './style.scss';

type AppDialogProps = {
  label?: string;
  headerTitle: string;
  applyTitle: string;
  cancelTitle?: string;
  open: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  children: React.ReactNode | React.ReactNode[];
};

function AppDialog({
  label,
  headerTitle,
  applyTitle,
  cancelTitle,
  open,
  onClose,
  onSubmit,
  children,
}: AppDialogProps) {
  return (
    <Modal
      animation
      show={open}
      onHide={onClose}
      label={label || `app-dialog`}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>{headerTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {cancelTitle && <Button onClick={onClose}>Close</Button>}
        <Button onClick={onSubmit}>{applyTitle}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AppDialog;
