import {useState} from 'react'
import s from './HW4.module.css'
import {Button} from './Button'
import {Input} from './Input'

export const HW4 = () => {

    const [currentText, setCurrentText] = useState('')
    const [texts, setTexts] = useState<string[]>([
        'Some words',
    ])
    const handleSave = () => {
        setTexts([currentText, ...texts])
        setCurrentText('')
    }

    return (
        <div id={'hw04'}>
            {currentText ? (
                <h1 id={'hw04-text'}>{currentText}</h1>
            ) : (
                <h1 id={'hw04-default-text'}>New Task</h1>
            )}

            <Input currentText={currentText} setCurrentText={setCurrentText}/>

            <Button callBack={handleSave} name={'save'}/>

            <h1 style={{marginTop: '50px'}}>ToDoList for today:</h1>

            <ol id={'hw04-tasks'}>
                {texts.map((el, index) => {
                    return (
                        <li key={index} id={`hw04-task-${index}`} className={el ? s.chetNechet : ''}>
                            {el}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};