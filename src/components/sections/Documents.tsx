
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  Upload, 
  Folder,
  Eye,
  Calendar,
  User
} from "lucide-react";

export const Documents = () => {
  const documents = [
    {
      id: 1,
      name: "Contrato de Serviços - 2024",
      type: "PDF",
      size: "2.4 MB",
      uploadedBy: "Agência",
      uploadDate: "2024-01-15",
      category: "Contratos",
      description: "Contrato principal de prestação de serviços"
    },
    {
      id: 2,
      name: "Briefing Campanha Black Friday",
      type: "PDF",
      size: "1.1 MB",
      uploadedBy: "Cliente",
      uploadDate: "2024-01-20",
      category: "Briefings",
      description: "Diretrizes para campanha promocional"
    },
    {
      id: 3,
      name: "Manual da Marca - Logotipos",
      type: "ZIP",
      size: "15.8 MB",
      uploadedBy: "Cliente",
      uploadDate: "2024-01-18",
      category: "Identidade Visual",
      description: "Arquivos de logo em diferentes formatos"
    },
    {
      id: 4,
      name: "Relatório Mensal - Dezembro",
      type: "PDF",
      size: "3.2 MB",
      uploadedBy: "Agência",
      uploadDate: "2024-01-05",
      category: "Relatórios",
      description: "Relatório completo de performance"
    },
    {
      id: 5,
      name: "Personas e Público-alvo",
      type: "PDF",
      size: "900 KB",
      uploadedBy: "Agência",
      uploadDate: "2024-01-12",
      category: "Estratégia",
      description: "Definição de personas e segmentação"
    },
    {
      id: 6,
      name: "Cronograma 2024 - Q1",
      type: "Excel",
      size: "450 KB",
      uploadedBy: "Agência",
      uploadDate: "2024-01-22",
      category: "Planejamento",
      description: "Cronograma detalhado primeiro trimestre"
    }
  ];

  const categories = [
    { name: "Contratos", count: 1, color: "bg-blue-600" },
    { name: "Briefings", count: 1, color: "bg-purple-600" },
    { name: "Identidade Visual", count: 1, color: "bg-pink-600" },
    { name: "Relatórios", count: 1, color: "bg-green-600" },
    { name: "Estratégia", count: 1, color: "bg-orange-600" },
    { name: "Planejamento", count: 1, color: "bg-indigo-600" }
  ];

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="w-8 h-8 text-red-600" />;
      case 'excel':
        return <FileText className="w-8 h-8 text-green-600" />;
      case 'zip':
        return <FileText className="w-8 h-8 text-yellow-600" />;
      default:
        return <FileText className="w-8 h-8 text-slate-600" />;
    }
  };

  const formatFileSize = (size: string) => {
    return size;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Central de Documentos</h1>
          <p className="text-slate-600 mt-1">Acesse contratos, briefings e arquivos importantes</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input 
              placeholder="Buscar documentos..." 
              className="pl-10 w-64"
            />
          </div>
          
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="contracts">Contratos</SelectItem>
              <SelectItem value="briefings">Briefings</SelectItem>
              <SelectItem value="reports">Relatórios</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <Folder className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-slate-800 text-sm">{category.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{category.count} arquivo{category.count !== 1 ? 's' : ''}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Documents List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <span>Documentos Recentes</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {getFileIcon(doc.type)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-800 truncate">{doc.name}</h4>
                    <p className="text-sm text-slate-600 mt-1">{doc.description}</p>
                    
                    <div className="flex items-center space-x-4 mt-2 text-xs text-slate-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{doc.uploadedBy}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(doc.uploadDate)}</span>
                      </div>
                      <span>{formatFileSize(doc.size)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="text-xs">
                    {doc.category}
                  </Badge>
                  
                  <Badge variant="secondary" className="text-xs">
                    {doc.type}
                  </Badge>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Storage Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">24</div>
            <div className="text-sm text-slate-600">Total de Arquivos</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Upload className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">156 MB</div>
            <div className="text-sm text-slate-600">Espaço Utilizado</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Folder className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-800">6</div>
            <div className="text-sm text-slate-600">Categorias</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
