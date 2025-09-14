"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  QrCode,
  Dumbbell,
  Trophy,
  Users,
  Play,
  CheckCircle,
  Star,
  Medal,
  Target,
  Clock,
  Home,
  User,
  Award,
} from "lucide-react";

type Screen =
  | "home"
  | "qr-initial"
  | "qr-code"
  | "qr-success"
  | "workouts"
  | "workout-detail"
  | "workout-progress"
  | "challenges"
  | "challenge-detail"
  | "challenge-progress"
  | "ranking";

export default function FitnessAppPrototype() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");

  const renderBottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex justify-around items-center py-2 max-w-md mx-auto">
        <Button
          variant={currentScreen === "home" ? "default" : "ghost"}
          size="sm"
          onClick={() => setCurrentScreen("home")}
          className="flex flex-col items-center gap-1 h-auto py-2"
        >
          <Home size={20} />
          <span className="text-xs">Início</span>
        </Button>
        <Button
          variant={currentScreen === "workouts" ? "default" : "ghost"}
          size="sm"
          onClick={() => setCurrentScreen("workouts")}
          className="flex flex-col items-center gap-1 h-auto py-2"
        >
          <Dumbbell size={20} />
          <span className="text-xs">Treinos</span>
        </Button>
        <Button
          variant={currentScreen === "challenges" ? "default" : "ghost"}
          size="sm"
          onClick={() => setCurrentScreen("challenges")}
          className="flex flex-col items-center gap-1 h-auto py-2"
        >
          <Trophy size={20} />
          <span className="text-xs">Desafios</span>
        </Button>
        <Button
          variant={currentScreen === "ranking" ? "default" : "ghost"}
          size="sm"
          onClick={() => setCurrentScreen("ranking")}
          className="flex flex-col items-center gap-1 h-auto py-2"
        >
          <Award size={20} />
          <span className="text-xs">Ranking</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex flex-col items-center gap-1 h-auto py-2"
        >
          <User size={20} />
          <span className="text-xs">Perfil</span>
        </Button>
      </div>
    </div>
  );

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return (
          <div className="p-4 pb-20 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-primary">FitTrack</h1>
              <p className="text-muted-foreground">
                Sua jornada fitness começa aqui
              </p>
            </div>

            <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Bem-vindo!</h3>
                    <p className="text-sm opacity-90">
                      Pronto para treinar hoje?
                    </p>
                  </div>
                  <Dumbbell size={32} />
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setCurrentScreen("qr-initial")}
              >
                <CardContent className="p-4 text-center">
                  <QrCode className="mx-auto mb-2 text-primary" size={32} />
                  <h3 className="font-semibold">Check-in</h3>
                  <p className="text-sm text-muted-foreground">
                    Registrar presença
                  </p>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setCurrentScreen("workouts")}
              >
                <CardContent className="p-4 text-center">
                  <Dumbbell className="mx-auto mb-2 text-primary" size={32} />
                  <h3 className="font-semibold">Meus Treinos</h3>
                  <p className="text-sm text-muted-foreground">
                    Ver exercícios
                  </p>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setCurrentScreen("challenges")}
              >
                <CardContent className="p-4 text-center">
                  <Trophy className="mx-auto mb-2 text-primary" size={32} />
                  <h3 className="font-semibold">Desafios</h3>
                  <p className="text-sm text-muted-foreground">
                    Competir e ganhar
                  </p>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setCurrentScreen("ranking")}
              >
                <CardContent className="p-4 text-center">
                  <Users className="mx-auto mb-2 text-primary" size={32} />
                  <h3 className="font-semibold">Ranking</h3>
                  <p className="text-sm text-muted-foreground">Ver posições</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Progresso Semanal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Treinos realizados</span>
                    <span className="font-semibold">4/6</span>
                  </div>
                  <Progress value={67} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    Faltam apenas 2 treinos para completar a meta!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "qr-initial":
        return (
          <div className="p-4 pb-20 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Check-in</h1>
              <p className="text-muted-foreground">
                Registre sua presença na academia
              </p>
            </div>

            <Card className="text-center p-8">
              <QrCode className="mx-auto mb-4 text-primary" size={64} />
              <h3 className="text-lg font-semibold mb-2">Gerar QR Code</h3>
              <p className="text-muted-foreground mb-6">
                Clique no botão abaixo para gerar seu código de entrada
              </p>
              <Button
                onClick={() => setCurrentScreen("qr-code")}
                className="w-full"
              >
                Gerar QR Code
              </Button>
            </Card>

            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => setCurrentScreen("home")}
              >
                Voltar
              </Button>
            </div>
          </div>
        );

      case "qr-code":
        return (
          <div className="p-4 pb-20 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Seu QR Code</h1>
              <p className="text-muted-foreground">
                Apresente este código na entrada
              </p>
            </div>

            <Card className="bg-gradient-to-br from-accent to-primary p-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-48 h-48 mx-auto bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                  <div className="grid grid-cols-8 gap-1">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 ${
                          Math.random() > 0.5 ? "bg-black" : "bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Código válido por 5 minutos
                </p>
              </div>
            </Card>

            <div className="text-center space-y-4">
              <Badge variant="secondary" className="text-sm">
                <Clock className="w-4 h-4 mr-1" />
                Expira em 04:32
              </Badge>
              <div className="space-y-2">
                <Button
                  onClick={() => setCurrentScreen("qr-success")}
                  className="w-full"
                >
                  Simular Check-in
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setCurrentScreen("qr-initial")}
                >
                  Voltar
                </Button>
              </div>
            </div>
          </div>
        );

      case "qr-success":
        return (
          <div className="p-4 pb-20 space-y-6 text-center">
            <div className="space-y-4">
              <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center">
                <CheckCircle className="text-primary-foreground" size={48} />
              </div>
              <h1 className="text-2xl font-bold text-primary">
                Presença Registrada!
              </h1>
              <p className="text-muted-foreground">
                Seu check-in foi realizado com sucesso
              </p>
            </div>

            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-between">
                  <span>Data:</span>
                  <span className="font-semibold">14/09/2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Horário:</span>
                  <span className="font-semibold">14:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Unidade:</span>
                  <span className="font-semibold">Academia Central</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <Button
                onClick={() => setCurrentScreen("workouts")}
                className="w-full"
              >
                Ver Meus Treinos
              </Button>
              <Button
                variant="outline"
                onClick={() => setCurrentScreen("home")}
              >
                Voltar ao Início
              </Button>
            </div>
          </div>
        );

      case "workouts":
        return (
          <div className="p-4 pb-20 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Meus Treinos</h1>
              <p className="text-muted-foreground">
                Seus treinos personalizados
              </p>
            </div>

            <div className="space-y-4">
              {["A", "B", "C"].map((treino, index) => (
                <Card
                  key={treino}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setCurrentScreen("workout-detail")}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-bold">
                            {treino}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold">Treino {treino}</h3>
                          <p className="text-sm text-muted-foreground">
                            {treino === "A"
                              ? "Peito, Ombro, Tríceps"
                              : treino === "B"
                              ? "Costas, Bíceps"
                              : "Pernas, Glúteos"}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={index === 0 ? "default" : "secondary"}>
                          {index === 0
                            ? "Hoje"
                            : index === 1
                            ? "Amanhã"
                            : "Terça"}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          {index === 0
                            ? "8 exercícios"
                            : index === 1
                            ? "6 exercícios"
                            : "10 exercícios"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Progresso da Semana</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Treinos concluídos</span>
                    <span className="font-semibold">4/6</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "workout-detail":
        return (
          <div className="p-4 pb-20 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Treino A</h1>
              <p className="text-muted-foreground">Peito, Ombro, Tríceps</p>
            </div>

            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-semibold">Duração estimada</h3>
                    <p className="text-sm text-muted-foreground">
                      45-60 minutos
                    </p>
                  </div>
                  <Badge>8 exercícios</Badge>
                </div>
                <Button
                  onClick={() => setCurrentScreen("workout-progress")}
                  className="w-full"
                >
                  Iniciar Treino
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-3">
              {[
                { nome: "Supino Reto", series: "4x12", descanso: "90s" },
                { nome: "Supino Inclinado", series: "3x10", descanso: "90s" },
                { nome: "Crucifixo", series: "3x12", descanso: "60s" },
                { nome: "Desenvolvimento", series: "4x10", descanso: "90s" },
                { nome: "Elevação Lateral", series: "3x15", descanso: "60s" },
                { nome: "Tríceps Testa", series: "3x12", descanso: "60s" },
                { nome: "Tríceps Corda", series: "3x15", descanso: "45s" },
                { nome: "Mergulho", series: "3x máx", descanso: "60s" },
              ].map((exercicio, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold">{exercicio.nome}</h4>
                        <div className="flex space-x-4 text-sm text-muted-foreground">
                          <span>{exercicio.series}</span>
                          <span>Descanso: {exercicio.descanso}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Play size={16} className="mr-1" />
                        Vídeo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={() => setCurrentScreen("workouts")}
            >
              Voltar aos Treinos
            </Button>
          </div>
        );

      case "workout-progress":
        return (
          <div className="p-4 pb-20 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Treino em Andamento</h1>
              <p className="text-muted-foreground">Treino A - Exercício 3/8</p>
            </div>

            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <Progress value={37.5} className="h-3" />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Crucifixo</h3>
                    <p className="text-muted-foreground">
                      Série 2/3 - 12 repetições
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-sm text-muted-foreground">Tempo</p>
                  <p className="font-semibold">23:45</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Target className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-sm text-muted-foreground">Descanso</p>
                  <p className="font-semibold">60s</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-3">
              {[
                { exercicio: "Supino Reto", concluido: true },
                { exercicio: "Supino Inclinado", concluido: true },
                { exercicio: "Crucifixo", concluido: false, atual: true },
                { exercicio: "Desenvolvimento", concluido: false },
                { exercicio: "Elevação Lateral", concluido: false },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg ${
                    item.atual ? "bg-accent/10 border border-accent" : "bg-card"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      item.concluido
                        ? "bg-primary"
                        : item.atual
                        ? "bg-accent"
                        : "bg-muted"
                    }`}
                  >
                    {item.concluido ? (
                      <CheckCircle
                        size={16}
                        className="text-primary-foreground"
                      />
                    ) : (
                      <span className="text-xs font-bold text-white">
                        {index + 1}
                      </span>
                    )}
                  </div>
                  <span
                    className={`flex-1 ${
                      item.concluido
                        ? "line-through text-muted-foreground"
                        : item.atual
                        ? "font-semibold"
                        : ""
                    }`}
                  >
                    {item.exercicio}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Button className="w-full">Marcar Série Concluída</Button>
              <Button
                variant="outline"
                onClick={() => setCurrentScreen("workout-detail")}
              >
                Pausar Treino
              </Button>
            </div>
          </div>
        );

      case "challenges":
        return (
          <div className="p-4 pb-20 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Desafios</h1>
              <p className="text-muted-foreground">
                Compete e ganhe recompensas
              </p>
            </div>

            <Card className="bg-gradient-to-r from-accent to-primary text-accent-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Desafio da Semana</h3>
                    <p className="text-sm opacity-90">
                      Complete 6 treinos em 7 dias
                    </p>
                  </div>
                  <Trophy size={32} />
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progresso</span>
                    <span>4/6 treinos</span>
                  </div>
                  <Progress value={67} className="h-2 bg-white/20" />
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {[
                {
                  titulo: "Maratona de Setembro",
                  descricao: "Complete 20 treinos no mês",
                  progresso: 65,
                  premio: "500 pontos",
                  participantes: 234,
                  ativo: true,
                },
                {
                  titulo: "Desafio Cardio",
                  descricao: "Queime 2000 calorias na semana",
                  progresso: 45,
                  premio: "300 pontos",
                  participantes: 156,
                  ativo: true,
                },
                {
                  titulo: "Força Total",
                  descricao: "Aumente sua carga em 10%",
                  progresso: 0,
                  premio: "1000 pontos",
                  participantes: 89,
                  ativo: false,
                },
              ].map((desafio, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer hover:shadow-md transition-shadow ${
                    desafio.ativo ? "border-accent" : ""
                  }`}
                  onClick={() => setCurrentScreen("challenge-detail")}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold">{desafio.titulo}</h3>
                        <p className="text-sm text-muted-foreground">
                          {desafio.descricao}
                        </p>
                      </div>
                      <Badge variant={desafio.ativo ? "default" : "secondary"}>
                        {desafio.ativo ? "Ativo" : "Em breve"}
                      </Badge>
                    </div>

                    {desafio.ativo && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progresso</span>
                          <span>{desafio.progresso}%</span>
                        </div>
                        <Progress value={desafio.progresso} className="h-2" />
                      </div>
                    )}

                    <div className="flex justify-between items-center mt-3 text-sm">
                      <span className="text-muted-foreground">
                        <Users className="inline w-4 h-4 mr-1" />
                        {desafio.participantes} participantes
                      </span>
                      <span className="font-semibold text-accent">
                        {desafio.premio}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "challenge-detail":
        return (
          <div className="p-4 pb-20 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Maratona de Setembro</h1>
              <p className="text-muted-foreground">
                Complete 20 treinos no mês
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-accent rounded-full flex items-center justify-center">
                    <Trophy className="text-accent-foreground" size={32} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Prêmio: 500 Pontos
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      + Badge exclusiva
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regras do Desafio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">
                    Complete 20 treinos durante o mês de setembro
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">
                    Cada treino deve ter duração mínima de 30 minutos
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-sm">Prazo final: 30 de setembro</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seu Progresso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">13/20</div>
                    <p className="text-sm text-muted-foreground">
                      treinos concluídos
                    </p>
                  </div>
                  <Progress value={65} className="h-3" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Faltam 7 treinos</span>
                    <span>15 dias restantes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <Button
                onClick={() => setCurrentScreen("challenge-progress")}
                className="w-full"
              >
                Ver Progresso Detalhado
              </Button>
              <Button
                variant="outline"
                onClick={() => setCurrentScreen("challenges")}
              >
                Voltar aos Desafios
              </Button>
            </div>
          </div>
        );

      case "challenge-progress":
        return (
          <div className="p-4 pb-20 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Progresso do Desafio</h1>
              <p className="text-muted-foreground">Maratona de Setembro</p>
            </div>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-primary">13/20</div>
                  <Progress value={65} className="h-4" />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Pontos atuais</p>
                      <p className="font-semibold">325 pts</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Posição</p>
                      <p className="font-semibold">#12</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Histórico Semanal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { semana: "Semana 1", treinos: 4, meta: 5 },
                    { semana: "Semana 2", treinos: 5, meta: 5 },
                    { semana: "Semana 3", treinos: 4, meta: 5 },
                    { semana: "Semana 4", treinos: 0, meta: 5, atual: true },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        item.atual
                          ? "bg-accent/10 border border-accent"
                          : "bg-muted/50"
                      }`}
                    >
                      <span className={item.atual ? "font-semibold" : ""}>
                        {item.semana}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">
                          {item.treinos}/{item.meta}
                        </span>
                        <Progress
                          value={(item.treinos / item.meta) * 100}
                          className="w-16 h-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conquistas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { nome: "Primeira Semana", conquistada: true },
                    { nome: "Meio Caminho", conquistada: true },
                    { nome: "Finalista", conquistada: false },
                  ].map((badge, index) => (
                    <div
                      key={index}
                      className={`text-center p-3 rounded-lg ${
                        badge.conquistada
                          ? "bg-primary/10 border border-primary"
                          : "bg-muted/50"
                      }`}
                    >
                      <Medal
                        className={`mx-auto mb-2 ${
                          badge.conquistada
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                        size={24}
                      />
                      <p
                        className={`text-xs ${
                          badge.conquistada
                            ? "font-semibold"
                            : "text-muted-foreground"
                        }`}
                      >
                        {badge.nome}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              onClick={() => setCurrentScreen("challenge-detail")}
            >
              Voltar ao Desafio
            </Button>
          </div>
        );

      case "ranking":
        return (
          <div className="p-4 pb-20 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Ranking</h1>
              <p className="text-muted-foreground">
                Classificação geral dos alunos
              </p>
            </div>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-accent-foreground font-bold">
                        #12
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Sua Posição</h3>
                      <p className="text-sm text-muted-foreground">
                        1,250 pontos
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary">Este mês</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              {[
                { posicao: 1, nome: "Ana Silva", pontos: 2850, badge: "gold" },
                {
                  posicao: 2,
                  nome: "Carlos Santos",
                  pontos: 2720,
                  badge: "silver",
                },
                {
                  posicao: 3,
                  nome: "Maria Oliveira",
                  pontos: 2650,
                  badge: "bronze",
                },
                { posicao: 4, nome: "João Costa", pontos: 2400, badge: null },
                {
                  posicao: 5,
                  nome: "Lucia Ferreira",
                  pontos: 2350,
                  badge: null,
                },
                { posicao: 6, nome: "Pedro Lima", pontos: 2200, badge: null },
                { posicao: 7, nome: "Sofia Alves", pontos: 2100, badge: null },
                { posicao: 8, nome: "Rafael Souza", pontos: 1950, badge: null },
                { posicao: 9, nome: "Camila Rocha", pontos: 1800, badge: null },
                {
                  posicao: 10,
                  nome: "Bruno Martins",
                  pontos: 1650,
                  badge: null,
                },
              ].map((usuario, index) => (
                <Card
                  key={index}
                  className={usuario.posicao <= 3 ? "border-accent" : ""}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            usuario.badge === "gold"
                              ? "bg-yellow-500"
                              : usuario.badge === "silver"
                              ? "bg-gray-400"
                              : usuario.badge === "bronze"
                              ? "bg-amber-600"
                              : "bg-muted"
                          }`}
                        >
                          {usuario.posicao <= 3 ? (
                            <Medal className="text-white" size={20} />
                          ) : (
                            <span className="font-bold text-sm">
                              #{usuario.posicao}
                            </span>
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold">{usuario.nome}</h4>
                          <p className="text-sm text-muted-foreground">
                            {usuario.pontos} pontos
                          </p>
                        </div>
                      </div>
                      {usuario.posicao <= 3 && (
                        <Star className="text-accent" size={20} />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Continue treinando para subir no ranking!
                </p>
                <Button
                  className="mt-3"
                  onClick={() => setCurrentScreen("workouts")}
                >
                  Ver Meus Treinos
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return <div>Tela não encontrada</div>;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-background min-h-screen relative">
      {renderScreen()}
      {renderBottomNav()}
    </div>
  );
}
