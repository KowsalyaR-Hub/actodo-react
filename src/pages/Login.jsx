import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {
    const navigate = useNavigate()
    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()
    const [ruser, setRuser] = useState(true)

    const users = props.users

    function handleUInput(evt) {
        setEusername(evt.target.value)
    }

    function handlePInput(evt) {
        setEpassword(evt.target.value)
    }

    function checkUser() {
        var userfound = false

        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {

                console.log("Login Successfull")
                userfound = true
                navigate("/landing", { state: { user: eusername } })

            }
        })

        if (userfound === false) {
            console.log("login Failed")
            setRuser(false)
        }


    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hello, Welcome!!..😄</h1>
                {ruser ? <p className="my-2">I help you to manage your activities after you login :)</p> : <p className="text-red-500">Please Sign Up Before you Login!!</p>}


                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md mb-1"
                        placeholder="Username"
                        onChange={handleUInput}
                    />

                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md mb-1"
                        placeholder="Password"
                        onChange={handlePInput}
                    />

                    <button className="bg-[#8272DA] w-24 p-1 rounded-md hover:text-white" onClick={checkUser}>
                        Login
                    </button>

                    <p>Don't have an account? <Link to={"/signup"} className="underline hover:text-[#5742cf]">Sign Up</Link>  </p>
                </div>
            </div>
        </div>
    )
}

export default Login;