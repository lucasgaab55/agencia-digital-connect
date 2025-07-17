
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Download, Filter, TrendingUp, Target, MousePointer } from "lucide-react";

export const Results = () => {
  const performanceData = [
    { name: "Sem 1", impressoes: 12000, cliques: 450, conversoes: 28 },
    { name: "Sem 2", impressoes: 15000, cliques: 580, conversoes: 35 },
    { name: "Sem 3", impressoes: 18000, cliques: 720, conversoes: 42 },
    { name: "Sem 4", impressoes: 16500, cliques: 650, conversoes: 38 },
  ];

  const campaignData = [
    { name: "Black Friday", gasto: 2500, receita: 8500, roas: 3.4, status: "Ativa" },
    { name: "Liquidação Janeiro", gasto: 1800, receita: 7200, roas: 4.0, status: "Ativa" },
    { name: "Lançamento Produto", gasto: 3200, receita: 9600, roas: 3.0, status: "Pausada" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header com filtros */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Resultados de Campanhas</h1>
          <p className="text-slate-600 mt-1">Acompanhe a performance das suas campanhas em tempo real</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Últimos 7 dias</SelectItem>
              <SelectItem value="30days">Últimos 30 dias</SelectItem>
              <SelectItem value="90days">Últimos 90 dias</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Gráfico de Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span>Performance Semanal</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: 'none', 
                  borderRadius: '12px', 
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
                }}
              />
              <Line 
                type="monotone" 
                dataKey="impressoes" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                name="Impressões"
              />
              <Line 
                type="monotone" 
                dataKey="cliques" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
                name="Cliques"
              />
              <Line 
                type="monotone" 
                dataKey="conversoes" 
                stroke="#10B981" 
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                name="Conversões"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Campanhas Ativas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-purple-600" />
            <span>Campanhas Ativas</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaignData.map((campaign, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-semibold text-slate-800">{campaign.name}</h4>
                    <Badge variant={campaign.status === "Ativa" ? "default" : "secondary"}>
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-6 mt-2 text-sm text-slate-600">
                    <span>Gasto: R$ {campaign.gasto.toLocaleString()}</span>
                    <span>Receita: R$ {campaign.receita.toLocaleString()}</span>
                    <span className="font-medium text-green-600">ROAS: {campaign.roas}x</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-bold text-slate-800">
                    {((campaign.receita - campaign.gasto) / campaign.gasto * 100).toFixed(1)}%
                  </div>
                  <div className="text-sm text-slate-500">ROI</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gráfico de Gastos vs Receita */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MousePointer className="w-5 h-5 text-green-600" />
            <span>Gastos vs Receita</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: 'none', 
                  borderRadius: '12px', 
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
                }}
              />
              <Bar dataKey="gasto" fill="#EF4444" name="Gasto" radius={[4, 4, 0, 0]} />
              <Bar dataKey="receita" fill="#10B981" name="Receita" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
