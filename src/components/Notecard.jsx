import React from 'react'

const Notecard = ({note}) => {
    const body = JSON.parse(note.body)
    const position = JSON.parse(note.position)
    const colors = JSON.parse(note.colors)


  return (
    <div className='card-body' style={{ backgroundColor: colors.colorBody}}>
        <div>
            <textarea 
                style={{ color: colors.colorText}}
                defaultValue={body}>
                
            </textarea>
        </div>
    </div>
  )
}

export default Notecard
