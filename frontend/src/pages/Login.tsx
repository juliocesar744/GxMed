import LeftDesc from "../components/layout/LeftDesc";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useNavigation } from "../hooks/useNavigation";

export default function Login() {
    const { goToHome, goToRegister } = useNavigation();
    const handleLogin = async () => {
        const usernameInput = (document.getElementById("username") as HTMLInputElement).value;
        const passwordInput = (document.getElementById("password") as HTMLInputElement).value;

        try {
            const res = await fetch("http://localhost:5264/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: usernameInput,
                    password: passwordInput,
                }),
            });

            if (!res.ok) {
                const error = await res.text();
                alert(error);
                return;
            }

            const data = await res.json();
            alert(`Bem-vindo, ${data.username}!`);
            goToHome();
        } catch (err) {
            console.error(err);
            alert("Erro ao logar. Tente novamente.");
        }
    };

    return (
        <div className="flex justify-center items-center h-[100%] bg-[#e0e0e0] px-10">
            <div className="flex justify-center items-center bg-white rounded-2xl px-5 py-5">
                <div className="flex flex-col justify-start items-start h-[100%] w-full sm:px-10 px-0 sm:w-[50%]">
                    <div className="mt-10">
                        <img 
                            src="../public/assets/gxmed-logo-colorido.svg" 
                            alt="GxMed Logo"
                            height={100}
                            width={200}
                        />
                    </div>
                    
                    <div className="mt-10">
                        <p className="text-2xl font-bold">Olá, <br/> Bem-vindo de volta</p>
                        <p className="text-sm text-gray-400 mt-2">Foque na Medicina, sem dor de cabeça fiscal</p>
                    </div>

                    <div  className="flex flex-col w-[90%] gap-2 mt-10">
                        <Input 
                            id="username"
                            className="h-10 w-[100%]"
                            placeholder="Usuário"
                        />

                        <Input 
                            id="password"
                            className=" h-10 w-[100%]"
                            placeholder="Senha"
                            type="password"
                        />
                        <div className="flex justify-between items-center flex-row w-full">
                            <Input type="checkbox" label="Lembrar"/>
                            <Button variant="text">
                                Esqueceu sua senha?
                            </Button>
                        </div>
                    </div>
                    
                    
                    <div className="mt-5" onClick={handleLogin}>
                        <Button>
                            Entrar
                        </Button>
                    </div>
                    
                    <div className="mt-10 mb-10">
                        <p className="text-sm text-gray-400">
                            Não tem uma conta ainda? 
                            <Button variant="text" onClick={goToRegister}>
                                Cadastrar
                            </Button>
                        </p>
                    </div>
                    
                </div>
                <LeftDesc />
            </div>
        </div>
    )
}