import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, Cpu, Zap, Radio, Shield, Eye, CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import robotImage from "@/assets/robot-humanoid.jpg";

interface ComponentInfo {
  id: string;
  name: string;
  nameEn: string;
  position: { top: string; left: string };
  icon: React.ReactNode;
  description: string;
  specs: string[];
  features: string[];
  gradient: string;
}

const robotComponents: ComponentInfo[] = [
  {
    id: "head",
    name: "智能感知系统",
    nameEn: "Intelligent Perception System",
    position: { top: "15%", left: "50%" },
    icon: <Eye className="w-6 h-6" />,
    description: "集成高精度视觉传感器与环境感知模块，实现360°全方位环境识别与目标追踪。",
    specs: ["8K分辨率摄像头", "激光雷达", "红外热成像"],
    features: ["实时物体识别", "3D环境建模", "夜视能力", "面部识别"],
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: "chest",
    name: "核心处理单元",
    nameEn: "Core Processing Unit",
    position: { top: "40%", left: "50%" },
    icon: <Cpu className="w-6 h-6" />,
    description: "搭载最新一代AI芯片，提供强大的边缘计算能力和实时决策支持。",
    specs: ["算力: 100TOPS", "内存: 32GB", "存储: 512GB NVMe"],
    features: ["深度学习加速", "多任务并行", "低功耗设计", "热管理系统"],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: "left-arm",
    name: "左臂驱动系统",
    nameEn: "Left Arm Actuator",
    position: { top: "45%", left: "25%" },
    icon: <Zap className="w-6 h-6" />,
    description: "高精度伺服电机组成的多自由度机械臂，支持精密操作和重载作业。",
    specs: ["自由度: 7DOF", "负载: 10kg", "精度: ±0.1mm"],
    features: ["力反馈控制", "碰撞检测", "路径规划", "快速响应"],
    gradient: "from-orange-500 to-red-600"
  },
  {
    id: "right-arm",
    name: "右臂驱动系统",
    nameEn: "Right Arm Actuator",
    position: { top: "45%", left: "75%" },
    icon: <Zap className="w-6 h-6" />,
    description: "与左臂对称设计，支持双臂协同作业，可完成复杂装配任务。",
    specs: ["自由度: 7DOF", "负载: 10kg", "精度: ±0.1mm"],
    features: ["双臂协同", "工具快换", "安全限位", "自适应抓取"],
    gradient: "from-green-500 to-emerald-600"
  },
  {
    id: "legs",
    name: "运动控制系统",
    nameEn: "Motion Control System",
    position: { top: "75%", left: "50%" },
    icon: <CircuitBoard className="w-6 h-6" />,
    description: "先进的双足行走系统，实现稳定平衡和复杂地形适应能力。",
    specs: ["步速: 0-5km/h", "爬坡: 30°", "续航: 8小时"],
    features: ["动态平衡", "地形适应", "姿态控制", "低能耗行走"],
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    id: "communication",
    name: "通信模块",
    nameEn: "Communication Module",
    position: { top: "30%", left: "85%" },
    icon: <Radio className="w-6 h-6" />,
    description: "多协议通信系统，支持远程控制和数据实时传输。",
    specs: ["5G/WiFi6", "蓝牙5.2", "LoRa"],
    features: ["云端互联", "边缘计算", "OTA升级", "加密传输"],
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    id: "power",
    name: "能源管理系统",
    nameEn: "Power Management",
    position: { top: "55%", left: "15%" },
    icon: <Shield className="w-6 h-6" />,
    description: "智能电池管理系统，提供长续航和快速充电能力。",
    specs: ["容量: 10kWh", "充电: 1小时", "寿命: 3000次"],
    features: ["快充技术", "智能调度", "安全保护", "电量监测"],
    gradient: "from-rose-500 to-pink-600"
  }
];

const InteractiveProduct = () => {
  const [selectedComponent, setSelectedComponent] = useState<ComponentInfo | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            返回产品列表
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              交互式产品展示
            </h1>
            <p className="text-xl text-muted-foreground">
              点击机器人各部位，探索每个组件的强大功能
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Robot Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
            {/* Robot Image Container */}
            <div className="relative aspect-[3/4] md:aspect-[4/3] w-full max-w-4xl mx-auto interactive-robot-container">
              <img
                src={robotImage}
                alt="Interactive Robot"
                className="w-full h-full object-contain"
              />
              
              {/* Interactive Hotspots */}
              {robotComponents.map((component) => (
                <button
                  key={component.id}
                  className={`hotspot ${hoveredId === component.id ? 'hotspot-active' : ''}`}
                  style={{
                    top: component.position.top,
                    left: component.position.left,
                  }}
                  onClick={() => setSelectedComponent(component)}
                  onMouseEnter={() => setHoveredId(component.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="hotspot-pulse" />
                  <div className="hotspot-inner">
                    {component.icon}
                  </div>
                  {hoveredId === component.id && (
                    <div className="hotspot-label">
                      {component.name}
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Component Detail Panel */}
            {selectedComponent && (
              <>
                <div 
                  className="component-detail-overlay"
                  onClick={() => setSelectedComponent(null)}
                />
                <div className="component-detail-panel">
                  <div className="component-detail-content">
                    {/* Header */}
                    <div className={`component-detail-header bg-gradient-to-r ${selectedComponent.gradient}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="component-detail-icon">
                            {selectedComponent.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {selectedComponent.name}
                            </h3>
                            <p className="text-white/80 text-sm">
                              {selectedComponent.nameEn}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedComponent(null)}
                          className="text-white hover:bg-white/20 -mr-2 -mt-2"
                        >
                          <X className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                      <div>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedComponent.description}
                        </p>
                      </div>

                      {/* Specs */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <div className="w-1 h-4 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                          技术规格
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {selectedComponent.specs.map((spec, index) => (
                            <div
                              key={index}
                              className="spec-item"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-sm text-foreground">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                          核心特性
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedComponent.features.map((feature, index) => (
                            <div
                              key={index}
                              className="feature-badge"
                              style={{ animationDelay: `${index * 75}ms` }}
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        className="w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity"
                        size="lg"
                      >
                        了解更多详情
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InteractiveProduct;
