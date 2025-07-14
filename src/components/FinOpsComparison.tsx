
import React from 'react';
import { Card } from '@/components/ui/card';

interface FeatureRowProps {
  feature: string;
  description: string;
  essential: boolean | string;
  pro: boolean | string;
  ultimate: boolean | string;
}

const FeatureRow: React.FC<FeatureRowProps> = ({ feature, description, essential, pro, ultimate }) => {
  const renderValue = (value: boolean | string) => {
    if (typeof value === 'string') {
      return <span className="text-yellow-600 font-bold text-sm">{value}</span>;
    }
    return value ? (
      <span className="text-green-700 text-xl font-bold">✓</span>
    ) : (
      <span className="text-red-500 text-xl font-bold">✗</span>
    );
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <td className="p-4 font-semibold text-gray-800 border-r border-gray-200 bg-white relative group">
        {feature}
        <span className="inline-block w-4 h-4 bg-gray-500 text-white rounded-full text-center leading-4 text-xs font-bold ml-2 cursor-help transition-all duration-300 hover:bg-green-700 hover:scale-110">
          i
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-3 rounded-lg text-sm font-normal whitespace-normal max-w-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-lg">
            {description}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-6 border-transparent border-t-gray-800"></div>
          </div>
        </span>
      </td>
      <td className="p-4 text-center font-semibold border-r border-gray-200">{renderValue(essential)}</td>
      <td className="p-4 text-center font-semibold border-r border-gray-200">{renderValue(pro)}</td>
      <td className="p-4 text-center font-semibold">{renderValue(ultimate)}</td>
    </tr>
  );
};

const PhaseHeader: React.FC<{ title: string }> = ({ title }) => (
  <tr>
    <td colSpan={4} className="bg-gradient-to-r from-green-800 to-green-900 text-white font-bold text-lg p-4">
      {title}
    </td>
  </tr>
);

const FinOpsComparison: React.FC = () => {
  const onboardingFeatures = [
    {
      feature: "Entendimento da Cloud",
      description: "Análise completa da infraestrutura cloud atual, identificando recursos, custos e oportunidades de otimização",
      essential: true,
      pro: true,
      ultimate: true
    },
    {
      feature: "Estrutura de Contas",
      description: "Organização e estruturação das contas cloud para melhor governança e controle de custos",
      essential: true,
      pro: true,
      ultimate: true
    },
    {
      feature: "Consumo Mensal",
      description: "Relatório detalhado do consumo mensal de recursos cloud com análise de tendências",
      essential: true,
      pro: true,
      ultimate: true
    },
    {
      feature: "Política de Tags",
      description: "Definição e implementação de políticas de tagueamento para organização e rastreamento de custos",
      essential: false,
      pro: true,
      ultimate: true
    }
  ];

  const foundationFeatures = [
    {
      feature: "Setup de Alarmes",
      description: "Configuração de alertas automáticos para monitoramento de custos e anomalias de gastos",
      essential: true,
      pro: true,
      ultimate: true
    },
    {
      feature: "Assess Maturidade",
      description: "Avaliação do nível de maturidade FinOps da organização com base em frameworks reconhecidos",
      essential: true,
      pro: true,
      ultimate: true
    },
    {
      feature: "Plano de Maturidade",
      description: "Além do Assess, entregamos o plano pro cliente no módulo Spaces para ele fazer o acompanhamento",
      essential: false,
      pro: true,
      ultimate: true
    },
    {
      feature: "Criação Dash Custom.",
      description: "Desenvolvimento de dashboards personalizados para visualização específica de métricas de negócio",
      essential: false,
      pro: true,
      ultimate: true
    },
    {
      feature: "Setup Automações",
      description: "Setup de automações seguindo o módulo Autofix da Pier para otimização automática de recursos",
      essential: false,
      pro: true,
      ultimate: true
    },
    {
      feature: "Tagueamento",
      description: "Implementação prática da política de tags em todos os recursos cloud da organização",
      essential: false,
      pro: true,
      ultimate: true
    },
    {
      feature: "Revisão Pilar de Custos",
      description: "Análise detalhada seguindo o pilar de otimização de custos do Well-Architected Framework",
      essential: false,
      pro: true,
      ultimate: true
    }
  ];

  const operationFeatures = [
    {
      feature: "Criação de Novos Dashs",
      description: "Desenvolvimento contínuo de novos dashboards conforme necessidades emergentes do negócio",
      essential: false,
      pro: false,
      ultimate: true
    },
    {
      feature: "Suporte Dashboards",
      description: "Suporte técnico e manutenção dos dashboards existentes com atualizações e correções",
      essential: false,
      pro: true,
      ultimate: true
    },
    {
      feature: "Suporte Alertas",
      description: "Manutenção e ajustes dos alertas configurados, incluindo novos alertas conforme necessário",
      essential: false,
      pro: true,
      ultimate: true
    },
    {
      feature: "Gestão Maturidade",
      description: "Além de atribuir e planejar, a ideia aqui é gerenciar a maturidade do cliente, cobrar pelas ações etc, acompanhar e reportar o estágio dele",
      essential: false,
      pro: false,
      ultimate: true
    },
    {
      feature: "Atendimento Consultivo",
      description: "Suporte especializado com consultores FinOps para orientação estratégica e resolução de questões",
      essential: true,
      pro: true,
      ultimate: true
    },
    {
      feature: "Recomendações automatizadas",
      description: "Sistema automatizado de recomendações de otimização baseado em análise contínua dos recursos",
      essential: true,
      pro: true,
      ultimate: true
    },
    {
      feature: "Recomendações dos especialistas",
      description: "Recomendações personalizadas elaboradas por especialistas FinOps com base na análise manual",
      essential: false,
      pro: true,
      ultimate: true
    },
    {
      feature: "Commitments",
      description: "Gestão e otimização de Reserved Instances, Savings Plans e outros compromissos de longo prazo",
      essential: true,
      pro: true,
      ultimate: true
    },
    {
      feature: "Cursos gravados",
      description: "Acesso a biblioteca de cursos gravados sobre FinOps, cloud economics e melhores práticas",
      essential: true,
      pro: true,
      ultimate: true
    },
    {
      feature: "Requisição de Serviços",
      description: "Portal para solicitação de serviços adicionais e customizações específicas",
      essential: false,
      pro: true,
      ultimate: true
    },
    {
      feature: "Apresent. Exec",
      description: "Apresentações executivas periódicas com resumo de resultados e recomendações estratégicas",
      essential: false,
      pro: "Mensal",
      ultimate: "Semanal"
    },
    {
      feature: "Webinars",
      description: "Participação em webinars exclusivos sobre tendências, novidades e casos de uso em FinOps",
      essential: false,
      pro: true,
      ultimate: true
    },
    {
      feature: "Automações Agendadas",
      description: "Automações pelo Autofix que podem ser de smart start-stop, scheduling scale",
      essential: false,
      pro: true,
      ultimate: true
    },
    {
      feature: "Automações inteligentes",
      description: "Ajuste de automações do Autofix com CCA, voltados a EBS, ASG, S3, RDS, além de migração automática de GP2 p GP3, remoção de endpoint VPC inativo e IP elástico desatachado",
      essential: false,
      pro: false,
      ultimate: true
    },
    {
      feature: "Workshop Custom.",
      description: "Workshops personalizados e treinamentos específicos para as necessidades da organização",
      essential: false,
      pro: false,
      ultimate: true
    },
    {
      feature: "Suporte Métricas Custom",
      description: "Desenvolvimento e suporte para métricas customizadas específicas do negócio",
      essential: false,
      pro: false,
      ultimate: true
    },
    {
      feature: "Chargeback",
      description: "Sistema de chargeback para alocação precisa de custos por departamento, projeto ou centro de custo",
      essential: false,
      pro: false,
      ultimate: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-5">
      <Card className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-800 to-green-900 text-white p-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Comparativo de Planos FinOps</h1>
          <p className="text-lg opacity-90">Escolha o plano ideal para sua jornada de otimização de custos na nuvem</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="bg-gray-50 p-5 text-left font-bold text-xl border-b-4 border-gray-400 sticky top-0 z-10" style={{width: '40%'}}>
                  Recursos
                </th>
                <th className="bg-gray-50 p-5 text-center font-bold text-xl text-gray-600 border-b-4 border-gray-400 sticky top-0 z-10" style={{width: '20%'}}>
                  FinOps Essential
                </th>
                <th className="bg-gray-50 p-5 text-center font-bold text-xl text-green-800 border-b-4 border-green-800 sticky top-0 z-10" style={{width: '20%'}}>
                  FinOps Pro
                </th>
                <th className="bg-gray-50 p-5 text-center font-bold text-xl text-yellow-600 border-b-4 border-yellow-500 sticky top-0 z-10 relative" style={{width: '20%'}}>
                  FinOps Ultimate
                  <span className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold ml-2 animate-pulse">
                    Em breve
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <PhaseHeader title="Onboarding" />
              {onboardingFeatures.map((feature, index) => (
                <FeatureRow key={`onboarding-${index}`} {...feature} />
              ))}
              
              <PhaseHeader title="Foundation" />
              {foundationFeatures.map((feature, index) => (
                <FeatureRow key={`foundation-${index}`} {...feature} />
              ))}
              
              <PhaseHeader title="Operation" />
              {operationFeatures.map((feature, index) => (
                <FeatureRow key={`operation-${index}`} {...feature} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-8 text-center text-gray-500 border-t border-gray-200">
          <p className="mb-2">
            Desenvolvido por <span className="text-green-800 font-bold text-lg">Darede</span>
          </p>
          <p>Especialistas em FinOps e otimização de custos na nuvem</p>
        </div>
      </Card>
    </div>
  );
};

export default FinOpsComparison;
