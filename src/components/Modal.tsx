import { ModalWrapper, ModalContent, ModalBody, SudokuButton } from '../theme'

const Modal: React.FC<{
  content: string
  success?: boolean
  fail?: boolean
  show: boolean
  onClose: () => void
}> = ({ content, success, fail, show, onClose }) => {
  if (!show) {
    return <></>
  }

  return (
    <ModalWrapper>
      <ModalBody>
        <ModalContent success={success} fail={fail}>
          {content}
          <SudokuButton onClick={onClose}>Close</SudokuButton>
        </ModalContent>
      </ModalBody>
    </ModalWrapper>
  )
}

export default Modal
