import { useParams, Link } from 'react-router-dom';
import { Download, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { getProductById, products } from '@/data/products';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');

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

  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 3);

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('申请已提交！我们将尽快与您联系');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back Button */}
      <section className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回产品列表
            </Link>
          </Button>
        </div>
      </section>

      {/* Product Hero */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="rounded-2xl overflow-hidden shadow-card border border-border bg-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover aspect-square"
              />
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <span className="px-3 py-1 text-sm font-medium bg-primary/20 text-primary border border-primary/30 rounded-full">
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {product.nameEn}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {product.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="hero" size="lg">
                  申请演示
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  下载资料
                </Button>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4">
                {product.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-border bg-card/50"
                  >
                    <p className="text-sm text-muted-foreground">{spec}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">技术参数</h2>
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.detailedSpecs.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-border last:border-0"
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-semibold text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">核心特性</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">应用场景</h2>
          <div className="flex flex-wrap gap-3">
            {product.applications.map((app, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 font-medium"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Request Demo Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">申请产品演示</h2>
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

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-hero">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">相关产品</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  nameEn={p.nameEn}
                  category={p.category}
                  image={p.image}
                  description={p.description}
                  specs={p.specs}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
