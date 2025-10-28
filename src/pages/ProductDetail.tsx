import { useParams, Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Download, ArrowLeft, Zap, Brain, Shield, Cpu, Activity, Radio } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { getProductById } from '@/data/products';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">产品不存在</h1>
          <Button asChild variant="outline">
            <Link to="/products">返回产品列表</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('申请已提交！我们将尽快与您联系');
  };

  const handleVideoHover = (index: number, isHovering: boolean) => {
    setHoveredVideo(isHovering ? index : null);
    const video = videoRefs.current[index];
    if (video) {
      if (isHovering) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  // 功能模块数据
  const featureModules = [
    { icon: Brain, title: '智能感知', description: '多传感器融合，实时环境理解', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Zap, title: '快速响应', description: '毫秒级控制延迟，精准执行', gradient: 'from-purple-500 to-pink-500' },
    { icon: Shield, title: '安全防护', description: '多重安全机制，全方位保护', gradient: 'from-green-500 to-emerald-500' },
    { icon: Cpu, title: '强大算力', description: '边缘计算架构，高效处理', gradient: 'from-orange-500 to-red-500' },
    { icon: Activity, title: '运动控制', description: '先进算法，流畅自然', gradient: 'from-indigo-500 to-blue-500' },
    { icon: Radio, title: '远程协同', description: '5G通信，实时操控', gradient: 'from-yellow-500 to-orange-500' },
  ];

  // 视频展示数据
  const videoShowcase = [
    { title: '运动展示', description: '展示产品的运动能力和灵活性' },
    { title: '功能演示', description: '实际应用场景中的功能表现' },
    { title: '技术细节', description: '核心技术和创新点展示' },
    { title: '应用案例', description: '真实客户使用场景' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent"></div>
        
        <div className="relative mx-auto max-w-7xl">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回产品列表
            </Link>
          </Button>

          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 text-sm font-medium bg-primary/20 text-primary border border-primary/30 rounded-full">
                {product.category}
              </span>
            </div>
            <h1 className="text-6xl font-bold text-foreground mb-4 animate-fade-in">
              {product.name}
            </h1>
            <p className="text-2xl text-primary mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {product.nameEn}
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {product.fullDescription}
            </p>
          </div>

          {/* Central Product Image with Glow */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden border border-primary/50 shadow-glow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Modules Matrix */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        
        <div className="relative mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">核心功能</h2>
          <p className="text-muted-foreground text-center mb-16">六大核心技术模块，构建智能未来</p>
          
          <div className="feature-bento-grid">
            {featureModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div
                  key={index}
                  className="feature-bento-item group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className="feature-icon-wrapper mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{module.title}</h3>
                    <p className="text-muted-foreground text-sm">{module.description}</p>
                  </div>
                  <div className="feature-bento-glow"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">产品视频</h2>
          <p className="text-muted-foreground text-center mb-16">悬停查看动态展示</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoShowcase.map((video, index) => (
              <div
                key={index}
                className="video-detail-card group"
                onMouseEnter={() => handleVideoHover(index, true)}
                onMouseLeave={() => handleVideoHover(index, false)}
              >
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  {/* Thumbnail */}
                  <img
                    src={product.image}
                    alt={video.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      hoveredVideo === index ? 'scale-110 blur-md opacity-30' : 'scale-100 blur-0 opacity-100'
                    }`}
                  />
                  
                  {/* Video (placeholder) */}
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      hoveredVideo === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    loop
                    muted
                    playsInline
                    src={product.image} // Placeholder - replace with actual video URLs
                  />
                  
                  {/* Play Indicator */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredVideo === index ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  
                  {/* Hover Info */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6 transition-opacity duration-300 ${
                    hoveredVideo === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">{video.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Card Border Glow */}
                <div className="video-card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Parameters with 3D Layout */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="relative mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">技术参数</h2>
          <p className="text-muted-foreground text-center mb-16">精密设计，卓越性能</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image with 3D Effect */}
            <div className="param-image-container group">
              <div className="param-image-wrapper">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/30 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Parameters Grid */}
            <div className="space-y-4">
              {product.detailedSpecs.map((spec, index) => (
                <div
                  key={index}
                  className="param-item group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-medium">{spec.label}</span>
                    <span className="text-foreground font-bold text-lg">{spec.value}</span>
                  </div>
                  <div className="param-item-line"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Specs Pills */}
          <div className="mt-16 flex flex-wrap gap-4 justify-center">
            {product.specs.map((spec, index) => (
              <div
                key={index}
                className="spec-pill animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {spec}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Demo Form */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/10">
        <div className="mx-auto max-w-3xl">
          <Card className="p-8 border-primary/30 shadow-glow">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center">申请产品演示</h2>
            <p className="text-muted-foreground text-center mb-8">填写信息，我们将尽快与您联系</p>
            <form onSubmit={handleDemoRequest} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名 *</Label>
                  <Input id="name" required placeholder="请输入您的姓名" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">公司 *</Label>
                  <Input id="company" required placeholder="请输入公司名称" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">邮箱 *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">电话</Label>
                  <Input id="phone" placeholder="联系电话" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">需求描述</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="请简要描述您的需求和期望的演示时间"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                提交申请
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
