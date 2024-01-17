import {ChangeEvent, useState} from 'react';

export const HW3 = () => {

    const [currentText, setCurrentText] = useState('');
    const [texts, setTexts] = useState<string[]>([
        'What you do at night is what makes you rich. (Al Capone)',
    ]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentText(e.currentTarget.value);
    };

    const handleSave = () => {
        setTexts(prevTexts => [...prevTexts, currentText]);
        setCurrentText('');
    };

    return (
        <div id={'hw03'}>
            {currentText ? (
                <h1 id={'hw03-text'}>{currentText}</h1>
            ) : (
                <h1 id={'hw03-default-text'}>New Task</h1>
            )}

            <input id={'hw03-input'} type="text" value={currentText} onChange={handleChange}/>
            <button id={'hw03-button'} onClick={() => handleSave}>Save</button>
            <h1 style={{marginTop: '50px'}}>TodoList:</h1>

            <ol id={'hw03-tasks'}>
                {texts.map((el, index) => {
                    return (
                        <li key={index} id={`hw03-task-${index}`}>
                            {el}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};