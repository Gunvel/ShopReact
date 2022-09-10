import React, { useRef } from "react";

function Chat({ login }) {
    const refForm = useRef();

    let keyPress = (event) => {
        if (event.which === 13 && !event.shiftKey) {
            event.preventDefault();

            refForm.current.closest("form").submit();
        }
    };

    return (
        <div className='b-chat'>
            <div className='b-chat__header'>
                <div className='b-chat__title'>CHAT</div>
                <div className='b-chat__login'>Login: {login}</div>
            </div>

            <div className='b-chat__window'>

            </div>

            <form className='b-chat__form' ref={refForm}>
                <textarea autoFocus placeholder="Введите сообщение..." onKeyPress={keyPress} />
                <button>
                    <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.763 511.763">
                        <path d="M511.716,9.802c-0.107-0.853-0.213-1.707-0.533-2.56c-0.107-0.32-0.213-0.747-0.32-1.067
				c-0.533-1.173-1.28-2.24-2.133-3.2c-0.96-0.853-2.027-1.6-3.2-2.133c-0.32-0.107-0.747-0.32-1.067-0.32
				c-0.853-0.213-1.707-0.427-2.56-0.427c-0.427,0-0.747,0-1.173,0c-0.96,0-2.027,0.213-2.987,0.533
				c-0.213,0.107-0.427,0.107-0.64,0.213h-0.107L6.436,213.962c-5.44,2.347-7.893,8.64-5.547,14.08c0.96,2.24,2.667,4.053,4.8,5.12
				l178.347,94.4l94.507,178.347c1.813,3.52,5.44,5.653,9.387,5.76h0.427c4.053-0.107,7.68-2.667,9.387-6.4L510.969,14.815v-0.107
				c0.107-0.213,0.107-0.427,0.213-0.64c0.32-0.96,0.533-1.92,0.533-2.987C511.716,10.655,511.822,10.228,511.716,9.802z
				M35.342,224.522l418.88-182.08l-264.107,264L35.342,224.522z M287.182,476.362l-81.92-154.773l264-264.107L287.182,476.362z"/>
                    </svg>
                </button>
            </form>
        </div>
    );
}

export default Chat;