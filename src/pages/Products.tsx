import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              产品中心
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              高性能机器人产品矩阵，为不同行业和场景提供专业解决方案
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

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="animate-fade-in">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  nameEn={product.nameEn}
                  category={product.category}
                  image={product.image}
                  description={product.description}
                  specs={product.specs}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            需要定制化解决方案？
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            我们的专家团队将为您量身打造最适合的机器人系统
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              联系销售
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/support/docs">技术文档</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
