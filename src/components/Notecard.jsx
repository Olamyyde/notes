import {useRef, useEffect, useState} from 'react'
import Trash from '../icons/Trash'
import { setNewOffset, autoGrow, setZIndex } from '../util'

const Notecard = ({ note }) => {
    const body = JSON.parse(note.body)
    const [position, setPosition] = useState(JSON.parse(note.position))
    const colors = JSON.parse(note.colors)

    let mouseStartPos = { x: 0, y: 0 };
 
    const cardRef = useRef(null);

    const textAreaRef = useRef(null)

    useEffect(() => {
        autoGrow(textAreaRef)
    }, [])

    const autoGrow = (textarea) => {
        const {current} = textAreaRef
        current.style.height = "auto"
        current.style.height = current.scrollHeight + "px"
    }

    const mouseDown = (e) => {
        mouseStartPos.x = e.clientX
        mouseStartPos.y = e.clientY

        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)

        setZIndex(cardRef.current)
    }

    const mouseUp = () => {
        document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouseup", mouseUp);
    };

    const mouseMove = (e) => {
        const mouseMoveDir = {
            x: mouseStartPos.x - e.clientX,
            y: mouseStartPos.y - e.clientY,
        }
        
        mouseStartPos.x = e.clientX
        mouseStartPos.y = e.clientY

        const newPosition = setNewOffset(cardRef.current, mouseMoveDir)

        setPosition(newPosition)

    }



    return (
        <div 
            ref={cardRef}
            className='card' 
            style={{ 
                backgroundColor: colors.colorBody,
                left: `${position.x}px`,
                top: `${position.y}px`
                }}>
            <div
                onMouseDown={mouseDown}
                className="card-header"
                style={{ backgroundColor: colors.colorHeader }}
            >
                <Trash />
            </div>
            <div className='card-body'>
                <textarea
                    ref={textAreaRef}
                    style={{ color: colors.colorText }}
                    defaultValue={body}
                    onInput={() => autoGrow(textAreaRef)}
                    onFocus={() => {setZIndex(cardRef.current)}}
                    >
                    
                </textarea>
            </div>
        </div>
    )
}

export default Notecard
