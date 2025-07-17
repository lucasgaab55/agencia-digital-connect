
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarContent, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Send, Paperclip, Phone, Video, Search } from "lucide-react";
import { useState } from "react";

export const Communication = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const chats = [
    {
      id: 1,
      name: "Equipe Geral",
      lastMessage: "Relatório semanal está pronto para revisão",
      lastTime: "14:30",
      unread: 2,
      avatar: "EG"
    },
    {
      id: 2,
      name: "Criação de Vídeos",
      lastMessage: "Novo vídeo Black Friday finalizado",
      lastTime: "10:15",
      unread: 0,
      avatar: "CV"
    },
    {
      id: 3,
      name: "Tráfego Pago",
      lastMessage: "CPC reduziu 12% esta semana",
      lastTime: "Ontem",
      unread: 1,
      avatar: "TP"
    },
    {
      id: 4,
      name: "Social Media",
      lastMessage: "Cronograma de janeiro aprovado",
      lastTime: "Ontem",
      unread: 0,
      avatar: "SM"
    }
  ];

  const messages = [
    {
      id: 1,
      user: "Ana Paula",
      avatar: "AP",
      message: "Bom dia! O relatório semanal já está disponível na aba de Resultados.",
      time: "09:30",
      isAgency: true
    },
    {
      id: 2,
      user: "João Silva",
      avatar: "JS",
      message: "Perfeito! Vou dar uma olhada agora. Os números estão bem melhores que a semana passada.",
      time: "09:45",
      isAgency: false
    },
    {
      id: 3,
      user: "Carlos Mendes",
      avatar: "CM",
      message: "Conseguimos reduzir o CPC em 12% mantendo o mesmo volume de conversões. Muito bom resultado!",
      time: "10:20",
      isAgency: true
    },
    {
      id: 4,
      user: "João Silva",
      avatar: "JS",
      message: "Excelente trabalho pessoal! Quando sai o próximo vídeo da campanha?",
      time: "10:25",
      isAgency: false
    },
    {
      id: 5,
      user: "Marina Costa",
      avatar: "MC",
      message: "O vídeo está em fase de finalização. Deve ficar pronto até quinta-feira para aprovação.",
      time: "14:30",
      isAgency: true
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Enviando mensagem:", newMessage);
      setNewMessage("");
      // Aqui você implementaria a lógica de envio
    }
  };

  const selectedChatData = chats.find(chat => chat.id === selectedChat);

  return (
    <div className="p-6 h-[calc(100vh-120px)]">
      <div className="flex flex-col lg:flex-row h-full space-y-6 lg:space-y-0 lg:space-x-6">
        
        {/* Sidebar with chat list */}
        <Card className="w-full lg:w-80 flex flex-col">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <span>Conversas</span>
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input placeholder="Buscar conversas..." className="pl-10" />
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 p-0">
            <div className="space-y-1">
              {chats.map(chat => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`p-4 cursor-pointer hover:bg-slate-50 transition-colors ${
                    selectedChat === chat.id ? 'bg-blue-50 border-r-2 border-blue-600' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarContent className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        {chat.avatar}
                      </AvatarContent>
                      <AvatarFallback>{chat.avatar}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-slate-800 truncate">{chat.name}</h4>
                        <span className="text-xs text-slate-500">{chat.lastTime}</span>
                      </div>
                      <p className="text-sm text-slate-600 truncate mt-1">{chat.lastMessage}</p>
                    </div>
                    
                    {chat.unread > 0 && (
                      <Badge className="bg-blue-600 text-white text-xs">
                        {chat.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main chat area */}
        <Card className="flex-1 flex flex-col">
          {/* Chat header */}
          <CardHeader className="border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarContent className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    {selectedChatData?.avatar}
                  </AvatarContent>
                  <AvatarFallback>{selectedChatData?.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-slate-800">{selectedChatData?.name}</h3>
                  <p className="text-sm text-slate-500">Online agora</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Video className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.isAgency ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-[70%] ${
                    message.isAgency ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                  }`}>
                    <Avatar className="w-8 h-8">
                      <AvatarContent className={`text-white text-sm ${
                        message.isAgency 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                          : 'bg-gradient-to-br from-green-500 to-blue-500'
                      }`}>
                        {message.avatar}
                      </AvatarContent>
                      <AvatarFallback>{message.avatar}</AvatarFallback>
                    </Avatar>
                    
                    <div className={`${message.isAgency ? 'text-left' : 'text-right'}`}>
                      <div className={`rounded-2xl p-3 ${
                        message.isAgency 
                          ? 'bg-slate-100 text-slate-800' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      }`}>
                        <p className="text-sm">{message.message}</p>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-slate-500">{message.user}</span>
                        <span className="text-xs text-slate-400">{message.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Message input */}
          <div className="p-4 border-t border-slate-200">
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="icon">
                <Paperclip className="w-4 h-4" />
              </Button>
              
              <div className="flex-1 relative">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="pr-12"
                />
              </div>
              
              <Button 
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="bg-gradient-to-r from-blue-600 to-purple-600"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
