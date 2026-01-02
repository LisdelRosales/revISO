import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { User } from "../data/mockData";
// Logo de RevISO
const revISOLogo = "/src/assets/logo/revISO-round.svg";

interface LoginPageProps {
  onLogin: (user: User) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Importar mock users localmente para validación
    import("../data/mockData").then((module) => {
      const user = module.mockUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        onLogin(user);
      } else {
        setError("Credenciales incorrectas");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 relative">
      {/* Background opacado */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0"
        style={{
          backgroundImage: `url(/src/assets/images/bg-02.jpg)`
        }}
      />
      
      <Card className="w-full max-w-md relative z-10">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto w-20 h-20 flex items-center justify-center">
            <img src={revISOLogo} alt="RevISO Logo" className="w-20 h-20" />
          </div>
          <CardTitle>RevISO</CardTitle>
          <CardDescription>
            Plataforma de preparación para certificaciones ISO
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="usuario@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            <Button type="submit" className="w-full">
              Iniciar sesión
            </Button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm space-y-2">
            <p className="text-center text-gray-600">Credenciales de prueba:</p>
            <div className="space-y-1">
              <p><strong>Admin:</strong> consultor@reviso.com / admin123</p>
              <p><strong>Empresa 1:</strong> empresa1@email.com / empresa123</p>
              <p><strong>Empresa 2:</strong> empresa2@email.com / empresa123</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
