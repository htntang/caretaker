export default function RegistrationPage(){
    return(
        <form className="Register">
            <h1>Register</h1>

            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
        </form>
    )
}