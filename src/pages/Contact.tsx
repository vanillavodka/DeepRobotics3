import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ShoppingBag, Truck, ExternalLink, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    source: '',
    message: '',
  });

  const industries = [
    '电力巡检',
    '工业检测',
    '应急救援',
    '安防巡逻',
    '仓储物流',
    '教育科研',
    '其他',
  ];

  const sources = [
    '搜索引擎',
    '社交媒体',
    '朋友推荐',
    '行业展会',
    '新闻报道',
    '其他',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: '提交成功',
      description: '我们将尽快与您联系！',
    });
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      source: '',
      message: '',
    });
  };

  const selectedProduct = products.find(p => p.id === selectedModel);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <img 
            src="/src/assets/hero-robots.jpg" 
            alt="Contact Hero" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-8">
            联系我们
          </h1>
          <div className="flex items-center justify-center gap-3 text-2xl md:text-4xl">
            <Phone className="w-8 h-8 text-primary animate-pulse" />
            <a href="tel:400-123-4567" className="text-foreground hover:text-primary transition-colors">
              400-123-4567
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3 text-xl md:text-2xl text-muted-foreground">
            <Mail className="w-6 h-6 text-primary" />
            <a href="mailto:contact@deeprobotics.com" className="hover:text-primary transition-colors">
              contact@deeprobotics.com
            </a>
          </div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="contact-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Internal Navigation Buttons */}
        <section className="animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            快速导航
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link to="/support#business" className="contact-nav-card group">
              <div className="contact-nav-icon-wrapper">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  商务合作
                </h3>
                <p className="text-muted-foreground">
                  探索合作机会，共创商业价值
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>

            <Link to="/support#supply" className="contact-nav-card group">
              <div className="contact-nav-icon-wrapper">
                <Truck className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  供应链合作
                </h3>
                <p className="text-muted-foreground">
                  成为我们的供应商伙伴
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </section>

        {/* External Links */}
        <section className="animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            线上购买
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a 
              href="https://taobao.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-external-card group"
            >
              <div className="contact-external-glow" />
              <div className="relative z-10">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-3xl font-bold mb-2">淘宝旗舰店</h3>
                <p className="text-muted-foreground mb-4">官方授权，正品保障</p>
                <div className="flex items-center gap-2 text-primary">
                  <span>立即访问</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a 
              href="https://jd.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-external-card group"
            >
              <div className="contact-external-glow" />
              <div className="relative z-10">
                <div className="text-6xl mb-4">🛍️</div>
                <h3 className="text-3xl font-bold mb-2">京东自营店</h3>
                <p className="text-muted-foreground mb-4">京东配送，售后无忧</p>
                <div className="flex items-center gap-2 text-primary">
                  <span>立即访问</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Product and Industry Selection */}
        <section className="animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            产品咨询
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-3">
                <Label htmlFor="model" className="text-lg font-semibold">
                  选择产品型号
                </Label>
                <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger id="model" className="h-14 text-lg border-2 hover:border-primary transition-colors contact-select">
                    <SelectValue placeholder="请选择产品型号" />
                  </SelectTrigger>
                  <SelectContent className="bg-background/95 backdrop-blur-xl border-2">
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.id} className="text-lg py-3">
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="industry" className="text-lg font-semibold">
                  应用行业
                </Label>
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger id="industry" className="h-14 text-lg border-2 hover:border-primary transition-colors contact-select">
                    <SelectValue placeholder="请选择应用行业" />
                  </SelectTrigger>
                  <SelectContent className="bg-background/95 backdrop-blur-xl border-2">
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry} className="text-lg py-3">
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Product Image Display */}
            {selectedProduct && (
              <div className="product-display-card group">
                <div className="product-display-glow" />
                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative overflow-hidden rounded-2xl aspect-square">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-gradient">{selectedProduct.name}</h3>
                    <p className="text-xl text-muted-foreground">{selectedProduct.nameEn}</p>
                    <p className="text-lg leading-relaxed">{selectedProduct.description}</p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {selectedProduct.specs.map((spec, index) => (
                        <span key={index} className="spec-badge">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact Form */}
        <section className="animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            在线咨询
          </h2>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="contact-form-card">
              <div className="contact-form-glow" />
              <div className="relative z-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">
                      姓名 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 border-2 focus:border-primary transition-colors contact-input"
                      placeholder="请输入您的姓名"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold">
                      联系电话 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 border-2 focus:border-primary transition-colors contact-input"
                      placeholder="请输入联系电话"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">
                    电子邮箱 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 border-2 focus:border-primary transition-colors contact-input"
                    placeholder="请输入电子邮箱"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-base font-semibold">
                    城市/公司
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-12 border-2 focus:border-primary transition-colors contact-input"
                    placeholder="请输入所在城市或公司名称"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="source" className="text-base font-semibold">
                    获知渠道
                  </Label>
                  <Select value={formData.source} onValueChange={(value) => setFormData({ ...formData, source: value })}>
                    <SelectTrigger id="source" className="h-12 border-2 hover:border-primary transition-colors contact-select">
                      <SelectValue placeholder="请选择您的获知渠道" />
                    </SelectTrigger>
                    <SelectContent className="bg-background/95 backdrop-blur-xl border-2">
                      {sources.map((source) => (
                        <SelectItem key={source} value={source} className="py-3">
                          {source}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-semibold">
                    其他建议
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[150px] border-2 focus:border-primary transition-colors resize-none contact-input"
                    placeholder="请告诉我们您的需求或建议..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg contact-submit-btn group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  提交咨询
                </Button>
              </div>
            </form>
          </div>
        </section>

        {/* Contact Email */}
        <section className="animate-fade-in text-center py-12">
          <div className="contact-email-card">
            <div className="contact-email-glow" />
            <div className="relative z-10">
              <Mail className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-3xl font-bold mb-4">官方联系邮箱</h3>
              <a 
                href="mailto:contact@deeprobotics.com" 
                className="text-2xl text-primary hover:underline"
              >
                contact@deeprobotics.com
              </a>
              <p className="text-muted-foreground mt-4 text-lg">
                工作时间：周一至周五 9:00-18:00
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
