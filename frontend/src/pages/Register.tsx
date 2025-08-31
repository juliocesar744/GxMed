import LeftDesc from "../components/layout/LeftDesc";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useState } from "react";
import { useNavigation } from "../hooks/useNavigation";
import { registerSchema } from "../validation/registerSchema";

export default function Register() {
    const { goToLogin } = useNavigation();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleRegister = async () => {
        const validation = registerSchema.safeParse({
            username,
            email,
            password,
            confirmPassword,
        });

        setErrors({});

        if (!validation.success) {
            const fieldErrors: { [key: string]: string } = {};
            validation.error.issues.forEach(issue => {
                if (issue.path && issue.path.length > 0) {
                    const key = issue.path[0] as string;
                    fieldErrors[key] = issue.message;
                }
            });
            setErrors(fieldErrors);
            return;
        }

        if (password !== confirmPassword) {
            setErrors({ confirmPassword: "As senhas não conferem" });
            return;
        }
        
        try {
            const res = await fetch("http://localhost:5264/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            if (!res.ok) {
                const error = await res.text();
                alert(error);
                return;
            }

            const data = await res.json();
                alert(`Usuário ${data.username} registrado com sucesso!`);
                goToLogin();
        } catch (err) {
            console.error(err);
            alert("Erro ao registrar. Tente novamente.");
        }
    };

    return (
        <div className="flex justify-center items-center h-[100%] bg-[#e0e0e0]">
            <div className="flex justify-center items-center bg-white rounded-2xl px-5 py-5">
                <div className="flex flex-col justify-start items-start h-[100%] w-full px-10 sm:w-[50%]">
                    <div className="mt-10">
                        <img 
                            src="../src/assets/gxmed-logo-colorido.svg" 
                            alt="GxMed Logo"
                            height={100}
                            width={200}
                        />
                    </div>
                    
                    <div className="mt-10">
                        <p className="text-2xl font-bold">Registre-se aqui</p>
                        <p className="text-sm text-gray-400 mt-2">Foque na Medicina, sem dor de cabeça fiscal</p>
                    </div>

                    <div  className="flex flex-col w-[90%] gap-2 mt-10">
                        <Input
                            id="username"
                            className="h-10 w-[100%]"
                            placeholder="Usuário"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username && 
                            <span className="text-red-500 text-sm">
                                {errors.username}
                            </span>
                        }
                        <Input
                            id="email"
                            className="h-10 w-[100%]"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && 
                            <span className="text-red-500 text-sm">
                                {errors.email}
                            </span>
                        }
                        <Input
                            id="password"
                            className="h-10 w-[100%]"
                            placeholder="Senha"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && 
                            <span className="text-red-500 text-sm">
                                {errors.password}
                            </span>
                        }
                        <Input
                            id="confirmPassword"
                            className="h-10 w-[100%]"
                            placeholder="Repita sua senha"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPassword && 
                            <span className="text-red-500 text-sm">
                                {errors.confirmPassword}
                            </span>
                        }
                    </div>
                    
                    
                    <div className="mt-5">
                        <Button onClick={handleRegister}>
                            Registrar
                        </Button>
                    </div>
                    
                    <div className="mt-10 mb-10">
                        <p className="text-sm text-gray-400">
                            Já tem uma conta?
                            <Button variant="text" onClick={goToLogin}>
                                Logar
                            </Button>
                        </p>
                    </div>
                </div>
                    <LeftDesc />
            </div>
        </div>
    )
}