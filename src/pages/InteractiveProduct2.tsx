import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, Cpu, Zap, Radio, Shield, Eye, CircuitBoard, Battery } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import robotImage from "@/assets/robot-humanoid.jpg";

interface ComponentInfo {
  id: string;
  name: string;
  nameEn: string;
  icon: React.ReactNode;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  color: string;
  position: number; // 0-6 for circle positions
}

const robotComponents: ComponentInfo[] = [
  {
    id: "perception",
    name: "智能感知系统",
    nameEn: "Perception System",
    icon: <Eye className="w-8 h-8" />,
    description: "集成多模态传感器阵列，实现全方位环境感知与实时分析能力，支持复杂场景下的精准识别与追踪。",
    specs: [
      { label: "视觉传感器", value: "8K RGB-D" },
      { label: "激光雷达", value: "128线" },
      { label: "识别精度", value: "99.7%" },
      { label: "探测距离", value: "150m" }
    ],
    features: ["3D环境重建", "目标追踪", "障碍物检测", "夜视功能"],
    color: "cyan",
    position: 0
  },
  {
    id: "computing",
    name: "AI计算中枢",
    nameEn: "AI Computing Core",
    icon: <Cpu className="w-8 h-8" />,
    description: "配备最新AI芯片与神经网络加速器，提供强大的边缘计算能力，支持实时决策与自主学习。",
    specs: [
      { label: "算力", value: "150 TOPS" },
      { label: "处理器", value: "64核 ARM" },
      { label: "AI引擎", value: "NPU 3.0" },
      { label: "内存", value: "64GB LPDDR5" }
    ],
    features: ["深度学习", "实时推理", "自主决策", "模型优化"],
    color: "purple",
    position: 1
  },
  {
    id: "actuator",
    name: "动力执行单元",
    nameEn: "Actuator System",
    icon: <Zap className="w-8 h-8" />,
    description: "高性能伺服电机与智能关节模组，实现灵活精准的动作控制与力矩输出。",
    specs: [
      { label: "关节数", value: "32自由度" },
      { label: "峰值扭矩", value: "200N·m" },
      { label: "响应时间", value: "<5ms" },
      { label: "位置精度", value: "±0.05°" }
    ],
    features: ["力控反馈", "动态平衡", "轨迹规划", "防碰撞"],
    color: "orange",
    position: 2
  },
  {
    id: "communication",
    name: "通信网络模块",
    nameEn: "Communication Module",
    icon: <Radio className="w-8 h-8" />,
    description: "多协议融合通信系统，支持5G/WiFi6/蓝牙多模连接，确保数据高速稳定传输。",
    specs: [
      { label: "5G速率", value: "10Gbps" },
      { label: "WiFi标准", value: "WiFi 6E" },
      { label: "延迟", value: "<10ms" },
      { label: "覆盖范围", value: "500m" }
    ],
    features: ["多设备协同", "云端互联", "边缘计算", "数据加密"],
    color: "blue",
    position: 3
  },
  {
    id: "power",
    name: "智能电源系统",
    nameEn: "Power Management",
    icon: <Battery className="w-8 h-8" />,
    description: "高能量密度锂电池组与智能电源管理系统，提供长续航与快速充电能力。",
    specs: [
      { label: "电池容量", value: "15kWh" },
      { label: "续航时间", value: "12小时" },
      { label: "充电功率", value: "5kW" },
      { label: "循环寿命", value: "5000次" }
    ],
    features: ["快速充电", "热管理", "安全防护", "电量预测"],
    color: "green",
    position: 4
  },
  {
    id: "structure",
    name: "结构防护系统",
    nameEn: "Structure & Protection",
    icon: <Shield className="w-8 h-8" />,
    description: "航空级铝合金与碳纤维复合材料，提供轻量化与高强度防护性能。",
    specs: [
      { label: "防护等级", value: "IP67" },
      { label: "抗冲击", value: "50G" },
      { label: "工作温度", value: "-40~60℃" },
      { label: "总重量", value: "85kg" }
    ],
    features: ["防水防尘", "抗震动", "散热系统", "模块化"],
    color: "red",
    position: 5
  },
  {
    id: "mobility",
    name: "运动控制系统",
    nameEn: "Mobility Control",
    icon: <CircuitBoard className="w-8 h-8" />,
    description: "先进的双足步态算法与动态平衡控制，实现多种地形的稳定行走。",
    specs: [
      { label: "最大速度", value: "6 km/h" },
      { label: "爬坡能力", value: "35°" },
      { label: "跨越高度", value: "40cm" },
      { label: "步态模式", value: "12种" }
    ],
    features: ["自适应步态", "动态平衡", "地形识别", "跌倒保护"],
    color: "yellow",
    position: 6
  }
];

const InteractiveProduct2 = () => {
  const [selectedComponent, setSelectedComponent] = useState<ComponentInfo | null>(null);

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
      cyan: { bg: "from-cyan-500 to-blue-500", border: "border-cyan-500/50", text: "text-cyan-400", glow: "shadow-[0_0_30px_rgba(6,182,212,0.5)]" },
      purple: { bg: "from-purple-500 to-pink-500", border: "border-purple-500/50", text: "text-purple-400", glow: "shadow-[0_0_30px_rgba(168,85,247,0.5)]" },
      orange: { bg: "from-orange-500 to-red-500", border: "border-orange-500/50", text: "text-orange-400", glow: "shadow-[0_0_30px_rgba(249,115,22,0.5)]" },
      blue: { bg: "from-blue-500 to-indigo-500", border: "border-blue-500/50", text: "text-blue-400", glow: "shadow-[0_0_30px_rgba(59,130,246,0.5)]" },
      green: { bg: "from-green-500 to-emerald-500", border: "border-green-500/50", text: "text-green-400", glow: "shadow-[0_0_30px_rgba(34,197,94,0.5)]" },
      red: { bg: "from-red-500 to-rose-500", border: "border-red-500/50", text: "text-red-400", glow: "shadow-[0_0_30px_rgba(239,68,68,0.5)]" },
      yellow: { bg: "from-yellow-500 to-orange-500", border: "border-yellow-500/50", text: "text-yellow-400", glow: "shadow-[0_0_30px_rgba(234,179,8,0.5)]" }
    };
    return colorMap[color] || colorMap.cyan;
  };

  const getCirclePosition = (position: number, total: number) => {
    const angle = (position / total) * 2 * Math.PI - Math.PI / 2;
    const radius = 45; // percentage
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return { left: `${x}%`, top: `${y}%` };
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            返回产品列表
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              智能机器人技术架构
            </h1>
            <p className="text-xl text-muted-foreground">
              点击环形组件，深入了解每个核心系统
            </p>
          </div>
        </div>
      </section>

      {/* Circular Interactive Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="circular-stage">
            {/* Central Robot Image */}
            <div className="central-robot">
              <div className="central-robot-glow" />
              <div className="central-robot-ring" />
              <img
                src={robotImage}
                alt="Robot"
                className="relative z-10 w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Orbiting Component Buttons */}
            {robotComponents.map((component, index) => {
              const colors = getColorClasses(component.color);
              const position = getCirclePosition(component.position, robotComponents.length);
              const isSelected = selectedComponent?.id === component.id;
              
              return (
                <button
                  key={component.id}
                  className={`orbital-component ${isSelected ? 'orbital-active' : ''}`}
                  style={{
                    left: position.left,
                    top: position.top,
                    animationDelay: `${index * 0.1}s`
                  }}
                  onClick={() => setSelectedComponent(component)}
                >
                  <div className={`orbital-glow ${colors.glow}`} />
                  <div className={`orbital-inner border-2 ${colors.border}`}>
                    <div className={colors.text}>
                      {component.icon}
                    </div>
                  </div>
                  <div className="orbital-label">
                    {component.name}
                  </div>
                  {/* Connection Line to Center */}
                  <div className={`orbital-line ${colors.border}`} />
                </button>
              );
            })}
          </div>

          {/* Detail Panel */}
          {selectedComponent && (
            <>
              <div 
                className="detail-overlay-2"
                onClick={() => setSelectedComponent(null)}
              />
              <div className="detail-panel-2">
                <div className="detail-content-2">
                  {/* Header */}
                  <div className={`detail-header-2 bg-gradient-to-r ${getColorClasses(selectedComponent.color).bg}`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 bg-grid-pattern" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="detail-icon-2">
                          {selectedComponent.icon}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedComponent(null)}
                          className="text-white hover:bg-white/20"
                        >
                          <X className="w-5 h-5" />
                        </Button>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {selectedComponent.name}
                      </h3>
                      <p className="text-white/90 text-sm tracking-wider">
                        {selectedComponent.nameEn}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-8">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {selectedComponent.description}
                    </p>

                    {/* Specs Grid */}
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${getColorClasses(selectedComponent.color).bg}`} />
                        技术参数
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedComponent.specs.map((spec, index) => (
                          <div
                            key={index}
                            className="spec-card-2"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <div className="spec-label-2">{spec.label}</div>
                            <div className={`spec-value-2 ${getColorClasses(selectedComponent.color).text}`}>
                              {spec.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${getColorClasses(selectedComponent.color).bg}`} />
                        核心功能
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedComponent.features.map((feature, index) => (
                          <div
                            key={index}
                            className={`feature-chip-2 border ${getColorClasses(selectedComponent.color).border}`}
                            style={{ animationDelay: `${index * 75}ms` }}
                          >
                            <div className={`w-2 h-2 rounded-full ${getColorClasses(selectedComponent.color).bg}`} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InteractiveProduct2;
