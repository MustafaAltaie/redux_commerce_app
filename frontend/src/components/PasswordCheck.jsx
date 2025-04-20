import { useEffect, useState } from "react";
import { useCheckPasswordQuery } from "../features/productApi";
import { useNavigate } from "react-router-dom";

const PasswordCheck = () => {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [wrong, setWrong] = useState('');
    const navigate = useNavigate();
    const { data: isPasswordCorrect, isLoading, isError } = useCheckPasswordQuery(password);

    useEffect(() => {
        if(isPasswordCorrect && !isLoading && !isError) {
            sessionStorage.setItem('isCorrectPassword', JSON.stringify(true));
            navigate('/home/dashboard');
        } else if (isPasswordCorrect === false && !isError) {
            setWrong('Wrong password');
        }
    }, [isPasswordCorrect, isLoading, isError, navigate]);

    const checkPassword = async () => {
        setPassword(text);
        setText('');
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <p style={{ padding: '10px', color: 'red' }}>{wrong}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
                <input style={{ padding: '10px' }} type="text" placeholder="Enter password" value={text} onChange={e => setText(e.target.value)} />
                <button style={{ padding: '10px' }} onClick={checkPassword}>Check password</button>
            </div>
        </div>
    )
}

export default PasswordCheck;