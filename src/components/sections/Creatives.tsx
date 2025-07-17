
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, MessageSquare, ThumbsUp, Clock, Video, Filter } from "lucide-react";
import { useState } from "react";

export const Creatives = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [comment, setComment] = useState("");

  const videos = [
    {
      id: 1,
      title: "Black Friday - Produto Principal",
      status: "Para Aprovação",
      thumbnail: "/placeholder.svg",
      duration: "0:30",
      created: "2024-01-20",
      feedback: [
        { user: "Agência", message: "Primeira versão pronta para análise", time: "10:30" },
        { user: "Cliente", message: "Gostei do conceito, mas poderia ser mais dinâmico", time: "14:20" }
      ]
    },
    {
      id: 2,
      title: "Testemunial Cliente - Maria",
      status: "Aprovado",
      thumbnail: "/placeholder.svg",
      duration: "1:15",
      created: "2024-01-18",
      feedback: [
        { user: "Cliente", message: "Perfeito! Pode usar", time: "09:15" }
      ]
    },
    {
      id: 3,
      title: "Produto em Uso - Tutorial",
      status: "Em Produção",
      thumbnail: "/placeholder.svg",
      duration: "2:00",
      created: "2024-01-22",
      feedback: []
    },
    {
      id: 4,
      title: "Campanha Janeiro - Versão A",
      status: "Ajustes Solicitados",
      thumbnail: "/placeholder.svg",
      duration: "0:45",
      created: "2024-01-19",
      feedback: [
        { user: "Cliente", message: "O texto no final precisa ser maior", time: "16:45" },
        { user: "Agência", message: "Ajuste realizado, nova versão em breve", time: "17:10" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Para Aprovação": return "bg-yellow-500";
      case "Aprovado": return "bg-green-500";
      case "Em Produção": return "bg-blue-500";
      case "Ajustes Solicitados": return "bg-orange-500";
      default: return "bg-slate-500";
    }
  };

  const handleApproval = (videoId: number, approved: boolean) => {
    console.log(`Video ${videoId} ${approved ? 'aprovado' : 'rejeitado'}`);
    // Aqui você implementaria a lógica de aprovação
  };

  const handleComment = (videoId: number) => {
    if (comment.trim()) {
      console.log(`Comentário para video ${videoId}: ${comment}`);
      setComment("");
      // Aqui você implementaria a lógica de comentário
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Central de Criativos</h1>
          <p className="text-slate-600 mt-1">Acompanhe e aprove os vídeos da sua campanha</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="pending">Para Aprovação</SelectItem>
              <SelectItem value="approved">Aprovados</SelectItem>
              <SelectItem value="production">Em Produção</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <CardHeader className="p-0">
              <div className="relative group cursor-pointer" onClick={() => setSelectedVideo(video.id)}>
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute top-3 left-3">
                  <Badge className={`${getStatusColor(video.status)} text-white`}>
                    {video.status}
                  </Badge>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-white text-sm">
                  {video.duration}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-4">
              <h3 className="font-semibold text-slate-800 mb-2">{video.title}</h3>
              <p className="text-sm text-slate-500 mb-4">Criado em {video.created}</p>
              
              {video.status === "Para Aprovação" && (
                <div className="flex space-x-2 mb-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={() => handleApproval(video.id, true)}
                  >
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Aprovar
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleApproval(video.id, false)}
                  >
                    Pedir Ajuste
                  </Button>
                </div>
              )}
              
              {/* Feedback Section */}
              {video.feedback.length > 0 && (
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium text-slate-700 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Histórico de Feedback
                  </h4>
                  <div className="space-y-2 max-h-24 overflow-y-auto">
                    {video.feedback.map((feedback, index) => (
                      <div key={index} className="text-xs bg-slate-50 p-2 rounded">
                        <div className="flex justify-between items-start">
                          <span className="font-medium text-slate-700">{feedback.user}:</span>
                          <span className="text-slate-400">{feedback.time}</span>
                        </div>
                        <p className="text-slate-600 mt-1">{feedback.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Comment Input */}
              <div className="space-y-2">
                <Textarea
                  placeholder="Adicione um comentário..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="text-sm"
                  rows={2}
                />
                <Button 
                  size="sm" 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleComment(video.id)}
                  disabled={!comment.trim()}
                >
                  Enviar Comentário
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Video className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">12</div>
            <div className="text-sm text-slate-600">Total de Vídeos</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">3</div>
            <div className="text-sm text-slate-600">Para Aprovação</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <ThumbsUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">8</div>
            <div className="text-sm text-slate-600">Aprovados</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Play className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">1</div>
            <div className="text-sm text-slate-600">Em Produção</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
