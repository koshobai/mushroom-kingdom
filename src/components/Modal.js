import ReactDOM from 'react-dom';
import '../Modal.css';

export default function Modal({ children, hCloseModalSide }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={hCloseModalSide}>close</button>
      </div>
    </div>,
    document.body
  );
}
