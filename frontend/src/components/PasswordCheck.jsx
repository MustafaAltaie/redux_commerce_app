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
        text.trim() && setPassword(text);
        setText('');
    }

    const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'radial-gradient(circle at 0 0, #f7f2e8 50%, transparent 0%), radial-gradient(circle at 90% 170%,#d4e2ec 50%, transparent 0%)'
    }

    const style2 = {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        padding: '50px 70px',
        background: '#eeeeee77',
        borderRadius: '40px',
        backdropFilter: 'blur(5px)',
        border: 'solid 1px #fff',
        borderBottom: 'solid 0.5px #ffffffaa',
        borderRight: 'solid 0.5px #ffffffaa'
    }

    const btnTextStyle = {
        padding: '10px 50px',
        textAlign: 'center',
        border: 'none',
        outline: 'none',
        borderRadius: '20px',
        background: '#ffffff33',
        backdropFilter: 'blur(7px)',
        border: 'solid 0.5px #00000055'
    }

    return (
        <div style={style}>
            
            <div style={style2}>
                <h1 style={{ textAlign: 'center', color: '#79a' }}>Enter Password</h1>
                <input style={btnTextStyle} type="password" placeholder="Password" value={text} onChange={e => setText(e.target.value)} />
                <button style={{...btnTextStyle, background: '#c0d0da'}} onClick={checkPassword}>Check password</button>
                <p style={{ padding: '10px', color: '#f00', textAlign: 'center' }}>{wrong}</p>
            </div>
        </div>
    )
}

export default PasswordCheck;