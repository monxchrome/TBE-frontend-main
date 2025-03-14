<div class="buttons">
	<button class="login">LOGIN</button>
	<button class="signup">SIGN UP</button>
</div>

<style>
    .buttons {
        font-family: "Play", sans-serif;
        font-style: normal;
				font-weight: 100;
        display: flex;
        gap: 20px;
    }

    .buttons button {
        width: 8rem;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 14px;
    }

    .login {
        padding: 10px 20px;
        border: 2px solid #C52435;
        background: transparent;
        color: #C52435;
        font-weight: 300;
        cursor: pointer;
        border-radius: 5px;
    }

    .login,
    .signup {
        transition: all 0.3s ease-in-out;
    }

    .login:hover {
        background: #C52435;
        color: white;
        transform: scale(1.10);
    }

    .signup:hover {
        transform: scale(1.10);
    }

    .signup {
        padding: 10px 20px;
        background: #C52435;
        color: #F5F5F5;
        font-weight: 300;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
</style>
