import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, TrendingUp, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getApplicationById } from '@/data/applications';
import { getProductById } from '@/data/products';

const ApplicationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const application = getApplicationById(id || '');

  if (!application) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">应用场景不存在</h1>
          <Button asChild variant="outline">
            <Link to="/applications">返回应用列表</Link>
          </Button>
        </div>
      </div>
    );
  }

  const recommendedProducts = application.recommendedProducts
    .map((id) => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const Icon = application.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back Button */}
      <section className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/applications">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回应用列表
            </Link>
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Application Image */}
            <div className="rounded-2xl overflow-hidden shadow-card border border-border">
              <img
                src={application.image}
                alt={application.title}
                className="w-full h-full object-cover aspect-video"
              />
            </div>

            {/* Application Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg border border-primary/30">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl font-bold text-foreground">
                  {application.title}
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {application.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg">
                  咨询方案
                </Button>
                <Button variant="outline" size="lg">
                  查看案例
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Problems */}
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-6 w-6 text-destructive" />
                <h2 className="text-2xl font-bold text-foreground">行业痛点</h2>
              </div>
              <ul className="space-y-4">
                {application.problems.map((problem, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Solutions */}
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">解决方案</h2>
              </div>
              <ul className="space-y-4">
                {application.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">核心价值</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {application.benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
                <p className="text-lg font-semibold text-gradient">{benefit}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {application.caseStudies.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-hero">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">成功案例</h2>
            <div className="space-y-8">
              {application.caseStudies.map((caseStudy, index) => (
                <Card key={index} className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {caseStudy.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {caseStudy.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {caseStudy.metrics.map((metric, mIndex) => (
                      <div
                        key={mIndex}
                        className="p-4 rounded-lg bg-primary/10 border border-primary/20"
                      >
                        <div className="text-sm text-muted-foreground mb-1">
                          {metric.label}
                        </div>
                        <div className="text-2xl font-bold text-gradient">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recommended Products */}
      {recommendedProducts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">推荐产品</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  nameEn={product.nameEn}
                  category={product.category}
                  image={product.image}
                  description={product.description}
                  specs={product.specs}
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

export default ApplicationDetail;
