import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Cpu, Zap, Layers, Brain, Target, Shield } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const categories = [
    { id: 'all', name: '全部产品' },
    { id: 'humanoid', name: '人形机器人' },
    { id: 'quadruped', name: '四足机器人' },
    { id: 'wheel-leg', name: '轮腿机器人' },
    { id: 'components', name: '核心部件' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.categoryId === selectedCategory);

  // 产品功能模块
  const featureModules = [
    {
      icon: Brain,
      title: 'AI智能控制',
      description: '深度学习算法，实时环境感知与决策',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: '高性能驱动',
      description: '60-100Nm大扭矩关节，精准运动控制',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Layers,
      title: '模块化设计',
      description: '快速配置，灵活适应多场景需求',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Target,
      title: '精密定位',
      description: '±0.05°重复定位精度，工业级可靠',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: '防护系统',
      description: 'IP67防护等级，全天候作业能力',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Cpu,
      title: '边缘计算',
      description: '本地AI推理，毫秒级响应速度',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  // 视频展示数据
  const videoShowcase = [
    {
      title: '人形机器人运动演示',
      description: '41自由度全身协调运动',
      thumbnail: '/src/assets/robot-humanoid.jpg',
    },
    {
      title: '四足机器人地形适应',
      description: '复杂地形自主导航与越障',
      thumbnail: '/src/assets/robot-quadruped.jpg',
    },
    {
      title: '轮腿机器人高速移动',
      description: '轮腿混合驱动模式切换',
      thumbnail: '/src/assets/robot-wheelleg.jpg',
    },
    {
      title: '工业场景应用',
      description: '电力巡检与数据采集',
      thumbnail: '/src/assets/app-power.jpg',
    },
  ];

  const handleVideoHover = (index: number, isHovering: boolean) => {
    setHoveredVideo(isHovering ? index : null);
    if (videoRefs.current[index]) {
      if (isHovering) {
        videoRefs.current[index]?.play();
      } else {
        videoRefs.current[index]?.pause();
        if (videoRefs.current[index]) {
          videoRefs.current[index]!.currentTime = 0;
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
              产品矩阵
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              突破性能边界 · 重新定义智能机器人
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border sticky top-16 z-40 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  'transition-all duration-300',
                  selectedCategory === category.id && 'glow-primary'
                )}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* 1. 产品功能模块矩阵 - 六边形蜂窝布局 */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">核心技术模块</h2>
            <p className="text-lg text-muted-foreground">六大核心能力 · 打造顶尖机器人平台</p>
          </div>
          
          <div className="hexagon-grid">
            {featureModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div
                  key={index}
                  className="hexagon-item group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="hexagon-content">
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                      module.color
                    )}></div>
                    <div className={cn(
                      "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500",
                      module.color
                    )}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                    <div className={cn(
                      "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500",
                      module.color
                    )}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. 产品视频展示 - 悬停播放交互 */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">动态演示</h2>
            <p className="text-lg text-muted-foreground">悬停查看机器人运动实况</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoShowcase.map((video, index) => (
              <div
                key={index}
                className="video-showcase-item group"
                onMouseEnter={() => handleVideoHover(index, true)}
                onMouseLeave={() => handleVideoHover(index, false)}
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                  {/* 占位图 */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover transition-all duration-500",
                      hoveredVideo === index ? "scale-110 blur-sm opacity-30" : "scale-100"
                    )}
                  />
                  
                  {/* 视频层 */}
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                      hoveredVideo === index ? "opacity-100" : "opacity-0"
                    )}
                    loop
                    muted
                    playsInline
                    src={video.thumbnail}
                  />

                  {/* 发光边框效果 */}
                  <div className={cn(
                    "absolute inset-0 rounded-2xl border-2 border-primary transition-all duration-500",
                    hoveredVideo === index ? "opacity-100 shadow-glow-lg" : "opacity-0"
                  )}></div>

                  {/* 播放指示器 */}
                  <div className={cn(
                    "absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center transition-all duration-500",
                    hoveredVideo === index ? "scale-0" : "scale-100"
                  )}>
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1"></div>
                  </div>

                  {/* 信息层 */}
                  <div className={cn(
                    "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent transition-all duration-500",
                    hoveredVideo === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  )}>
                    <h3 className="text-xl font-bold text-foreground mb-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </div>
                </div>

                {/* 外围发光圈 */}
                <div className={cn(
                  "absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-xl transition-opacity duration-500 -z-10",
                  hoveredVideo === index && "opacity-30"
                )}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 产品详细参数 - 3D翻转卡片 */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">产品参数</h2>
            <p className="text-lg text-muted-foreground">悬停查看详细规格</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-spec-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="product-spec-inner">
                  {/* 正面 - 产品图片 */}
                  <div className="product-spec-front">
                    <div className="relative h-full">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs text-primary mb-3">
                          {product.category}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.nameEn}</p>
                      </div>
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                        <Layers className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* 背面 - 详细参数 */}
                  <div className="product-spec-back">
                    <div className="p-6 h-full flex flex-col">
                      <h3 className="text-xl font-bold text-foreground mb-4">{product.name}</h3>
                      <div className="flex-1 space-y-3 mb-6">
                        {product.detailedSpecs.slice(0, 6).map((spec, idx) => (
                          <div key={idx} className="flex justify-between items-center py-2 border-b border-border/30">
                            <span className="text-sm text-muted-foreground">{spec.label}</span>
                            <span className="text-sm font-semibold text-foreground">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                      <Link to={`/products/${product.id}`}>
                        <Button variant="hero" className="w-full group-hover:glow-primary">
                          查看详情
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="mx-auto max-w-7xl text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            需要定制化解决方案？
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            我们的专家团队将为您量身打造最适合的机器人系统
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="glow-primary">
              联系销售
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/support">技术支持</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
